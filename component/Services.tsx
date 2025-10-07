import SectionHeading from "./SectionHeading";
import ServicesTab from "./ServicesTab";

export default function Services() {
    return (
        <div className="py-11">
            <SectionHeading sectionHeading={"Services"} sectionText={<>At our digital marketing agency, we offer a range of services to <br />
                    help businesses grow and succeed online. These services include:</>}/>
            <div className="flex flex-wrap justify-around">
                <ServicesTab bgCol={'#D3D3D3'} highLightCol={"#B9FF66"} img={'tokyo.png'} text1={"Search engine"} text2={"optimization"} />
                <ServicesTab bgCol={'#B9FF66'} highLightCol={"white"} img={'img1.png'} text1={"Search engine"} text2={"optimization"} />
                <ServicesTab bgCol={'black'} highLightCol={"white"} img={'img2.png'} text1={"Search engine"} text2={"optimization"} />
                <ServicesTab bgCol={'#D3D3D3'} highLightCol={"#B9FF66"} img={'img3.png'} text1={"Search engine"} text2={"optimization"} />
                <ServicesTab bgCol={'#B9FF66'} highLightCol={"white"} img={'Illustration.png'} text1={"Search engine"} text2={"optimization"} />
                <ServicesTab bgCol={'black'} highLightCol={"#B9FF66"} img={'img4.png'} text1={"Search engine"} text2={"optimization"} />
            </div>
        </div>
    );
}