import SectionHeading from "./SectionHeading";
import TeamTab from "./TeamTab";

const Team = () => {
    return (
        <div>
            <SectionHeading sectionHeading={"Team"} sectionText={<>Meet the skilled and experienced team behind our <br/> successful digital marketing strategies</>} />
            <div className="flex flex-wrap justify-between">
                <TeamTab imgPath="team.png" name={"John Smith"} position={"CEO and Founder"} about={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"} />
                <TeamTab imgPath="team1.png" name={"Jane Doe"} position={"Director of Operations"} about={"7+ years of experience in project management and team leadership. Strong organizational and communication skills"} />
                <TeamTab imgPath="team2.png" name={"Michael Brown"} position={"Senior SEO Specialist"} about={"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"} />
                <TeamTab imgPath="team3.png" name={"Emily Johnson"} position={"PPC Manager"} about={"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"} />
                <TeamTab imgPath="team4.png" name={"Brian Williams"} position={"Social Media Specialist"} about={"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"} />
                <TeamTab imgPath="team5.png" name={"Sarah Kim"} position={"Content Creator"} about={"2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"} />
            </div>
            <div className="float-end pr-3">
                <button className="h-16 w-56 border-2 border-black rounded-2xl cursor-pointer">
                    See all team
                </button>
            </div>
        </div>
    );
}

export default Team;