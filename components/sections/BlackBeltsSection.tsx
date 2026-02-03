import { SectionHeader } from "../SectionHeader";
import { TeamCard } from "../ui/TeamCard";

// Mock Data matching the image style
const BLACK_BELTS = [
    { name: "Master John Doe", title: "Black Belt Dan 2 holder", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder", image: "/images/who_we_are_image2.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder", image: "/images/who_we_are_image2.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder", image: "/images/who_we_are_image1.jpg", active: false },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder", image: "/images/who_we_are_image2.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder", image: "/images/who_we_are_image1.jpg", active: true },
    { name: "Master John Doe", title: "Black Belt Dan 2 holder", image: "/images/who_we_are_image2.jpg", active: true },
];

export function BlackBeltsSection() {
    return (
        <section className="w-full p-4">
            <div className="w-full mx-auto space-y-12">
                {/* Header */}
                <SectionHeader title={<>Our <br /> Black Belties</>}>
                    The World Federation of Shotokan Karate is proud to announce that we are producing more black belts every year. Our instructors are highly experienced and dedicated to teaching students the art of Shotokan Karate. Join us today!
                </SectionHeader>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BLACK_BELTS.map((member, index) => (
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
