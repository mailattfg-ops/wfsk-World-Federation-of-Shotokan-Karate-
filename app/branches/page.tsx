import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BranchesSection } from "@/components/sections/BranchesSection";
import { ContactUs } from "@/components/sections/ContactUs";

export default function BranchesPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            <Header />

            <main className="w-full mx-auto space-y-0 md:space-y-2 bg-[#E5E5E5] pt-24 md:pt-32">
                <BranchesSection />
                <ContactUs className="px-4 py-1 md:py-4" />
            </main>

            <Footer />
        </div>
    );
}
