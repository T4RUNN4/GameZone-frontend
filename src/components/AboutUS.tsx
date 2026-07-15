import Image from "next/image";
import SectionContainer from "./SectionContainer";

export default function AboutUs() {
    return (
      <SectionContainer
        title="About US"
        subtitle="What is GameZone and What do We offer?"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Image
            src="https://image.benq.com/is/image/benqco/Gamingroom_tk700sti-A?$ResponsivePreset$"
            alt="Game Room"
            width={600}
            height={300}
          />
          <div>
            <h1 className="text-lg md:text-4xl font-bold mb-8">What is GameZone?</h1>
            <p className="md:text-lg text-justify mb-12">Gamezone is a physical shop in Chawkbazar, Chattogram where you can come and  play different Play Station 4 and Play Station 5 games with your friends and family with an very cheap hourly rate. We offer various range of gameslike Cricket, Football along with very cheap hourly rate and 24/7 air conditioning.</p>
            <p className="md:text-lg font-bold mb-3">Shop Opening Time</p>
            <ul className="list-disc ml-4">
                <li>Sunday - Thursday: 10:00 a.m. - 08 p.m.</li>
                <li>Friday - Satuday: 03:00 p.m. - 11 p.m.</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    );
}