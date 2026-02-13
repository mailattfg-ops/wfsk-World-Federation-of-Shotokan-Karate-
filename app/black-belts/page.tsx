import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlackBeltsSection } from "@/components/sections/BlackBeltsSection";
import { ContactUs } from "@/components/sections/ContactUs";

export default function BlackBeltsPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            <Header />

            <main className="pt-24 md:pt-32 w-full mx-auto bg-[#E5E5E5]">
                <BlackBeltsSection />
                <ContactUs className="p-2 sm:p-4" />
            </main>

            <Footer />
        </div>
    );
}
