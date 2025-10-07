import Image from "next/image";
const Proposal = () => {
    return (
        <div className="md:flex-row flex-col flex justify-center items-center md:justify-around mx-auto bg-gray-200 md:h-[350] my-16 rounded-[40]">
            <div className="left">
                <h1 className="my-7 text-3xl">Let’s make things happen</h1>
                <p className="mb-3.5">Contact us today to learn more about how our digital <br /> marketing services can help your business grow and <br /> succeed online.</p>
                <button className="h-16 w-56 border-2 border-black rounded-2xl cursor-pointer">
                    Get your free proposal
                </button>
            </div>
            <div className="right">
                <Image
                    className=""
                    src="/freeProposal.png"
                    alt="freeProposal"
                    width={359}
                    height={395}
                />
            </div>
        </div>
    );
}

export default Proposal;