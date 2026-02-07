import Image from "next/image";

interface BranchCardProps {
    country: string;
    title: string;
    description: string;
    leader: string;
    image: string;
}

export function BranchCard({ country, title, description, leader, image }: BranchCardProps) {
    return (
        <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-sm overflow-hidden min-h-[350px] sm:min-h-[400px]">
            {/* Image (Left/Top) */}
            <div className="relative w-full sm:w-1/2 h-[200px] sm:h-auto shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content (Right/Bottom) */}
            <div className="w-full sm:w-1/2 p-5 sm:p-8 flex flex-col items-start justify-center gap-2 sm:gap-4 text-left">
                {/* Country Badge */}
                <span className="bg-[#F02306] text-[#FFFFFF] font-bold text-[12px] md:text-2xl uppercase px-5 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl mb-1 sm:mb-2 font-(family-name:--font-cal-sans)">
                    {country}
                </span>

                {/* Title */}
                <h3 className="text-[22px] sm:text-2xl md:text-[34px] font-bold text-black font-(family-name:--font-cal-sans) leading-tight">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-[#737373] text-[14px] sm:text-base md:text-[20px] font-(family-name:--font-geist-sans) leading-relaxed">
                    {description}
                </p>

                {/* Leader */}
                <div className="mt-1 sm:mt-2">
                    <p className="text-[#727272] font-bold text-[14px] sm:text-lg md:text-[20px] font-(family-name:--font-cal-sans)">
                        Led by : <span className="text-[#727272] font-bold">{leader}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
