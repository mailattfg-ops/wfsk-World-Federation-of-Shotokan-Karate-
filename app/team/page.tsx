import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DirectorsSection } from "@/components/sections/DirectorsSection";
import { ExecutiveMembersSection } from "@/components/sections/ExecutiveMembersSection";
import { InstructorsSection } from "@/components/sections/InstructorsSection";
import { ContactUs } from "@/components/sections/ContactUs";

const UAE_INSTRUCTORS = [
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
];

const INDIA_INSTRUCTORS = [
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] font-(family-name:--font-geist-sans)">
            <Header />

            <main className="pt-28 pb-10 w-full mx-auto space-y-10 md:space-y-20 bg-[#E5E5E5] px-2 md:px-4">
                <DirectorsSection />
                <ExecutiveMembersSection />
                <InstructorsSection countryName="UAE" flagCode="ae" instructors={UAE_INSTRUCTORS} />
                <InstructorsSection countryName="India" flagCode="in" instructors={INDIA_INSTRUCTORS} />
                <ContactUs />
            </main>

            <Footer />
        </div>
    );
}
