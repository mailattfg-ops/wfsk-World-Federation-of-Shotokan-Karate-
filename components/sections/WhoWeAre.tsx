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
                                    <Image src="/images/logo.png" alt="WFSK Logo" className="object-contain w-[60px] h-auto md:w-[160px] md:h-[160px] xl:w-[200px] xl:h-[200px]" width={160}
                                        height={160}

                                    />
                                </div>

                                {/* Text Content - w-fit and items-stretch to make all children same width (widest element defines width) */}
                                <div className="flex flex-col gap-0.4 sm:gap-1 w-fit items-stretch text-left">
                                    {/* English Title - Compact on mobile to match red box width */}
                                    <div className="text-[#E81E26] font-(family-name:--font-belanosima) font-normal uppercase leading-none text-[10px] sm:text-lg lg:text-xl xl:text-[28px] whitespace-nowrap">
                                        World Federation of Shotokan Karate
                                    </div>


                                    {/* Japanese Text with horizontal lines */}
                                    <div className="w-full flex items-center justify-center text-black font-bold leading-none gap-0.5 sm:gap-2">
                                        <div className="h-[0.5px] sm:h-[2px] xl:h-[4px] grow bg-black"></div>
                                        <span className="shrink-0 text-[10px] sm:text-[18px] lg:text-2xl xl:text-[28px] tracking-tighter sm:tracking-normal">ショトカ ン 空 手 の 世 界 連 盟</span>
                                        <div className="h-[0.5px] sm:h-[2px] xl:h-[4px] grow bg-black"></div>
                                    </div>

                                    {/* Red Box Section */}
                                    <div className="bg-[#E81E26] text-white rounded-[2px] sm:rounded-[4px] px-1 sm:px-2 py-1 sm:py-1 mt-0 w-full">
                                        <p className="font-medium text-center leading-tight lg:leading-snug text-[4px] sm:text-[9px] xl:text-[11px]">
                                            AN ISO 9001:2015 CERTIFIED KARATE FEDERATION <br />
                                            WORLD RECORDS HOLDING KARATE FEDERATION – UNIVERSAL RECORDS FORUM 2024 & 2025
                                        </p>
                                    </div>

                                    {/* IAF & UAF Logos + HQ Text */}
                                    <div className="flex flex-wrap items-center justify-start mt-0.5 sm:mt-2 gap-0.5 sm:gap-2">
                                        <div className="flex items-center gap-0.5">
                                            <div className="relative w-10 h-5 sm:w-20 sm:h-10">
                                                <Image src="/images/IAF.png" alt="IAF" fill className="object-contain" />
                                            </div>
                                            <div className="relative w-14 h-5 sm:w-28 sm:h-10">
                                                <Image src="/images/UAF.png" alt="UAF" fill className="object-contain" />
                                            </div>
                                        </div>
                                        <span className="text-[6.5px] sm:text-[14px] font-bold text-black font-geist-sans whitespace-nowrap">World Headquarters - Dubai , UAE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lower Section: Paragraphs */}
                    <div className="mt-8 w-full">
                        <div className="space-y-4 text-[#7C7C7C] font-(family-name:--font-geist-sans) text-xs sm:text-[20px] leading-relaxed text-center w-full max-w-4xl xl:max-w-7xl mx-auto">
                            <p>
                                <strong className="font-semibold text-[#7C7C7C]">World Federation of Shotokan Karate (WFSK)</strong> was established in 2012 to deliver an authentic and complete martial arts experience. Today, WFSK operates internationally across <strong className="font-semibold text-[#7C7C7C]">India, UAE, Qatar, Bahrain, and Portugal</strong>, following global training standards.
                            </p>
                            <p>
                                An ISO 9001:2015 certified federation, WFSK offers training in <strong className="font-semibold text-[#7C7C7C]">Karate-Do, self-defense, oriental weapons, and fitness</strong>, led by expert instructors with over 32 years of national and international experience.
                            </p>
                            <p>
                                With authorized certifications, structured gradings, and a strong global network, <strong className="font-semibold text-[#7C7C7C]">WFSK is committed to discipline, excellence, and the true spirit of Shotokan Karate.</strong><br />
                                World Headquarters: India.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Images - Stacked on mobile, Side by side on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-8 h-[500px] sm:h-[500px]">
                    <div className="relative w-full h-full rounded-xl sm:rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src="/images/who_we_are_image1.jpg"
                            alt="Master Portrait"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    <div className="relative w-full h-full rounded-xl sm:rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src="/images/who_we_are_image2.jpg"
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
