


export const Search = () => {
    return (<div className="flex flex-col justify-start rounded-md w-[50%] h-max p-2 border border-gray-300">
        <div className="flex">
            <textarea placeholder="Ask anything..." className="w-max h-max border-none outline-none resize-none" />
        </div>
        <div className="flex justify-between">
            <div className="flex space-x-2 p-2">
                <button>Focus</button>
                <button>File</button>
            </div>
            <div className="flex space-x-2 p-2">
                <span>O</span>
                <button>Copilot</button>
                <button>Enter</button>
            </div>
        </div>
    </div>)
}