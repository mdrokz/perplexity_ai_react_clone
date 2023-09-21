import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/Button";

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const Loader = () => {
    return (<div className="flex flex-col items-center h-50 justify-center space-y-2">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
        {/* <span className="text-gray-500">Loading...</span> */}
    </div>)
}

const Card = ({ title }: { title: string }) => {
    return (<div className="border bg-white p-4 border-gray-200 rounded-md hover:bg-gray-200 transition ease-in-out duration-300 cursor-pointer">
        <span>{title}</span>
    </div>)
}

async function callOpenAI(query: string) {
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const apiKey = import.meta.env.VITE_OPENAI_KEY; // Replace with your actual API key

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant."
                },
                {
                    role: "user",
                    content: query
                }
            ]
        }),
    });

    const data = await response.json();
    return data;
}

export const Result = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const query = queryParams.get("query") ?? "";

    const [title, setTitle] = useState("");

    const [result, setResult] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const loadResult = async () => {
        setTitle(query);
        const res = await callOpenAI(query);
        setIsLoading(false);
        setResult(res.choices[0].message.content);

        const threads = JSON.parse(localStorage.getItem("threads")!);

        threads[generateUUID()] = {
            query,
            result: res.choices[0].message.content,
            createdAt: new Date().toISOString()
        };

        localStorage.setItem("threads", JSON.stringify(threads));
    }

    useEffect(() => {
        const threads = JSON.parse(localStorage.getItem("threads")!);

        if (threads[query]) {
            setTitle(threads[query].query);
            setResult(threads[query].result);
        } else {
            setIsLoading(true);
            loadResult();
        }

    }, []);

    return (
        <section className="m-auto relative w-full h-full items-start overflow-y-auto flex justify-center">
            <div className="flex justify-start p-20 flex-col items-start space-y-4 w-[55%] md:min-w-[500px] h-full">
                <header>
                    <span className="font-bold font-mono text-4xl">{title}</span>
                </header>
                <div className="flex flex-col space-y-2">
                    <div className="flex text-teal-500 space-x-2 items-center">
                        <FontAwesomeIcon icon={["fas", "timeline"]} />
                        <span>Sources</span>
                    </div>
                    <div className="gap-x-2 grid grid-cols-3 gap-y-2">
                        {new Array(6).fill(0).map((_, i) => <Card key={i} title={`Source ${i + 1}`} />)}
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex text-teal-500 space-x-2 space-y-2 items-center">
                        <FontAwesomeIcon icon={["fas", "align-left"]} />
                        <span>Answer</span>
                    </div>
                    {isLoading && <Loader />}
                    <div className="text-clip space-y-2">
                        {result.split(".").map((sentence, i) => <p key={i} className="text-gray-500">{sentence}</p>)}
                        {/* <p>
                        </p> */}
                    </div>
                </div>
            </div>
            {/* <div className="items-center bottom-20 p-20 fixed w-[55%]"> */}
            <div className="bg-gray-200 items-center bottom-20 fixed w-[35%] p-1 rounded-full">
                <div className="flex bg-white items-center justify-between rounded-full w-full p-2 border hover:border-teal-500 transition duration-300 ease-in-out border-gray-300">
                    <input placeholder="Ask Follow-up..." className="w-full p-1 h-full border-none outline-none resize-none" />
                    <div className="max-w-max flex gap-2">
                        <button>Copilot</button>
                        <Button icon={["fas", "arrow-up"]} rounded="-xl" />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}