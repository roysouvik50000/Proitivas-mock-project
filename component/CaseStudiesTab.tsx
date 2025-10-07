import Image from "next/image";
const CaseStudiesTab = ({ text }: { text: React.ReactNode }) => {
    return (
        <div className="md:w-1/3 w-full">
            <p className="mb-5">
                {text}
            </p>
            <div className="flex">
                <h1>Learn More</h1>
                <Image
                    className=""
                    src="/Arrow 1.png"
                    alt="arrow1"
                    width={22}
                    height={22}
                />
            </div>
        </div>
    );
}

export default CaseStudiesTab;