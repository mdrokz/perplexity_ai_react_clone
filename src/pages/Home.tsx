import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { Search } from "../components/Search"


const queries = [
    "history of Argentina",
    "unique colorado flowers",
    "checkout time w hotel cdmx",
    "how to center a div",
    "brown dog name ideas",
    "healthy restaurants in sf",
    "d/dx x^2 y^4,d/dy x^2 y^4"
]

export const Home = () => {

    const navigate = useNavigate();

    return (
        <section className="m-auto">
            <div className="flex justify-center p-20 flex-col items-center space-y-4">
                <header>
                    <span className="font-bold font-mono text-4xl">Where Knowledge Begins</span>
                </header>
                <Search />
                <span>Try asking</span>
                <div className="grid grid-cols-4 gap-2 justify-center">
                    {queries.map((query,i) => {
                        return <Button key={i} background={false} onClick={() => navigate(`/result?query=${query}`)} label={query} />
                    })}
                    {/* <div className="flex space-x-4">
                        <Button label="history of Argentina" />
                        <Button label="unique colorado flowers" />
                        <Button label="checkout time w hotel cdmx" />
                        <Button label="how to center a div" />
                    </div>
                    <div className="flex space-x-4">
                        <Button label="brown dog name ideas" />
                        <Button label="healthy restaurants in sf" />
                        <Button label="d/dx x^2 y^4,d/dy x^2 y^4" />
                    </div> */}
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <a className="text-teal-500 hover:underline" href="#">Try Pro</a>
                <a className="text-gray-400 hover:underline" href="#">Careers</a>
                <a className="text-gray-400 hover:underline" href="#">FAQ</a>
                <a className="text-gray-400 hover:underline" href="#">Labs</a>
                <a className="text-gray-400 hover:underline" href="#">Blog</a>
                <a className="text-gray-400 hover:underline" href="#">Privacy</a>
                <a className="text-gray-400 hover:underline" href="#">Terms</a>
            </div>
        </section>
    )
}