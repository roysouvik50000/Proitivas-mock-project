import Image from "next/image"

export default function Navbar() {
    return (
        <div className="flex justify-between items-center">
            <div className="left flex items-center gap-3">
                <Image
                    className=""
                    src="/Vector.svg"
                    alt="logo"
                    width={32}
                    height={32}
                />
                <h1 className="text-4xl font-medium mb-1.5">Positivas</h1>
            </div>
            <div className="right flex">
                <ul className="flex gap-10 mr-5 items-center">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Use Cases</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <button className="h-16 w-56 border-2 border-black rounded-2xl cursor-pointer">
                    Request a quote
                </button>
            </div>
        </div>
    )
}