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
        <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-sm overflow-hidden min-h-[400px]">
            {/* Image (Left/Top) */}
            <div className="relative w-full sm:w-1/2 min-h-[250px] sm:min-h-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content (Right/Bottom) */}
            <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col items-start justify-center gap-4">
                {/* Country Badge */}
                <span className="bg-[#F02306] text-[#FFFFFF] text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2">
                    {country}
                </span>

                {/* Title */}
                <h3 className="text-[34px] font-bold text-black font-(family-name:--font-belanosima) leading-tight">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-[#737373] text-[20px] font-(family-name:--font-geist-sans) leading-relaxed">
                    {description}
                </p>

                {/* Leader */}
                <div className="mt-2">
                    <p className="text-[#727272] font-bold text-[20px] font-(family-name:--font-belanosima)">
                        Led by : <span className="text-[#727272] font-medium">{leader}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
