




export const Nav = () => {
    return (
        <div className="h-full w-min bg-[#e5e7eb] flex flex-col justify-between">
            <nav className="space-y-2 p-4 ">
                <header className="flex flex-col">
                    <span>
                        Perplexity
                    </span>
                    <button className="bg-white p-2 h-min w-full rounded-xl border text-sm hover:border-teal-500 transition duration-300 ease-in-out">
                        <span>
                            New thread
                        </span>
                        <span className="border px-1 mx-1 rounded">CTRL</span>
                        <span className="border px-1 rounded">I</span>
                    </button>
                </header>
                <ul className="space-y-2">
                    <li>
                        Home
                    </li>
                    <li>
                        Library
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
                <button className="px-4 py-2 rounded-lg w-full bg-teal-600 hover:bg-teal-500 transition duration-300 ease-in-out text-white">
                    Sign Up
                </button>
            </nav>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center p-2 space-y-2">
                    <span className="font-bold text-md">
                        Try Pro
                    </span>
                    <span className="text-clip text-gray-400">
                        Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and upload more files.
                    </span>
                    <button>
                        Learn More
                    </button>
                </div>
                <hr />
                <div className="flex space-x-2">
                    <button>Download</button>
                    <button>X</button>
                    <button>D</button>
                </div>
            </div>
        </div>)
}