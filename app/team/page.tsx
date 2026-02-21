import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamClient } from "@/components/sections/TeamClient";
import { getMembers } from "@/lib/actions/members";

export default async function TeamPage() {
    const members = await getMembers();

    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            <Header />

            <main className="w-full mx-auto bg-[#E5E5E5] pt-24 md:pt-32">
                <TeamClient members={members || []} />
            </main>

            <Footer />
        </div>
    );
}
