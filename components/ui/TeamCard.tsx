import Image from "next/image";

interface TeamCardProps {
    name: string;
    title: string;
    image: string;
    active?: boolean;
}

export function TeamCard({ name, title, image, active = false }: TeamCardProps) {
    return (
        <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden shadow-md transition-all duration-300 group hover:shadow-xl">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-black/20"></div>

            {/* Bottom Card */}
            <div className="absolute bottom-3 left-3 right-3 bg-[#1A1A1A] rounded-xl p-3 flex justify-between items-center z-10">
                <div className="flex flex-col">
                    <h3 className="text-white font-bold text-sm sm:text-base font-(family-name:--font-belanosima) tracking-wide">{name}</h3>
                    <p className="text-[10px] text-gray-400 font-(family-name:--font-geist-sans)">{title}</p>
                </div>
                <div className={`w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center shrink-0 ${active ? 'bg-[#E81E26] border-none' : 'bg-transparent'}`}>
                    {/* Optional: Add icon/indicator code here if needed later */}
                </div>
            </div>
        </div>
    );
}
