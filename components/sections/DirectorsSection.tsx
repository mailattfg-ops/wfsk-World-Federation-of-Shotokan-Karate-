import { SectionHeader } from "../SectionHeader";
import { TeamCard } from "../ui/TeamCard";

const DIRECTORS = [
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
];

export function DirectorsSection() {
    return (
        <section className="w-full">
            <div className="w-full mx-auto space-y-8">
                {/* Header Card */}
                <SectionHeader title={<>Our <br /> Directors</>}>
                    World Federation of Shotokan Karate is having highly professional, reputed, qualified and updated bunch of <strong className="font-semibold">instructors with more than 30 years of national and international experience.</strong> Our trainers are dedicated and live members of World Federation of Shotokan Karate and are <strong className="font-semibold">well trained, well mannered and authorized to conduct training camps at schools.</strong>
                </SectionHeader>

                {/* Directors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DIRECTORS.map((director, index) => (
                        <TeamCard
                            key={index}
                            name={director.name}
                            title={director.title}
                            image={director.image}
                            active={director.active}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
