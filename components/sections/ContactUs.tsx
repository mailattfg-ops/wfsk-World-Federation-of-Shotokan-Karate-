"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import Image from "next/image";

interface ContactUsProps {
    className?: string;
}

export function ContactUs({ className = "" }: ContactUsProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleBookNow = (e: React.MouseEvent) => {
        e.preventDefault();
        const text = encodeURIComponent("Hello, I am interested in booking a session.");
        window.open(`https://wa.me/918275900700?text=${text}`, "_blank");
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Basic Validation
        if (!name || !phone || !email) {
            alert("Please fill in all required fields (Name, Phone, Email).");
            setLoading(false);
            return;
        }

        const formattedMessage = `*New Inquiry from Website*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message || "N/A"}`;
        const encodedMessage = encodeURIComponent(formattedMessage);

        // Redirect to WhatsApp
        window.open(`https://wa.me/918275900700?text=${encodedMessage}`, "_blank");
        setLoading(false);

        // Reset form (optional, depending on UX preference)
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
    };

    return (
        <section className={`w-full bg-[#E5E5E5] ${className}`}>
            <div className="w-full mx-auto bg-white rounded-lg shadow-sm flex flex-col md:flex-row min-h-[600px] p-2 sm:p-4">
                {/* Left Side - Image & Overlay */}
                <div className="relative w-full md:w-1/2 min-h-[450px] md:min-h-full rounded-2xl overflow-hidden">
                    <Image
                        src="/images/contact_img.webp"
                        alt="Karate Students"
                        fill
                        className="object-cover"
                    />
                    {/* Gradient Overlay - Richer bottom for readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:p-12 mb-1">
                        <h2 className="text-[27px] md:text-3xl lg:text-5xl font-bold text-white font-(family-name:--font-geist-sans) leading-tight mb-2 tracking-tight">
                            Join World <br />
                            Federation Karate
                        </h2>
                        <p className="text-white/90 text-[14px] sm:text-base font-medium mb-2 leading-tight">
                            Learn Karate and keep your health in check.
                        </p>

                        <button
                            onClick={handleBookNow}
                            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#E81E26] text-white w-[114px] h-[28px] sm:w-auto sm:h-auto px-3 py-2 sm:px-6 sm:py-4  font-bold text-[11px] sm:text-base tracking-wide hover:bg-[#B0171D] transition-all group cursor-pointer"
                        >
                            <span className="shrink-0">Book Now</span>
                            <svg
                                width="32"
                                height="8"
                                viewBox="0 0 32 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 sm:w-16 h-auto"
                            >
                                <path
                                    d="M0 4H31M31 4L27.5 1M31 4L27.5 7"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
                    <div className="mb-6 sm:mb-8 text-left">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] font-(family-name:--font-geist-sans) mb-2 sm:mb-3">
                            Contact Us
                        </h2>
                        <p className="text-[#8F8F8F] font-medium font-(family-name:--font-geist-sans) text-xs sm:text-base">
                            Enter the information below and we will help you as <br className="hidden sm:block" />
                            soon as possible
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            <div className="space-y-2">
                                <label className="text-[13px] font-semibold font-(family-name:--font-geist-sans) text-[#171717B2] uppercase">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-white border-2 border-[#1717171A] rounded-xl text-sm text-[#111111] focus:outline-none focus:border-[#CC0000] placeholder:text-gray-400 font-(family-name:--font-geist-sans)"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[13px] font-semibold font-(family-name:--font-geist-sans) text-[#171717B2] uppercase">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+91 95 67 526150"
                                    className="w-full px-4 py-3 bg-white border-2 border-[#1717171A] rounded-xl text-sm text-[#111111] focus:outline-none focus:border-[#CC0000] placeholder:text-gray-400 font-(family-name:--font-geist-sans)"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[13px] font-semibold font-(family-name:--font-geist-sans) text-[#171717B2] uppercase">
                                Your Mail Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 bg-white border-2 border-[#1717171A] rounded-xl text-sm text-[#111111] focus:outline-none focus:border-[#CC0000] placeholder:text-gray-400 font-(family-name:--font-geist-sans)"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[13px] font-semibold font-(family-name:--font-geist-sans) text-[#171717B2] uppercase">
                                    Your question or message
                                </label>
                                <span className="text-[11px] text-gray-400 uppercase font-bold">Optional</span>
                            </div>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="I'm interested in information about..."
                                className="w-full px-4 py-3 bg-white border-2 border-[#1717171A] rounded-xl text-sm text-[#111111] focus:outline-none focus:border-[#CC0000] placeholder:text-gray-400 font-(family-name:--font-geist-sans)"
                            />
                        </div>

                        <div className="space-y-3">
                            <p className="text-[11px] text-[#17171799] font-(family-name:--font-geist-sans) text-center sm:text-left">
                                This will be sent to our whatsapp and we will contact you back shortly
                            </p>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#111111] text-white font-bold py-4 rounded-lg hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
