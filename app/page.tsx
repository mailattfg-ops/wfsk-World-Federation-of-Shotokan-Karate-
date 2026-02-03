import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { WorldRecordHolder } from "@/components/sections/WorldRecordHolder";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { OurTeam } from "@/components/sections/OurTeam";
import { OurPrograms } from "@/components/sections/OurPrograms";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WorldRecordHolder />
      <WhoWeAre />
      <OurTeam />
      <OurPrograms />
      <ContactUs />
      <Footer />
    </main>
  );
}
