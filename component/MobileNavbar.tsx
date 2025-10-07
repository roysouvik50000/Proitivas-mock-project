'use client'

import Image from "next/image"
import { useState } from "react"
import MobileManu from "./MobileManu";
export default function MobileNavbar(){
const [manuOpen , setManuOpen] = useState(false);
const manuOpenHandler = ()=>{
    setManuOpen((prev)=> ! prev)
}
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
                <div className="right flex cursor-pointer" onClick={manuOpenHandler}>
                   {manuOpen ? (<Image
                        className=""
                        src="/cross.png"
                        alt="logo"
                        width={32}
                        height={32}
                    />):(<Image
                        className=""
                        src="/menu.png"
                        alt="logo"
                        width={32}
                        height={32}
                    />)}
                </div>
                <div className="absolute right-7 top-16">
                        {manuOpen ?(<MobileManu/>):(<></>)}
                </div>
            </div>
        )
}