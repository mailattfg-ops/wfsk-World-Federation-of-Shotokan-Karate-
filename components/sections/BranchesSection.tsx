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
            <div className="w-full mx-auto space-y-4 sm:space-y-8">
                {/* Header Card - Matching OurTeam/WhoWeAre design */}
                <div className="bg-white rounded-lg p-4 sm:p-10 shadow-sm overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-0 md:gap-6 text-center lg:text-left">
                        {/* Title Section */}
                        <div className="w-full lg:w-1/4 flex flex-col lg:flex-row items-center justify-center lg:justify-end">
                            <h2 className="text-2xl sm:text-5xl font-bold text-black font-(family-name:--font-belanosima) leading-tight w-full lg:w-auto text-center lg:text-right">
                                Our <br /> Branches
                            </h2>
                            <div className="lg:hidden w-12 h-[1px] bg-black/10 mt-2 mb-4 mx-auto"></div>
                        </div>

                        {/* Desktop Vertical Line */}
                        <div className="hidden lg:block w-px h-32 bg-black grow-0 shrink-0"></div>

                        {/* Text Content */}
                        <div className="w-full lg:w-3/4 max-w-2xl mx-auto lg:mx-0">
                            <div className="text-[#7C7C7C] font-(family-name:--font-geist-sans) text-xs sm:text-[20px] leading-relaxed text-center lg:text-left">
                                The World Federation of Shotokan Karate has branches in over 20 countries. Our instructors have decades of experience and are dedicated to teaching students the art of Shotokan Karate. Find a dojo near you!
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Tabs - Centered and small on mobile to fit one line */}
                <div className="flex flex-wrap gap-1 md:gap-2 justify-center lg:justify-start px-1 sm:px-0">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-2 sm:px-6 py-1.5 sm:py-2 rounded-md text-[9px] sm:text-sm font-bold transition-all duration-300 ${activeFilter === filter
                                ? "bg-white text-black shadow-md border border-black/5"
                                : "bg-[#2C2C2C] text-[#C0C0C0] hover:bg-[#3C3C3C]"
                                } font-(family-name:--font-geist-sans) whitespace-nowrap`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
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
