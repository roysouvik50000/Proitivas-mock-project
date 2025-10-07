'use client'
import { useState } from "react";
import Image from "next/image";
const WorkingProcessTab = ({ serialNo, heading, paragraph }: { serialNo: String, heading: String, paragraph: String }) => {
    const [isOpen, setIsOpen] = useState(false)
    const tabOpenHandler = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <div className={`my-3.5 ${isOpen? 'bg-green-500':'bg-gray-200'} border-2 border-black rounded-2xl px-8 py-10 shadow-[0_5px_0px_0px_rgb(0,0,0)]`}>
            <div className="flex justify-between mb-5">
                <div className="flex gap-2 items-center">
                    <h1 className="text-5xl">{serialNo}</h1>
                    <h1 className="text-2xl font-bold">{heading}</h1>
                </div>
                <div onClick={tabOpenHandler}>
                    {
                        isOpen ? (<Image
                            className=""
                            src="/mainus.png"
                            alt="arrow1"
                            width={32}
                            height={32}
                        />) : (
                            <Image
                                className=""
                                src="/Plus icon (1).png"
                                alt="arrow1"
                                width={32}
                                height={32}
                            />
                        )
                    }
                </div>
            </div>
            <div>
                {isOpen ? (<div><div className="bg-black h-0.5 w-full mb-2.5">

                </div>
                    <p>
                        {paragraph}
                    </p></div>) : (<></>)}
            </div>
        </div>
    );
}

export default WorkingProcessTab;