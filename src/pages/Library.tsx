import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Library = () => {

    const threads = JSON.parse(localStorage.getItem("threads") ?? "{}");

    const navigate = useNavigate();

    const threadsArray = Object.keys(threads).map((key) => {
        return {
            id: key,
            ...threads[key]
        }
    });

    return (
        <section className="flex flex-col w-full space-y-2">
            <div className="flex space-y-2 justify-between items-center px-12 py-6">
                <div className="flex items-center space-x-2 justify-center">
                    <FontAwesomeIcon size="2xl" icon={["fas", "book"]} />
                    <span className="font-bold text-2xl">Library</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full w-[50%] bg-white border px-4 py-2 border-gray-200 hover:border-teal-500 transition ease-out duration-300">
                    <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
                    <input
                        className="w-full border-none outline-none"
                        placeholder="Search your threads"
                    />
                </div>
                <div className="flex gap-x-sm"></div>
            </div>
            <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />
            <div className="w-full h-full max-h-[88vh] overflow-y-scroll mx-auto  max-w-screen-xl md:px-12 px-md">
                <div className="lg:grid grid-cols-12 gap-12">
                    <div className="col-span-8 lg:mt-lg space-y-2">
                        <div className="flex justify-between items-center space-x-2">
                            <span>Threads</span>
                            <div className="flex space-x-2 items-center">
                                <Button icon={["fas", "ellipsis"]} />
                                <Button icon={["fas", "plus"]} />
                            </div>
                        </div>
                        <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />
                        {threadsArray.length == 0 && <div className="rounded-md bg-[#f3f3ee] w-full h-[50%] flex items-center justify-center">
                            <span>No threads yet</span>
                        </div>}
                        {
                            threadsArray.map((thread: any, index: number) => {

                                const createdAt = new Date(thread.createdAt);

                                const now = new Date();
                                

                                const seconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
                                const minutes = Math.floor(seconds / 60);
                                const hours = Math.floor(minutes / 60);
                                const days = Math.floor(hours / 24);

                                let timeAgo;

                                if (seconds < 60) {
                                    timeAgo = `${seconds} seconds ago`;
                                } else if (minutes < 60) {
                                    timeAgo = `${minutes} minutes ago`;
                                } else if (hours < 24) {
                                    timeAgo = `${hours} hours ago`;
                                } else {
                                    timeAgo = `${days} days ago`;
                                }

                                return (
                                    <>
                                        {index > 0 && <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />}
                                        <div key={index} className="flex flex-col items-start space-y-2">
                                            <button onClick={() => {
                                                navigate(`/result?query=${thread.id}`);
                                            }} className="text-teal-500 hover:text-teal-600 transition ease-in-out duration-300">{thread.query}</button>
                                            <span className="text-gray-400">
                                                {thread.result.slice(0, 100)}...
                                            </span>
                                            <div className="flex w-full justify-between">
                                                <span>{timeAgo}</span>
                                                <div className="flex space-x-2 items-center">
                                                    <Button icon={["fas", "ellipsis"]} />
                                                    <Button icon={["fas", "plus"]} />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-span-4 lg:mt-lg space-y-2">
                        <div className="flex justify-between">
                            <span>Collections</span>
                            <div>
                                <Button icon={["fas", "plus"]} />
                            </div>
                        </div>
                        <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />
                        <div className="bg-[#f3f3ee] flex flex-col p-4 rounded-md space-y-2 space-x-2 items-center justify-center">
                            <span className="text-lg p-2">
                                Organize your threads or collaborate with others
                            </span>
                            <button className="px-4 py-1 rounded-lg w-full bg-teal-600 hover:bg-teal-500 transition duration-300 ease-in-out text-white">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};