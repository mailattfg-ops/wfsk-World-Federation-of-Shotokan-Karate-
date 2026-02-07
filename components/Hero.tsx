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
                    <source src="/video/7990123-uhd_4096_2160_25fps.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col justify-end pb-8 sm:pb-10 px-6 sm:px-8 lg:px-12 max-w-[1920px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-6 lg:gap-0">

                    {/* Left Side: Main Title */}
                    <div className="flex-shrink-0 max-w-4xl pb-4 lg:pb-0">
                        <h1 className="text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.05] font-(family-name:--font-inter)">
                            World Federation of <br />
                            <span className="text-[#F02306] font-semibold">Shotokan Karate</span>
                        </h1>
                    </div>

                    {/* Right Side: Divider + Stats */}
                    <div className="flex items-stretch h-auto pl-0 lg:pl-8">

                        {/* Vertical Divider */}
                        <div className="hidden lg:block w-[1px] bg-white/30 mr-8 flex-shrink-0 self-stretch my-1"></div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-6 text-left w-full">

                            {/* Item 1 */}
                            <div className="flex flex-col gap-3">
                                <h3 className="font-semibold text-base lg:text-[22px] leading-[1.15] tracking-tight">
                                    32+ Years of <br className="hidden lg:block" /> Martial Arts <br className="hidden lg:block" /> Experience
                                </h3>
                                <p className="text-zinc-400 text-xs lg:text-[14px] font-normal leading-relaxed max-w-[220px]">
                                    Backed by over three decades of national and international martial arts experience.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-col gap-3">
                                <h3 className="font-semibold text-base lg:text-[22px] leading-[1.15] tracking-tight">
                                    International <br className="hidden lg:block" /> Presence in <br className="hidden lg:block" /> 5+ Countries
                                </h3>
                                <p className="text-zinc-400 text-xs lg:text-[14px] font-normal leading-relaxed max-w-[220px]">
                                    Active across India, UAE, Qatar, Bahrain, and Portugal with unified global standards.
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-col gap-3">
                                <h3 className="font-semibold text-base lg:text-[22px] leading-[1.15] tracking-tight">
                                    ISO 9001:2015 <br className="hidden lg:block" /> Certified <br className="hidden lg:block" /> Federation
                                </h3>
                                <p className="text-zinc-400 text-xs lg:text-[14px] font-normal leading-relaxed max-w-[220px]">
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
