import React, { ReactNode } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

interface HoverBtnProps {
    className?: string;
    classNameContent?: string;
    btnText?: string;
    children?: ReactNode;
}
const HoverBtn: React.FC<HoverBtnProps> = ({ className , btnText, children, classNameContent }) => {
    return (

        <HoverCard>

            <HoverCardTrigger>
                <div className={`${className}`}>
                    {btnText}
                </div>
            </HoverCardTrigger>

            <HoverCardContent className={`${classNameContent}`}>
                {children}
            </HoverCardContent>
        </HoverCard>

    )
}

export default HoverBtn
