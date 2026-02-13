import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactUs } from "@/components/sections/ContactUs";
import { SectionHeader } from "@/components/SectionHeader";
import { NewsSection } from "@/components/sections/NewsSection";
import { getNewsEvents } from "@/lib/actions/news";
import HomenewsSection from "@/components/sections/HomenewsSection";

export const metadata = {
    title: "News & Events | WFSK",
    description: "Stay updated with the latest news, tournament results, and event highlights from the World Federation of Shotokan Karate.",
};

export default async function NewsPage() {

    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            <Header />

            <main className="w-full mx-auto space-y-0 md:space-y-2 bg-[#E5E5E5] pt-24 md:pt-32">

                <HomenewsSection/>
                <ContactUs className="px-4 py-1 md:py-4" />
            </main>

            <Footer />
        </div>
    );
}
