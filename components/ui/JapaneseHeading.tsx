import React from 'react';

interface JapaneseHeadingProps {
    text: string;
    className?: string;
}

export function JapaneseHeading({ text, className = "text-[12px]" }: JapaneseHeadingProps) {
    // Detect if we're using a large text size to adjust line thickness
    const isLarge = className.includes("text-lg") || className.includes("35px") || className.includes("28px") || className.includes("2xl") || className.includes("3xl") || className.includes("4xl");
    const lineClass = isLarge
        ? "h-[2px] xl:h-[3px] bg-[#FF0000] grow rounded-full"
        : "h-[1px] bg-[#FF0000] grow shrink";

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
