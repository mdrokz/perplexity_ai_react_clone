import { useContext } from "react";
import { AppContext } from "../App";
import { Button } from "./Button"

export const Nav = () => {

    const { setShowModal, isLoggedIn } = useContext(AppContext);
    return (
        <div className="h-full w-min bg-[#f3f3ee] p-2 flex flex-col justify-between">
            <nav className="space-y-2 p-4 ">
                <header className="flex space-y-2 flex-col">
                    <span>
                        Perplexity
                    </span>
                    <button onClick={() => {
                        setShowModal(true);
                    }} className="bg-white p-2 h-min w-full rounded-xl border text-sm hover:border-teal-500 transition duration-300 ease-in-out">
                        <span>
                            New thread
                        </span>
                        <span className="border px-1 mx-1 rounded">CTRL</span>
                        <span className="border px-1 rounded">I</span>
                    </button>
                </header>
                <ul className="space-y-2">
                    <li>
                        <Button icon={["fas", "magnifying-glass"]} label="Home" />
                    </li>
                    <li>
                        <Button icon={["fas", "book"]} label="Library" />
                    </li>
                    {isLoggedIn ? <li>
                        <Button icon={["fas", "circle-nodes"]} label="AI Profile" />
                    </li> : <li>
                        <Button icon={["fas", "right-to-bracket"]} label="Login" />
                    </li>}


                </ul>
                {!isLoggedIn && <button className="px-4 py-2 rounded-lg w-full bg-teal-600 hover:bg-teal-500 transition duration-300 ease-in-out text-white">
                    Sign Up
                </button>}

            </nav>
            <div className="flex flex-col justify-center space-y-2">
                <div className="flex flex-col justify-center p-2 space-y-2">
                    <span className="font-bold text-md">
                        Try Pro
                    </span>
                    <span className="text-clip text-gray-400">
                        Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and upload more files.
                    </span>
                    <div>
                        <button className="bg-gray-300 px-4 py-1 hover:text-gray-400 text-md transition duration-200 ease-in-out rounded-sm text-black">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="py-2 space-y-4">

                    <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />
                    <div className="flex space-x-2">
                        <Button label="Download" icon={["fas", "mobile-screen"]} />
                        <Button label="" icon={["fab", "x-twitter"]} />
                        <Button label="" icon={["fab", "discord"]} />
                    </div>
                </div>
            </div>
        </div>)
}