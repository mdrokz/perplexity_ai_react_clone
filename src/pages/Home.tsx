import { Button } from "../components/Button"
import { Search } from "../components/Search"


export const Home = () => {
    return (
        <section className="m-auto">
            <div className="flex justify-center p-20 flex-col items-center space-y-4">
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