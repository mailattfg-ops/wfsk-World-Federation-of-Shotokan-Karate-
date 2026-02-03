import React from 'react';

interface JapaneseHeadingProps {
    text: string;
    className?: string;
}

export function JapaneseHeading({ text, className = "text-[12px]" }: JapaneseHeadingProps) {
    // Check if we need to grow the lines based on the text styling
    const isLarge = className.includes("text-lg");
    const lineClass = isLarge
        ? "h-[2px] bg-[#FF0000] grow rounded-full"
        : "h-[1px] bg-[#FF0000] w-12 shrink-0";

    return (
        <div className={`flex items-center gap-2 mt-1 w-full ${isLarge ? "gap-3 mt-2" : ""}`}>
            <div className={lineClass}></div>
            <span className={`text-[#FF0000] font-medium tracking-widest whitespace-nowrap leading-none ${className}`}>
                {text}
            </span>
            <div className={lineClass}></div>
        </div>
    );
}
