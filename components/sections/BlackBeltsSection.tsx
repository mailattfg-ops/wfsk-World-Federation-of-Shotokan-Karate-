import { SectionHeader } from "../SectionHeader";
import { TeamCard } from "../ui/TeamCard";
import { getMembers } from "@/lib/actions/members";

export async function BlackBeltsSection() {
    const members = await getMembers('black_belt');

    return (
        <section className="w-full p-4">
            <div className="w-full mx-auto space-y-4 xl:space-y-8">
                {/* Header */}
                <SectionHeader title={<>Our <br /> Black Belties</>}>
                    The World Federation of Shotokan Karate is proud to announce that we are producing more black belts every year. Our instructors are highly experienced and dedicated to teaching students the art of Shotokan Karate. Join us today!
                </SectionHeader>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-6">
                    {members.map((member: any) => (
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
                {members.length === 0 && (
                    <div className="text-center py-20 text-zinc-400 font-bold uppercase tracking-widest text-xs border-2 border-dashed border-zinc-100 rounded-xl">
                        No black belt members found.
                    </div>
                )}
            </div>
        </section>
    );
}
