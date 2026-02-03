import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BranchesSection } from "@/components/sections/BranchesSection";
import { ContactUs } from "@/components/sections/ContactUs";

export default function BranchesPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] font-(family-name:--font-geist-sans)">
            <Header />

            <main className="pt-32 pb-16 w-full mx-auto space-y-20 bg-[#E5E5E5]">
                <BranchesSection />
                <ContactUs className="p-4" />
            </main>

            <Footer />
        </div>
    );
}
