import Image from "next/image";

interface TeamCardProps {
    name: string;
    title: string;
    image: string;
    active?: boolean;
    beltColor?: string;
    showBelt?: boolean;
}

export function TeamCard({ name, title, image, active = false, beltColor, showBelt = true }: TeamCardProps) {
    return (
        <div className="relative aspect-3/4 w-full rounded-md overflow-hidden shadow-md transition-all duration-300 group hover:shadow-xl">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-black/20"></div>

            {/* Bottom Card */}
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 bg-[#111111] rounded-md sm:rounded-xl p-1.5 sm:p-3 flex justify-between items-center z-10 shadow-lg">
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-white font-bold text-[11px] sm:text-base font-(family-name:--font-belanosima) tracking-wide leading-tight">{name}</h3>
                    <p className="text-[6px] sm:text-[10px] text-[#B7B7B7] font-(family-name:--font-geist-sans) leading-tight">{title}</p>
                </div>
                <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 border-2 border-white shadow-inner ${!showBelt ? 'hidden' : ''} ${beltColor ? '' : 'bg-[#E81E26]'}`}
                    style={beltColor ? { backgroundColor: beltColor, boxShadow: `0 0 20px ${beltColor}44` } : {}}
                >
                    {/* Indicator */}
                </div>
            </div>
        </div>
    );
}
