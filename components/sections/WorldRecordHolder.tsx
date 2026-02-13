import Image from "next/image";
import { getWorldRecord } from "@/lib/actions/world-record";

export async function WorldRecordHolder() {
    const data = await getWorldRecord();

    // Fallback if no data is found in Supabase
    const content = data || {
        title: "World\nRecord\nHolders",
        description: "WFSK (World Federation of Shotokan Karate) has achieved world records, notably for the Largest Black Belt Awarding Ceremony with 404 Indian students under one federation in late 2024",
        image_url: "/images/team_photo.jpg"
    };

    return (
        <section className="w-full bg-white overflow-hidden">
            {/* White space gap above the image (Only mobile/tablet focal) */}
            <div className="h-6 sm:h-8 lg:hidden bg-white shadow-none"></div>

            {/* Mobile/Tablet Wrapper (Grey background for the banner area) */}
            <div className="flex flex-col lg:block relative bg-[#E5E5E5] lg:p-2 lg:bg-white">

                {/* Image Container - Full width on mobile/tablet, Padded on desktop */}
                <div className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-auto">
                    <img
                        src={content.image_url}
                        alt={content.title}
                        className="w-full h-full object-cover block rounded-none lg:rounded-sm"
                    />
                </div>

                {/* Red Banner - Relative on mobile, Absolute on desktop */}
                <div className="relative lg:absolute lg:top-6 lg:left-6 lg:right-6 bg-[#F02306] shadow-lg overflow-hidden m-4 lg:m-0 rounded-md lg:rounded-none lg:min-h-0 h-auto">

                    {/* Texture/Pattern Overlay */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                        <Image
                            src="/images/banner_image.jpg"
                            alt="banner texture"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content Container - Horizontal layout for all sizes to match screenshot */}
                    <div className="relative z-10 p-3 sm:p-8 lg:p-8 flex flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-10">

                        {/* Title Block */}
                        <div className="shrink-0 flex flex-col items-start justify-center">

                            <h2 className="text-white text-[16px]  md:text-3xl lg:text-4xl whitespace-pre-line  font-bold leading-[0.95]">
                                {content.title.split(' ').map((word: string, i: number) => (
                                    <span key={i} className="block">
                                        {word}
                                    </span>
                                ))}
                            </h2>
                        </div>

                        {/* Vertical Divider - Visible on all screens */}
                        <div className="w-[1px] md:w-[2px] h-14 sm:h-20 lg:h-24 bg-white"></div>

                        {/* Description Block */}
                        <div className="flex-1 sm:max-w-md lg:max-w-sm">
                            <p className="text-white text-[8px] md:text-sm lg:text-[17px] font-medium leading-tight">
                                {content.description}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
