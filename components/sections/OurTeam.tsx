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
        <section className="w-full p-2 sm:p-4">
            <div className="w-full mx-auto space-y-4 sm:space-y-8">
                {/* Header Card - Using standardized SectionHeader */}
                <SectionHeader title={<>Our <br /> Team</>}>
                    World Federation of Shotokan Karate is having highly professional, reputed, qualified and updated bunch of <strong className="font-semibold text-[#7C7C7C]">instructors with more than 30 years of national and international experience.</strong> Our trainers are dedicated and live members of World Federation of Shotokan Karate and are <strong className="font-semibold text-[#7C7C7C]">well trained, well mannered</strong> and authorized to conduct training camps at schools.
                </SectionHeader>

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
