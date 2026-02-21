import { TeamCard } from "../ui/TeamCard";
import { getMembers } from "@/lib/actions/members";

export async function ExecutiveMembersSection() {
    const members = await getMembers('executive');

    return (
        <section className="w-full p-4">
            <div className="w-full mx-auto space-y-4 md:space-y-8 lg:space-y-12">
                {/* Centered Header */}
                <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-black font-(family-name:--font-belanosima) leading-tight">
                        Executive <br className="hidden md:block" /> Members
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 px-1 sm:px-0">
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
                        No executive members found.
                    </div>
                )}
            </div>
        </section>
    );
}
