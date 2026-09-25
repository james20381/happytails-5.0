import { Display, H1 } from "./typography";

export default function Hero() {
    return (
        <header>
            <Display className="text-primary">Trusted Dog Stay at <span className="bg-linear-to-br from-black via-gray-700 to-gray-400 bg-clip-text text-transparent tracking-tight font-sans font-extrabold w-125 text-8xl">The Glen</span></Display>

        </header>
    )
}