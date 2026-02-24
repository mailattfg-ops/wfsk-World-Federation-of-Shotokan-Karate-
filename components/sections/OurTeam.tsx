import { SectionHeader } from "../SectionHeader";
import { TeamCard } from "../ui/TeamCard";
import { getMembers } from "@/lib/actions/members";

export async function OurTeam() {
    const members = await getMembers('executive');

    return (
        <section className="w-full bg-[#E5E5E5] p-4">
            <div className="w-full mx-auto space-y-4 xl:space-y-8">
                <SectionHeader title={<>Our <br /> Team</>}>
                    World Federation of Shotokan Karate is having highly professional, reputed, qualified and updated bunch of <strong className="font-semibold text-[#7C7C7C]">instructors with more than 37 years of national and international experience.</strong> Our trainers are dedicated and live members of World Federation of Shotokan Karate and are <strong className="font-semibold text-[#7C7C7C]">well trained, well mannered</strong> and authorized to conduct training camps at schools.
                </SectionHeader>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-6">
                    {members.map((member: any) => (
                        <TeamCard
                            key={member.id}
                            name={member.name}
                            title={`${member.position}${member.show_belt && member.belt_dan ? ` | ${member.belt_dan}` : ''}`}
                            image={member.image_url}
                            active={true}
                            beltColor={member.belt_color}
                            showBelt={member.show_belt}
                            achievements={member.achievements}
                        />
                    ))}
                </div>
                {members.length === 0 && (
                    <div className="text-center py-20 text-zinc-400 font-bold uppercase tracking-widest text-xs border-2 border-dashed border-zinc-100 rounded-xl">
                        No team members available.
                    </div>
                )}
            </div>
        </section>
    );
}
