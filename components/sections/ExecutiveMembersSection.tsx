import { TeamCard } from "../ui/TeamCard";

const EXECUTIVE_MEMBERS = [
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder | Chief Instructor", image: "/images/who_we_are_image1.jpg", active: false },
];

export function ExecutiveMembersSection() {
    return (
        <section className="w-full">
            <div className="w-full mx-auto space-y-4 md:space-y-8 lg:space-y-12">
                {/* Centered Header (Restored Desktop Look with Responsive scaling) */}
                <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-black font-(family-name:--font-belanosima) leading-tight">
                        Executive <br className="hidden md:block" /> Members
                    </h2>
                </div>

                {/* Members Grid - Padding matched to Header Box for alignment */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 px-1 sm:px-0">
                    {EXECUTIVE_MEMBERS.map((member, index) => (
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
