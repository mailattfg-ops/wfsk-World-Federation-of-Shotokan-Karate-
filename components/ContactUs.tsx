import Image from "next/image";
import Link from "next/link";

export function ContactUs() {
    return (
        <section className="w-full p-4 pl-0 pr-0 pb-0 pt-0">
            <div className="w-full mx-auto bg-white rounded-3xl shadow-sm flex flex-col lg:flex-row min-h-[600px] p-4">
                {/* Left Side - Image & Overlay */}
                <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden">
                    <Image
                        src="/images/contact_img.jpg"
                        alt="Karate Students"
                        fill
                        className="object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 mb-2">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white font-(family-name:--font-belanosima) leading-tight mb-2">
                            Join World <br />
                            Federation Karate
                        </h2>
                        <p className="text-white/90 text-sm sm:text-base font-medium mb-6">
                            Learn Karate and keep your health in check.
                        </p>

                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 bg-[#E81E26] text-white px-6 py-3 rounded-md font-bold text-sm tracking-wide hover:bg-[#B0171D] transition-colors uppercase"
                        >
                            Book Now
                            {/* Long Arrow SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M2 12h20" />
                                <path d="m16 6 6 6-6 6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 p-8 sm:p-16 flex flex-col justify-center">
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-(family-name:--font-belanosima) mb-3">
                            Contact Us
                        </h2>
                        <p className="text-gray-500 font-(family-name:--font-geist-sans) text-sm sm:text-base">
                            Enter the information below and we will help you as <br className="hidden sm:block" />
                            soon as possible
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[13px] font-bold text-[#111111] uppercase tracking-wide">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Michael"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-[#111111] focus:outline-none focus:border-[#CC0000] placeholder:text-gray-400 font-(family-name:--font-geist-sans)"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[13px] font-bold text-[#111111] uppercase tracking-wide">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="726929669526"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-[#111111] focus:outline-none focus:border-[#CC0000] placeholder:text-gray-400 font-(family-name:--font-geist-sans)"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[13px] font-bold text-[#111111] uppercase tracking-wide">
                                Your Mail Address
                            </label>
                            <input
                                type="email"
                                placeholder="abo@gmail.com"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-[#111111] focus:outline-none focus:border-[#CC0000] placeholder:text-gray-400 font-(family-name:--font-geist-sans)"
                            />
                        </div>

                        {/* Optional Message Field */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[13px] font-bold text-[#111111] uppercase tracking-wide">
                                    Your question or message
                                </label>
                                <span className="text-[11px] text-gray-400 uppercase font-bold">Optional</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Placeholder"
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-[#111111] focus:outline-none focus:border-[#CC0000] placeholder:text-gray-400 font-(family-name:--font-geist-sans)"
                            />
                        </div>

                        <div className="space-y-4 pt-2">
                            <p className="text-[11px] text-gray-400 font-(family-name:--font-geist-sans)">
                                This will be sent to our whatsapp and we will contact you back shortly
                            </p>

                            <button
                                type="submit"
                                className="w-full bg-[#111111] text-white font-bold py-4 rounded-lg hover:bg-black transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
