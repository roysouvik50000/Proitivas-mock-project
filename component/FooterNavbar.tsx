import Image from "next/image";

const FooterNavbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="left flex items-center gap-3">
                <Image
                    className=""
                    src="/logo-white.png"
                    alt="logo"
                    width={32}
                    height={32}
                />
                <h1 className="text-4xl font-medium mb-1.5">Positivas</h1>
            </div>
            <div className="right flex flex-wrap">
                <div className="hidden md:block">
                    <ul className="flex gap-10 mr-5 items-center">
                        <li>About us</li>
                        <li>Services</li>
                        <li>Use Cases</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <Image
                        className=""
                        src="/icon1.png"
                        alt="logo"
                        width={22}
                        height={22}
                    />
                    <Image
                        className=""
                        src="/icon2.png"
                        alt="logo"
                        width={22}
                        height={22}
                    />
                    <Image
                        className=""
                        src="/icon3.png"
                        alt="logo"
                        width={22}
                        height={22}
                    />
                </div>
            </div>
        </div>
    );
}

export default FooterNavbar;