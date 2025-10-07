import FooterNavbar from "./FooterNavbar";

const Footer = () => {
    return (
        <div className="mt-28 bg-black text-white rounded-t-2xl px-3 py-4">
            <FooterNavbar/>
            <div className="flex justify-between flex-wrap my-5 ">
                <div>
                    <h1 className="bg-green-400 inline rounded-2xl px-1.5 text-black font-bold">Contact us:</h1>
                    <p>Email: info@positivus.com</p>
                    <p className="my-3.5">Phone: 555-567-8901</p>
                    <p>Address: 1234 Main St</p>
                    <p>Moonstone City, Stardust State 12345</p>
                </div>
                <div className="flex bg-white/10 px-3 py-2 justify-center items-center flex-wrap rounded-2xl gap-1.5">
                    <input type="text" name="email" id="email" placeholder="Email" className="border-2 border-white rounded-2xl px-2.5 py-1.5 h-14 w-96 outline-none"/>
                    <button className="h-16 w-56 border-2 border-black rounded-2xl cursor-pointer bg-green-400">
                    Subscribe to news
                </button>
                </div>
            </div>
            <div className="w-full h-0.5 bg-white"></div>
            <p className="my-2.5 text-center">© 2023 Positivus. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;