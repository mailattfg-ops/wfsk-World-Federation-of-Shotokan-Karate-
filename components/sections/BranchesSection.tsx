"use client";

import { useState } from "react";
import { BranchCard } from "../ui/BranchCard";
import { SectionHeader } from "../SectionHeader";

// Mock Data
const BRANCHES = [
    {
        country: "UAE",
        title: "Al Reem Gym Quasis ,Dubai",
        description: "With over 70+ students this is one of our biggest centers in the middle east",
        leader: "Master John Doe",
        image: "/images/who_we_are_image1.jpg",
        category: "UAE"
    },
    {
        country: "Saudi Arabia",
        title: "Kingdom Fitness Center Riyadh",
        description: "A popular choice for fitness enthusiasts with 50+ active members, offering diverse workout programs.",
        leader: "Coach Sarah Smith",
        image: "/images/who_we_are_image2.jpg",
        category: "Saudi Arabia" // Not in original filter list, but good for demo
    },
    {
        country: "Kuwait",
        title: "Kuwait City Sport Club Kuwait City",
        description: "Features state-of-the-art facilities with 60+ members committed to various sports and fitness activities.",
        leader: "Coach Emily Johnson",
        image: "/images/who_we_are_image1.jpg",
        category: "Kuwait"
    },
    {
        country: "Qatar",
        title: "Doha Wellness Hub Doha",
        description: "Known for its holistic approach to fitness, attracting over 30+ members focused on wellness and nutrition.",
        leader: "Trainer Ahmed Khan",
        image: "/images/who_we_are_image2.jpg",
        category: "Qatar"
    },
];

const FILTERS = ["All", "India", "UAE", "Gambia", "Qatar", "Bahrain"];

export function BranchesSection() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredBranches = activeFilter === "All"
        ? BRANCHES
        : BRANCHES.filter(branch => branch.country === activeFilter || branch.category === activeFilter);

    return (
        <section className="w-full p-4">
            <div className="w-full mx-auto space-y-12">
                {/* Header */}
                <SectionHeader title={<>Our <br /> Branches</>}>
                    The World Federation of Shotokan Karate has branches in over 20 countries. Our instructors have decades of experience and are dedicated to teaching students the art of Shotokan Karate. Find a dojo near you!
                </SectionHeader>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-1">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-md text-sm font-bold transition-all duration-300 ${activeFilter === filter
                                ? "bg-white text-black shadow-md"
                                : "bg-[#2C2C2C] text-[#C0C0C0] hover:bg-[#3C3C3C]"
                                } font-(family-name:--font-geist-sans)`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredBranches.map((branch, index) => (
                        <BranchCard
                            key={index}
                            country={branch.country}
                            title={branch.title}
                            description={branch.description}
                            leader={branch.leader}
                            image={branch.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
