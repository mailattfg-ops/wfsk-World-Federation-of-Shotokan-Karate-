import Image from "next/image";

export function WorldRecordHolder() {
    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="relative w-full p-2">
                <img
                    src="/images/team_photo.jpg"
                    alt="WFSK World Record Holders Team"
                    className="w-full h-auto object-cover block rounded-sm"
                />

                {/* Red Banner Overlay */}
                <div className="absolute top-6 left-6 right-6 bg-[#F02306] shadow-lg overflow-hidden mt-4">


                    <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                        <Image
                            src="/images/banner_image.jpg"
                            alt="banner texture"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center lg:flex-row lg:text-left gap-6 lg:gap-10 h-full">

                        {/* Title */}
                        <div className="flex-shrink-0">
                            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-[0.95]">
                                World <br />
                                Record <br />
                                Holders
                            </h2>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-[1px] h-24 bg-white"></div>

                        {/* Description */}
                        <div className="max-w-sm">
                            <p className="text-white text-sm sm:text-base lg:text-[17px] font-medium leading-relaxed">
                                WFSK (World Federation of Shotokan Karate) has achieved world
                                records, notably for the Largest Black Belt Awarding Ceremony
                                with 404 Indian students under one federation in late 2024.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
