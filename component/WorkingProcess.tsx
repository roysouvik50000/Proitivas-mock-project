import SectionHeading from "./SectionHeading";
import WorkingProcessTab from "./WorkingProcessTab";
const WorkingProcess = () => {
    return (
        <div>
            <SectionHeading sectionHeading={"Our Working Process"} sectionText={<>Step-by-Step Guide to Achieving Your <br />Business Goals</>} />
            <div>
                <WorkingProcessTab serialNo={"01"} heading={"Consultation"} paragraph={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
                <WorkingProcessTab serialNo={"02"} heading={"Research and Strategy Development"} paragraph={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
                <WorkingProcessTab serialNo={"03"} heading={"Implementation"} paragraph={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
                <WorkingProcessTab serialNo={"04"} heading={"Monitoring and Optimization"} paragraph={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
                <WorkingProcessTab serialNo={"05"} heading={"Reporting and Communication"} paragraph={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
                <WorkingProcessTab serialNo={"06"} heading={"Continual Improvement"} paragraph={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
            </div>
        </div>
    );
}

export default WorkingProcess;