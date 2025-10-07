import SectionHeading from "./SectionHeading";
import Image from "next/image";

const ContactUs = () => {
    return (
        <div className="my-16">
            <SectionHeading sectionHeading={"Contact Us"} sectionText={<>Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs</>} />
            <div className="flex justify-between bg-gray-200 rounded-2xl relative md:px-24 px-6 py-14">
                <div>
                    <div>
                        <label htmlFor="name">Name</label><br /> 
                        <input type="text" name="name" id="name" placeholder="Name" className="border-2 border-black rounded-2xl px-2.5 py-2.5 mt-1 mb-5 w-2xs"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="name" placeholder="Email" className="border-2 border-black rounded-2xl px-2.5 py-2.5 mt-1 mb-5 w-2xs"/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label><br />
                        <textarea name="message" id="message" placeholder="Message" className="border-2 border-black rounded-2xl px-2.5 py-2.5 mt-1 mb-5 w-2xs"></textarea>
                    </div>
                    <button className="h-16 border-2 border-black rounded-2xl cursor-pointer w-2xs">
                    Send Message
                    </button>
                </div>
                <Image
                    className="absolute right-[-220] top-0 md:block hidden"
                    src="/contactUsImg.png"
                    alt="img"
                    width={500}
                    height={540}
                />
            </div>
        </div>
    );
}

export default ContactUs;