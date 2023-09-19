import { Search } from "../components/Search"


const Button = ({ label }: { label: string }) => {
    return (<button className="text-gray-700 p-1 px-2 rounded transition border-transparent duration-300 ease-in-out hover:border hover:border-gray-100 hover:bg-gray-200">
        <span>
            {label}
        </span>
    </button>)
}

export const Home = () => {
    return (
        <section className="flex justify-center flex-col items-center space-y-4">
            <header>
                <span className="font-bold font-mono text-4xl">Where Knowledge Begins</span>
            </header>
            <Search />
            <span>Try asking</span>
            <div className="flex flex-col space-y-2 items-center">
                <div className="flex space-x-4">
                    <Button label="history of Argentina" />
                    <Button label="unique colorado flowers" />
                    <Button label="checkout time w hotel cdmx" />
                    <Button label="how to center a div" />
                </div>
                <div className="flex space-x-4">
                    <Button label="brown dog name ideas" />
                    <Button label="healthy restaurants in sf" />
                    <Button label="d/dx x^2 y^4,d/dy x^2 y^4" />
                </div>
            </div>
        </section>
    )
}