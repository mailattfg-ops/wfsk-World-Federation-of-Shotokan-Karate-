import { getBranches } from "@/lib/actions/branches";
import { SectionHeader } from "../SectionHeader";
import { BranchesClient } from "./BranchesClient";

export async function BranchesSection() {
    const branches = await getBranches();

    // Map DB fields to component props if they differ
    const formattedBranches = branches.map((b: any) => ({
        country: b.country_name,
        title: b.place_name,
        description: b.description,
        leader: b.instructor_name,
        image: b.image_url,
        category: b.country_name
    }));

    return (
        <section className="w-full p-4">
            <div className="w-full mx-auto space-y-4 xl:space-y-8">
                <SectionHeader title={<>Our <br /> Branches</>}>
                    The World Federation of Shotokan Karate has branches in over 20 countries. Our instructors have decades of experience and are dedicated to teaching students the art of Shotokan Karate. Find a dojo near you!
                </SectionHeader>

                <BranchesClient initialBranches={formattedBranches} />
            </div>
        </section>
    );
}
