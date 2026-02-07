import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const PROGRAMS = [
    {
        title: "Kick Boxing training",
        badges: ["13-40 Years", "All Levels"],
        description: "Backed by over three decades of national and international martial arts experience.",
        image: "/images/who_we_are_image1.jpg" // Placeholder
    },
    {
        title: "Full contract fight training",
        badges: ["13-40 Years", "All Levels"],
        description: "Backed by over three decades of national and international martial arts experience.",
        image: "/images/who_we_are_image2.jpg" // Placeholder
    },
    {
        title: "Self Defense training",
        badges: ["13-40 Years", "All Levels"],
        description: "Backed by over three decades of national and international martial arts experience.",
        image: "/images/who_we_are_image1.jpg" // Placeholder
    },
    {
        title: "Sports Karate training",
        badges: ["13-40 Years", "All Levels"],
        description: "Backed by over three decades of national and international martial arts experience.",
        image: "/images/who_we_are_image2.jpg" // Placeholder
    },
];

export function OurPrograms() {
    return (
        <section className="w-full p-4 pl-0 pr-0 pb-0 pt-0">
            <div className="w-full mx-auto space-y-8">
                {/* Header Section */}
                <SectionHeader title={<>Our <br /> Programs</>}>
                    At the World Federation of Shotokan Karate, we offer a range of programs led by our highly qualified instructors, each with over 30 years of national and international experience. Our dedicated trainers, who are active members of the federation, provide expertly designed training camps tailored for schools, ensuring a well-rounded and respectful learning environment.
                </SectionHeader>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {PROGRAMS.map((program, index) => (
                        <div key={index} className="bg-white overflow-hidden flex flex-col sm:flex-row shadow-sm min-h-[350px] sm:min-h-[400px] lg:min-h-[477px]">
                            {/* Text Content */}
                            <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between order-2 sm:order-1">
                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {program.badges.map((badge, idx) => (
                                        <span key={idx} className="bg-[#E6E6E6] text-xs sm:text-sm font-semibold text-[#262626] px-3 py-1 rounded-md font-(family-name:--font-geist-sans)">
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                <div>
                                    <h3 className="text-2xl sm:text-4xl font-bold text-black font-(family-name:--font-cal-sans) leading-tight mb-3">
                                        {program.title}
                                    </h3>

                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-(family-name:--font-geist-sans)">
                                        {program.description}
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="w-full sm:w-1/2 h-48 sm:h-auto relative order-1 sm:order-2">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
