"use client";

import { useState, useMemo } from "react";
import { TeamFilter } from "../ui/TeamFilter";
import { TeamCard } from "../ui/TeamCard";
import { SectionHeader } from "../SectionHeader";
import Image from "next/image";
import { ContactUs } from "./ContactUs";

interface Member {
    id: string;
    name: string;
    position: string;
    belt_dan?: string;
    image_url: string;
    role: string;
    country?: string;
    show_belt: boolean;
    belt_color?: string;
    display_order: number;
    achievements?: string[];
}

type SectionType = "standard" | "centered" | "instructor";

interface Section {
    id: string;
    title: string;
    members: Member[];
    type: SectionType;
    description?: React.ReactNode;
    countryName?: string;
    flagCode?: string;
}

interface TeamClientProps {
    members: Member[];
}

export function TeamClient({ members }: TeamClientProps) {
    const [activeFilter, setActiveFilter] = useState("All");

    const countries = useMemo(() => {
        const uniqueCountries = Array.from(new Set(members.filter(m => m.role === 'instructor' && m.country).map(m => m.country!))).sort();
        return uniqueCountries;
    }, [members]);

    const filters = ["All", "Directors", "Executive", ...countries];

    const filteredSections = useMemo(() => {
        const sections: Section[] = [];

        // Directors
        if (activeFilter === "All" || activeFilter === "Directors") {
            const directors = members.filter(m => m.role === 'director');
            if (directors.length > 0) {
                sections.push({
                    id: "directors",
                    title: "Directors",
                    description: (
                        <>
                            World Federation of Shotokan Karate is having highly professional, reputed, qualified and updated bunch of <strong className="font-semibold">instructors with more than 37 years of national and international experience.</strong> Our trainers are dedicated and live members of World Federation of Shotokan Karate and are <strong className="font-semibold">well trained, well mannered and authorized to conduct training camps at schools.</strong>
                        </>
                    ),
                    members: directors,
                    type: "standard"
                });
            }
        }

        // Executive
        if (activeFilter === "All" || activeFilter === "Executive") {
            const executives = members.filter(m => m.role === 'executive');
            if (executives.length > 0) {
                sections.push({
                    id: "executive",
                    title: "Executive Members",
                    members: executives,
                    type: "centered"
                });
            }
        }

        // Instructors by Country
        const baseInstructors = members.filter(m => m.role === 'instructor');
        const instructorCountries = activeFilter === "All"
            ? countries
            : countries.filter(c => c === activeFilter);

        instructorCountries.forEach(country => {
            const countryInstructors = baseInstructors.filter(m => m.country === country);
            if (countryInstructors.length > 0) {
                // Get flag code (mapping or assuming it's available)
                // In InstructorsSection it's passed as prop. I'll need a way to get it.
                // For now I'll use a simple mapping or just use country name if code not available.
                const flagMapping: { [key: string]: string } = {
                    "UAE": "ae",
                    "India": "in",
                    "Gambia": "gm",
                    "Qatar": "qa",
                    "Bahrain": "bh"
                };

                sections.push({
                    id: `instructors-${country}`,
                    title: `Our Instructors in ${country}`,
                    members: countryInstructors,
                    type: "instructor",
                    countryName: country,
                    flagCode: flagMapping[country] || country.toLowerCase().slice(0, 2)
                });
            }
        });

        return sections;
    }, [activeFilter, members, countries]);

    return (
        <div className="space-y-0">
            <div className="bg-[#E5E5E5] pt-4 pb-2">
                <TeamFilter
                    filters={filters}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />
            </div>

            <main className="w-full mx-auto space-y-0 md:space-y-2">
                {filteredSections.map((section) => (
                    <section key={section.id} className="w-full p-4">
                        <div className="w-full mx-auto space-y-4 md:space-y-8 lg:space-y-12">
                            {section.type === "standard" && (
                                <>
                                    <SectionHeader title={<>Our <br className="hidden md:block" /> {section.title}</>}>
                                        {section.description}
                                    </SectionHeader>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-6 px-1 sm:px-0">
                                        {section.members.map((member) => (
                                            <TeamCard
                                                key={member.id}
                                                name={member.name}
                                                title={`${member.position}${member.show_belt && member.belt_dan ? ` | ${member.belt_dan}` : ''}`}
                                                image={member.image_url}
                                                showBelt={member.show_belt}
                                                beltColor={member.belt_color}
                                                active={true}
                                                achievements={member.achievements}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            {section.type === "centered" && (
                                <>
                                    <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm flex flex-col items-center justify-center text-center">
                                        <h2 className="text-4xl sm:text-5xl font-bold text-black font-(family-name:--font-belanosima) leading-tight">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 px-1 sm:px-0">
                                        {section.members.map((member) => (
                                            <TeamCard
                                                key={member.id}
                                                name={member.name}
                                                title={`${member.position}${member.show_belt && member.belt_dan ? ` | ${member.belt_dan}` : ''}`}
                                                image={member.image_url}
                                                showBelt={member.show_belt}
                                                beltColor={member.belt_color}
                                                active={true}
                                                achievements={member.achievements}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            {section.type === "instructor" && (
                                <>
                                    <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <div className="relative w-16 h-12 sm:w-24 sm:h-16 shrink-0 shadow-sm overflow-hidden rounded-md border border-gray-100">
                                            <Image
                                                src={`https://flagcdn.com/w320/${section.flagCode}.png`}
                                                alt={`${section.countryName} Flag`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div
                                                className="absolute inset-0 bg-black/10 pointer-events-none"
                                                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                                            />
                                        </div>
                                        <div className="hidden sm:block w-[2px] xl:w-[3px] h-16 xl:h-20 bg-black/80"></div>
                                        <div className="text-center sm:text-left">
                                            <h2 className="text-3xl sm:text-4xl font-bold text-black font-(family-name:--font-belanosima) leading-tight">
                                                {section.title}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 px-1 sm:px-0">
                                        {section.members.map((member) => (
                                            <TeamCard
                                                key={member.id}
                                                name={member.name}
                                                title={`${member.position}${member.show_belt && member.belt_dan ? ` | ${member.belt_dan}` : ''}`}
                                                image={member.image_url}
                                                showBelt={member.show_belt}
                                                beltColor={member.belt_color}
                                                active={true}
                                                achievements={member.achievements}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                ))}
            </main>

            <ContactUs className="px-4 py-1 md:py-4" />
        </div>
    );
}
