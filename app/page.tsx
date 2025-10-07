
import Brands from "@/component/Brands";
import CaseStudies from "@/component/CaseStudies";
import MobileNavbar from "@/component/MobileNavbar";
import Navbar from "@/component/Navbar";
import Proposal from "@/component/Proposal";
import Services from "@/component/Services";
import WorkingProcess from "@/component/WorkingProcess";
import Team from "@/component/Team"
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-3 md:px-24 pt-[30] md:pt-[60]">
      <main className="">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="md:hidden block">
          <MobileNavbar/>
        </div>
        <div className="desktop hidden md:block">
          <div className="home-page flex py-16 justify-between">
            <div className="left">
              <h1 className="text-7xl">
                Navigating the <br />digital landscape <br />for success
              </h1>
              <p className="text-3xl my-9">
                Our digital marketing agency helps businesses <br /> grow and succeed online through a range of <br />services including SEO, PPC, social media marketing, <br /> and content creation.
              </p>
              <button type="button" className="bg-black rounded-2xl h-16 w-56 text-white cursor-pointer">
                Book a consultation
              </button>
            </div>
            <div className="right">
              <Image
                className=""
                src="/Illustration.png"
                alt="hero-img"
                width={600}
                height={515}
              />
            </div>
          </div>
        </div>
        <div className="mobile md:hidden block">
          <div className="home-page flex py-16 justify-between">
            <div className="left">
              <h1 className="text-7xl">
                Navigating the <br />digital landscape <br />for success
              </h1>
              <Image
                className=""
                src="/Illustration.png"
                alt="hero-img"
                width={600}
                height={515}
              />
              <p className="text-3xl my-9">
                Our digital marketing agency helps businesses <br /> grow and succeed online through a range of <br />services including SEO, PPC, social media marketing, <br /> and content creation.
              </p>
              <button type="button" className="bg-black rounded-2xl h-16 w-56 text-white cursor-pointer">
                Book a consultation
              </button>
            </div>
              
          </div>
        </div>
        <div>
          <Brands />
        </div>
        <Services/>
        <Proposal/>
        <CaseStudies/>
        <WorkingProcess/>
        <Team />
      </main>
    </div>
  );
}
