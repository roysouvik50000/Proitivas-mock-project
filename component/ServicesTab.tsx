import Image from "next/image";

const ServicesTab = ({ bgCol, highLightCol, img, text1, text2 }: { bgCol: String; highLightCol: String, img: String, text1: String, text2: String }) => {

    const boxStyle = {
        boxShadow: `0px 5px 1px black`, // offsetX, offsetY, blurRadius, color
        padding: '50px',
        backgroundColor: `${bgCol}`,
        border: `3px solid black`,
        borderRadius: '8px',
    };
    const textStyle = {
        backgroundColor: `${highLightCol}`
    }


    return (
        <div style={boxStyle} className="flex justify-between md:w-[45%] my-3">
            <div className="left w-1/2 flex flex-col justify-between">
                <div>
                    <h1 className={`text-wrap text-xl font-bold inline-block`} style={textStyle}>{text1}</h1>
                    <h1 className={`text-wrap text-xl font-bold inline`} style={textStyle}>{text2}</h1>
                </div>
                <div className="flex ">
                    <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
                        <Image
                            className=""
                            src="/Arrow 1.png"
                            alt="logo"
                            width={21}
                            height={21}
                        />
                    </div>
                    <p className="text-black">Learn more</p>
                </div>
            </div>
            <div className="right">
                <Image
                    className=""
                    src={`/${img}`}
                    alt="logo"
                    width={210}
                    height={170}
                />
            </div>
        </div>
    );
}

export default ServicesTab;