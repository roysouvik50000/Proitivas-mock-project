const SectionHeading = ({sectionHeading , sectionText}:{sectionHeading:String , sectionText:React.ReactNode}) => {
    return (
        <div>
            <div className="md:flex md:gap-10 md:flex-row md:justify-start justify-center text-center py-16">
                <h1 className="bg-green-400 inline p-1 rounded-[8] text-5xl mx-auto md:mx-0">{sectionHeading}</h1>
                <p className="md:mt-0 mt-3">{sectionText}</p>
            </div>
        </div>
    );
}

export default SectionHeading;