import { SectionHeader } from "../SectionHeader";
import { TeamCard } from "../ui/TeamCard";
import { getMembers } from "@/lib/actions/members";

export async function DirectorsSection() {
    const directors = await getMembers('director');

    return (
        <section className="w-full p-4">
            <div className="w-full mx-auto space-y-4 sm:space-y-12">
                {/* Header Card */}
                <SectionHeader title={<>Our <br className="hidden md:block" /> Directors</>}>
                    World Federation of Shotokan Karate is having highly professional, reputed, qualified and updated bunch of <strong className="font-semibold">instructors with more than 30 years of national and international experience.</strong> Our trainers are dedicated and live members of World Federation of Shotokan Karate and are <strong className="font-semibold">well trained, well mannered and authorized to conduct training camps at schools.</strong>
                </SectionHeader>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-6 px-1 sm:px-0">
                    {directors.map((member: any) => (
                        <TeamCard
                            key={member.id}
                            name={member.name}
                            title={`${member.position}${member.show_belt && member.belt_dan ? ` | ${member.belt_dan}` : ''}`}
                            image={member.image_url}
                            showBelt={member.show_belt}
                            beltColor={member.belt_color}
                            active={true}
                        />
                    ))}
                </div>
                {directors.length === 0 && (
                    <div className="text-center py-20 text-zinc-400 font-bold uppercase tracking-widest text-xs border-2 border-dashed border-zinc-100 rounded-xl">
                        No directors found.
                    </div>
                )}
            </div>
        </section>
    );
}
