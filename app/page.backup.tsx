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
    <div className="min-h-screen" suppressHydrationWarning>
      <Header />
      <main>
        <Hero />
        <WorldRecordHolder />
        <WhoWeAre />
        <OurTeam />
        <OurPrograms />
        <ContactUs className="p-2 sm:p-4" />
      </main>
      <Footer />
    </div>
  );
}

