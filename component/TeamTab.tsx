import Image from "next/image";

const TeamTab = ({imgPath , name , position , about}:{imgPath:String , name:String , position:String , about : String}) => {
    return (
        <div className="md:w-2/8 m-6 border-2 border-black rounded-2xl px-8 py-10 shadow-[0_5px_0px_0px_rgb(0,0,0)]">
            <div className="flex">
                <Image
                    className=""
                    src={`/${imgPath}`}
                    alt="arrow1"
                    width={112}
                    height={112}
                />
                <div className="flex flex-col  justify-end">
                    <h1 className="font-bold">{name}</h1>
                    <p className="text-sm">{position}</p>
                </div>
                <Image
                    className="h-5"
                    src="/linkedInicon.png"
                    alt="arrow1"
                    width={20}
                    height={20}
                />
            </div>
            <div className="bg-black h-0.5 w-[240] my-3.5 mx-auto"></div>
            <div>
                <p>{about}</p>
            </div>
        </div>
    );
}

export default TeamTab;