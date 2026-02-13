import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DirectorsSection } from "@/components/sections/DirectorsSection";
import { ExecutiveMembersSection } from "@/components/sections/ExecutiveMembersSection";
import { InstructorsSection } from "@/components/sections/InstructorsSection";
import { ContactUs } from "@/components/sections/ContactUs";

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            <Header />

            <main className="w-full mx-auto space-y-0 md:space-y-2 bg-[#E5E5E5] pt-24 md:pt-32">
                <DirectorsSection />
                <ExecutiveMembersSection />
                <InstructorsSection countryName="UAE" flagCode="ae" />
                <InstructorsSection countryName="India" flagCode="in" />
                <ContactUs className="px-4 py-1 md:py-4" />
            </main>

            <Footer />
        </div>
    );
}
