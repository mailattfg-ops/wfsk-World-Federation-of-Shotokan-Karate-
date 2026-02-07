export function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/video/video bg wfsk.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col justify-end pb-8 sm:pb-10 px-3 sm:px-8 xl:px-12 max-w-[1920px] mx-auto w-full">
                <div className="flex flex-col xl:flex-row w-full items-end xl:items-center gap-0">

                    {/* Left Side: Main Title */}
                    <div className="flex-shrink-0 xl:max-w-3xl 2xl:max-w-4xl w-full">
                        <h1 className="text-[32px] sm:text-4xl lg:text-5xl xl:text-[42px] tracking-tight leading-[1.1] sm:leading-[1.05] font-(family-name:--font-inter)">
                            World Federation of <br />
                            <span className="text-[#F02306] font-bold">Shotokan Karate</span>
                        </h1>
                    </div>

                    {/* Right Side: Divider + Stats */}
                    <div className="flex items-stretch h-auto w-full xl:w-auto xl:pl-8 mt-5 xl:mt-0">

                        {/* Vertical Divider */}
                        <div className="hidden xl:block w-[1px] bg-white/30 mr-8 flex-shrink-0 self-stretch my-1"></div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-6 xl:gap-6 text-left w-full xl:w-auto overflow-visible">

                            {/* Item 1 */}
                            <div className="flex flex-col gap-1.5 sm:gap-3">
                                <h3 className="font-semibold text-[15px] sm:text-[18px] xl:text-[22px] leading-tight tracking-tight">
                                    32+ Years of <br /> Martial Arts <br /> Experience
                                </h3>
                                <p className="text-zinc-400 text-[8px] sm:text-[13px] xl:text-[14px] font-normal leading-relaxed">
                                    Backed by over three decades of national and international martial arts experience.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-col gap-1.5 sm:gap-3">
                                <h3 className="font-bold text-[13px] sm:text-[18px] xl:text-[22px] leading-tight tracking-tight">
                                    International <br /> Presence in <br /> 5+ Countries
                                </h3>
                                <p className="text-zinc-400 text-[8px] sm:text-[13px] xl:text-[14px] font-normal leading-relaxed">
                                    Active across India, UAE, Qatar, Bahrain, and Portugal with unified global standards.
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-col gap-1.5 sm:gap-3">
                                <h3 className="font-bold text-[13px] sm:text-[18px] xl:text-[22px] leading-tight tracking-tight">
                                    ISO 9001:2015 <br /> Certified <br /> Federation
                                </h3>
                                <p className="text-zinc-400 text-[8px] sm:text-[13px] xl:text-[14px] font-normal leading-relaxed">
                                    Globally recognized quality systems ensuring structured, professional training.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
