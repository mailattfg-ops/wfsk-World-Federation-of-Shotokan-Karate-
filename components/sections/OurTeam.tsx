import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import { TeamCard } from "../ui/TeamCard";

const TEAM_MEMBERS = [
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
];

export function OurTeam() {
    return (
        <section className="w-full p-2 sm:p-4 pl-2 pr-2 pb-2 pt-0 lg:p-4 lg:pl-0 lg:pr-0 lg:pb-0 lg:pt-0">
            <div className="w-full mx-auto space-y-4 sm:space-y-8">
                {/* Header Card - Custom implementation to match WhoWeAre mobile style while keeping Desktop style */}
                <div className="bg-white rounded-lg p-4 sm:p-10 shadow-sm overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-0 md:gap-6 text-center lg:text-left">

                        {/* Title Section */}
                        <div className="w-full lg:w-1/4 flex flex-col lg:flex-row items-center justify-center lg:justify-end">
                            <h2 className="text-2xl sm:text-5xl font-bold text-black font-(family-name:--font-belanosima) leading-tight w-full lg:w-auto text-center lg:text-right">
                                Our <br /> Team
                            </h2>
                            {/* Mobile Underline */}
                            <div className="lg:hidden w-12 h-[1px] bg-black/10 mt-2 mb-4 mx-auto"></div>
                        </div>

                        {/* Desktop Vertical Line */}
                        <div className="hidden lg:block w-px h-32 bg-black grow-0 shrink-0"></div>

                        {/* Text Content */}
                        <div className="w-full lg:w-3/4 max-w-2xl mx-auto lg:mx-0">
                            <div className="text-[#7C7C7C] font-(family-name:--font-geist-sans) text-xs sm:text-[20px] leading-relaxed text-center lg:text-left">
                                World Federation of Shotokan Karate is having highly professional, reputed, qualified and updated bunch of <strong className="font-semibold text-zinc-600">instructors with more than 30 years of national and international experience.</strong> Our trainers are dedicated and live members of World Federation of Shotokan Karate and are <strong className="font-semibold text-zinc-600">well trained, well mannered</strong> and authorized to conduct training camps at schools.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Grid - 2 columns on mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-6 p-2 sm:p-4">
                    {TEAM_MEMBERS.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            title={member.title}
                            image={member.image}
                            active={member.active}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
