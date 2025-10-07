export default function MobileManu(){
    return <div>
        <div className="right flex flex-col bg-black text-white py-2.5 px-2 rounded-2xl">
                <ul className="flex flex-col gap-10 mb-5 items-center">
                    <li className="cursor-pointer" >About us</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Use Cases</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Blog</li>
                </ul>
                <button className="h-16 w-56 border-2 border-black rounded-2xl cursor-pointer bg-white text-black">
                    Request a quote
                </button>
            </div>
    </div>
}