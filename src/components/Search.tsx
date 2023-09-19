import { Button } from "./Button"

export const Search = () => {
    return (<div className="flex flex-col justify-start rounded-md w-[50%] h-full w-full p-2 border hover:border-teal-500 transition duration-300 ease-in-out border-gray-300">
        <div className="flex">
            <textarea placeholder="Ask anything..." className="w-full h-full border-none outline-none resize-none" />
        </div>
        <div className="flex justify-between">
            <div className="flex space-x-2 p-2">
                <Button label="Focus" icon={["fas","magnifying-glass"]} rounded="-xl"/>
                <Button label="File" icon={["fas","circle-plus"]} rounded="-xl"/>
            </div>
            <div className="flex space-x-2 p-2">
                <button>Copilot</button>
                <Button icon={["fas","arrow-right"]} rounded="-xl"/>
            </div>
        </div>
    </div>)
}