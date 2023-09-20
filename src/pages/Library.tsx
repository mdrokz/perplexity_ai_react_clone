import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../components/Button"


export const Library = () => {
    return (<section className="flex flex-col w-full space-y-2">
        <div className="flex space-y-2 justify-between items-center p-5">
            <div className="flex items-center space-x-2 justify-center">
                <FontAwesomeIcon size="2xl" icon={["fas", "book"]} />
                <span className="font-bold text-2xl">Library</span>
            </div>
            <div className="flex space-x-2 rounded-lg w-[50%] bg-white border px-2 py-2 border-gray-200 hover:border-teal-500 transition ease-out duration-300">
                <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
                <input className="w-full border-none outline-none" placeholder="Search your threads" />
            </div>
        </div>
        <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />
        <div className="flex justify-between p-5">
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center space-x-2">
                    <span>Threads</span>
                    <div className="flex space-x-2 items-center">
                        <Button icon={["fas", "ellipsis"]} />
                        <Button icon={["fas", "plus"]} />
                    </div>
                </div>
                <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />

            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                    <span>Collections</span>
                    <div>
                        <Button icon={["fas", "plus"]} />
                    </div>
                </div>
                <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />
                <div className="bg-[#f3f3ee] flex flex-col p-2 rounded-md space-y-2 space-x-2 items-center justify-center">
                    <span className="text-lg p-2">
                        Organize your threads or collaborate with others
                    </span>
                    <button className="px-4 py-1 rounded-lg w-full bg-teal-600 hover:bg-teal-500 transition duration-300 ease-in-out text-white">
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    </section>)
}