import Image from "next/image";
import { TeamCard } from "../ui/TeamCard";

interface Instructor {
    name: string;
    title: string;
    image: string;
    active: boolean;
}

interface InstructorsSectionProps {
    countryName: string;
    flagCode: string; // ISO code for flagcdn (e.g., 'ae', 'in')
    instructors: Instructor[];
}

export function InstructorsSection({ countryName, flagCode, instructors }: InstructorsSectionProps) {
    return (
        <section className="w-full">
            <div className="w-full mx-auto space-y-4 md:space-y-8 lg:space-y-12">

                {/* Header Card */}
                <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-4">

                    {/* Flag */}
                    <div className="relative w-16 h-12 sm:w-24 sm:h-16 shrink-0 shadow-sm overflow-hidden rounded-md border border-gray-100">
                        <Image
                            src={`https://flagcdn.com/w320/${flagCode}.png`}
                            alt={`${countryName} Flag`}
                            fill
                            className="object-cover"
                        />
                        {/* Half Shadow Effect */}
                        <div
                            className="absolute inset-0 bg-black/10 pointer-events-none"
                            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                        />
                    </div>

                    {/* Vertical Divider (Hidden on mobile, visible on sm+) */}
                    <div className="hidden sm:block w-[2px] xl:w-[3px] h-16 xl:h-20 bg-black/80"></div>

                    {/* Text */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-black font-(family-name:--font-belanosima) leading-tight">
                            Our Instructors <br className="hidden md:block" /> in {countryName}
                        </h2>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 px-1 sm:px-0">
                    {instructors.map((member, index) => (
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
