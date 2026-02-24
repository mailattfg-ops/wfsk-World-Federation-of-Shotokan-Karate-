import Image from "next/image";

export function WhoWeAre() {
    return (
        <section className="w-full bg-[#E5E5E5] p-2 sm:p-4">
            <div className="w-full mx-auto space-y-4 sm:space-y-8">

                {/* Top Info Card */}
                <div className="bg-white rounded-lg p-4 sm:p-10 shadow-sm overflow-hidden">

                    {/* Upper Section: Title | Line | Header Content */}
                    <div className="flex flex-col lg:flex-row items-stretch">

                        {/* Left: Title - Centered on mobile, Side-aligned on desktop */}
                        <div className="flex-shrink-0 lg:w-1/4 flex flex-col items-center lg:items-end lg:justify-center lg:border-r lg:border-black pb-0 lg:pb-0 pr-0 lg:pr-8 xl:pr-4">
                            <h2 className="text-2xl sm:text-5xl font-bold text-black leading-none tracking-tight text-center lg:text-right xl:text-left w-full xl:w-fit">
                                Who <br />
                                we are
                            </h2>
                            {/* Horizontal Line below title on mobile */}
                            <div className="lg:hidden w-24 md:w-36 h-[1px] bg-black/50 mt-1 mb-2 mx-auto"></div>

                        </div>

                        {/* Right: Header Content (Logo, Text, Badges) */}
                        <div className="flex-grow pl-0 pt-1 lg:pt-0">
                            {/* Removed w-full from mx-auto wrapper to allow true centering on mobile */}
                            <div className="flex flex-row items-center lg:items-center justify-center lg:justify-start w-full max-w-2xl mx-auto lg:mx-0">
                                {/* Logo - Circular and sized for mobile row - Reduced for better fit */}
                                <div className=" relative shrink-0 aspect-square">
                                    <Image src="/images/logo.png" alt="WFSK Logo" className="object-contain w-[60px] h-auto md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[200px]" width={160}
                                        height={160}

                                    />
                                </div>


                                <div className="flex flex-col gap-[0.5vw] sm:gap-1 w-fit items-stretch text-left">
                                    {/* English Title - Fluid scaling to match red box width */}
                                    <div className="text-[#E81E26] font-(family-name:--font-belanosima) font-normal uppercase leading-none text-[clamp(10px,2vw,28px)] whitespace-nowrap flex justify-between">
                                        {"World Federation of Shotokan Karate".split("").map((char, i) => (
                                            <span key={i}>{char === " " ? "\u00A0" : char}</span>
                                        ))}
                                    </div>

                                    {/* Japanese Text with horizontal lines */}
                                    <div className="w-full flex items-center justify-center text-black font-bold leading-none gap-[0.5vw] sm:gap-2">
                                        <div className="h-[max(0.5px,0.25vw)] grow bg-black"></div>
                                        <span className="shrink-0 text-[clamp(10px,2vw,28px)] tracking-tighter sm:tracking-normal">
                                            ショトカン空手の世界連盟
                                        </span>
                                        <div className="h-[max(0.5px,0.25vw)] grow bg-black"></div>
                                    </div>

                                    {/* Red Box Section */}
                                    <div className="bg-[#E81E26] text-white rounded-[2px] sm:rounded-[4px] px-[1vw] py-[0.5vw] mt-0 w-full min-w-max">
                                        <p className="font-medium text-center leading-tight lg:leading-snug text-[clamp(4px,0.8vw,11px)] whitespace-nowrap uppercase">
                                            AN ISO 9001:2015 CERTIFIED KARATE FEDERATION <br />
                                            WORLD RECORDS HOLDING KARATE FEDERATION – UNIVERSAL RECORDS FORUM 2024 & 2025
                                        </p>
                                    </div>

                                    {/* IAF & UAF Logos + HQ Text */}
                                    <div className="flex flex-nowrap items-center justify-start mt-[0.5vw] sm:mt-2 gap-[1vw] sm:gap-2">
                                        <div className="flex items-center gap-[0.5vw] shrink-0">
                                            <div className="relative w-[clamp(32px,2.5vw,80px)] h-[clamp(16px,1.25vw,40px)]">
                                                <Image src="/images/IAF.png" alt="IAF" fill className="object-contain" />
                                            </div>
                                            <div className="relative w-[clamp(44px,3.5vw,112px)] h-[clamp(16px,1.25vw,40px)]">
                                                <Image src="/images/UAF.png" alt="UAF" fill className="object-contain" />
                                            </div>
                                            <div className="relative w-[clamp(20px,1.25vw,40px)] h-[clamp(16px,1.25vw,40px)]">
                                                <Image src="/images/bmg.png" alt="BMG" fill className="object-contain" />
                                            </div>
                                            <div className="relative w-[clamp(20px,1.25vw,40px)] h-[clamp(16px,1.25vw,40px)]">
                                                <Image src="/images/URF.png" alt="URF" fill className="object-contain" />
                                            </div>
                                        </div>
                                        <span className="text-[clamp(5.5px,1vw,14px)] font-bold text-black font-geist-sans whitespace-nowrap shrink-0">
                                            World Headquarters - Dubai , UAE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lower Section: Paragraphs */}
                    <div className="mt-8 w-full">
                        <div className="space-y-4 text-[#7C7C7C] font-(family-name:--font-geist-sans) text-xs sm:text-[20px] leading-relaxed text-center w-full max-w-4xl xl:max-w-7xl mx-auto">
                            <p>
                                <strong className="font-semibold text-[#7C7C7C]">World Federation of Shotokan Karate (WFSK)</strong> was established in 2012 to deliver an authentic and complete martial arts experience. Today, WFSK operates internationally across <strong className="font-semibold text-[#7C7C7C]">India, UAE, Qatar, Saudi Arabia, Bahrain, U.K and Gambia</strong>, following global training standards.
                            </p>
                            <p>
                                An ISO 9001:2015 certified federation, WFSK offers training in <strong className="font-semibold text-[#7C7C7C]">Karate-Do, self-defense, oriental weapons, and fitness</strong>, led by expert instructors with over 37 years of national and international experience.
                            </p>
                            <p>
                                With authorized certifications, structured gradings, and a strong global network, <strong className="font-semibold text-[#7C7C7C]">WFSK is committed to discipline, excellence, and the true spirit of Shotokan Karate.</strong><br />
                                World Headquarters: UAE.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Images - Stacked on mobile, Side by side on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-8 h-[500px] sm:h-[500px]">
                    <div className="relative w-full h-full rounded-xl sm:rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src="/images/who_we_are_image1.webp"
                            alt="Master Portrait"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    <div className="relative w-full h-full rounded-xl sm:rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src="/images/who_we_are_image2.webp"
                            alt="Team Action Shot"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}
