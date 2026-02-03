import Image from "next/image";

export function WhoWeAre() {
    return (
        <section className="w-full bg-[#E5E5E5] p-4">
            <div className="w-full mx-auto space-y-8">

                {/* Top Info Card */}
                <div className="bg-white rounded-lg p-6 sm:p-10 shadow-sm">

                    {/* Upper Section: Title | Line | Header Content */}
                    <div className="flex flex-col lg:flex-row items-stretch">

                        {/* Left: Title - Vertically Centered relative to this section only */}
                        <div className="flex-shrink-0 lg:w-1/4 flex lg:justify-end lg:items-center border-b lg:border-b-0 lg:border-r border-[#000000] pb-6 lg:pb-0 pr-6 lg:pr-8">
                            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight tracking-tight text-right w-full">
                                Who <br />
                                we are
                            </h2>
                        </div>

                        {/* Right: Header Content (Logo, Text, Badges) */}
                        <div className="flex-grow pl-0 lg:pl-8 pt-6 lg:pt-0">
                            <div className="flex flex-col sm:flex-row items-center sm:items-stretch max-w-2xl">
                                {/* Logo */}
                                <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-auto relative flex-shrink-0">
                                    <Image src="/images/logo.png" alt="WFSK Logo" fill className="object-contain object-top" />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-1 w-fit">
                                    {/* English Title */}
                                    <h3 className="text-[#E81E26] font-(family-name:--font-belanosima) font-normal uppercase whitespace-nowrap leading-none"
                                        style={{ fontSize: "clamp(18px, 2.0vw, 28px)" }}>
                                        World Federation of Shotokan Karate
                                    </h3>


                                    {/* Japanese Text */}
                                    <div className="w-full flex justify-between items-center text-black font-bold text-2xl leading-none">
                                        <div className="h-[3px] w-20 bg-black"></div>
                                        <span>ショトカ ン 空 手 の 世 界 連 盟</span>
                                        <div className="h-[3px] w-20 bg-black"></div>
                                    </div>

                                    {/* Red Box Section */}
                                    <div className="bg-[#E81E26] text-white rounded-md px-3 py-1 mt-1 w-full">
                                        <p className="font-medium text-center leading-snug"
                                            style={{ fontSize: "clamp(8px, 0.9vw, 10px)" }}>
                                            AN ISO 9001:2015 CERTIFIED KARATE FEDERATION <br />
                                            WORLD RECORDS HOLDING KARATE FEDERATION – UNIVERSAL RECORDS FORUM 2024 & 2025
                                        </p>
                                    </div>

                                    {/* IAF & UAF Logos + HQ Text */}
                                    <div className="flex items-center mt-1">
                                        <div className="relative w-16 h-8">
                                            <Image src="/images/IAF.png" alt="IAF" fill className="object-contain" />
                                        </div>
                                        <div className="relative w-24 h-8">
                                            <Image src="/images/UAF.png" alt="UAF" fill className="object-contain" />
                                        </div>
                                        <span className="text-[14px] font-bold text-black ml-1 font-geist-sans whitespace-nowrap">World Headquarters - Dubai , UAE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lower Section: Paragraphs (Outside the flex container with border) */}
                    {/* Lower Section: Paragraphs */}
                    <div className="mt-8 w-full">
                        <div className="space-y-4 text-[#7C7C7C] font-(family-name:--font-geist-sans) text-sm sm:text-[20px] leading-relaxed text-center w-full">
                            <p>
                                <strong className="font-semibold">World Federation of Shotokan Karate (WFSK)</strong> was established in 2012 to deliver an authentic and complete martial arts experience. Today, WFSK operates internationally across <strong className="font-semibold">India, UAE, Qatar, Bahrain, and Portugal</strong>, following global training standards.
                            </p>
                            <p>
                                An ISO 9001:2015 certified federation, WFSK offers training in <strong className="font-semibold">Karate-Do, self-defense, oriental weapons, and fitness</strong>, led by expert instructors with over 32 years of national and international experience.
                            </p>
                            <p>
                                With authorized certifications, structured gradings, and a strong global network, <strong className="font-semibold">WFSK is committed to discipline, excellence, and the true spirit of Shotokan Karate.</strong><br />
                                World Headquarters: India.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-md">
                        <Image
                            src="/images/who_we_are_image1.jpg"
                            alt="Master Portrait"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-md">
                        <Image
                            src="/images/who_we_are_image2.jpg"
                            alt="Team Action Shot"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
