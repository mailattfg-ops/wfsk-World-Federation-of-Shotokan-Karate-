import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlackBeltsSection } from "@/components/sections/BlackBeltsSection";
import { ContactUs } from "@/components/sections/ContactUs";

export default function BlackBeltsPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] font-(family-name:--font-geist-sans)">
            <Header />

            <main className="pt-24 md:pt-32 w-full mx-auto space-y-0 sm:space-y-20 bg-[#E5E5E5]">
                <BlackBeltsSection />
                <ContactUs className="px-4 py-1 md:py-4" />
            </main>

            <Footer />
        </div>
    );
}
