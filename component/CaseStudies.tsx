import CaseStudiesTab from "./CaseStudiesTab";
import SectionHeading from "./SectionHeading";

const CaseStudies = () => {
    return (
        <div>
            <SectionHeading sectionHeading={"Case Studies"} sectionText={<>Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</>}/>
            <div className="flex justify-around bg-black text-white md:flex-nowrap flex-wrap py-16 px-14 rounded-3xl gap-3.5">
                <CaseStudiesTab text={<>For a local restaurant, we <br /> implemented a targeted PPC <br />campaign that resulted in a 50% <br /> increase in website traffic and a <br />25% increase in sales.</>}/>
                <div className="bg-white md:w-0.5 md:h-36 w-48 h-0.5"></div>
                <CaseStudiesTab text={<>For a B2B software company, we <br />developed an SEO strategy that <br />resulted in a first page ranking <br />for key keywords and a 200% <br /> increase in organic traffic.</>}/>
                <div className="bg-white md:w-0.5 md:h-36 w-48 h-0.5"></div>
                <CaseStudiesTab text={<>For a local restaurant, we <br /> implemented a targeted PPC <br />campaign that resulted in a 50% <br /> increase in website traffic and a <br />25% increase in sales.</>}/>
            </div>
        </div>
    );
}

export default CaseStudies;