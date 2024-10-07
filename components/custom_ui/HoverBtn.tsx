import React, { ReactNode } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { IoIosArrowForward } from 'react-icons/io';

interface HoverBtnProps {
    className?: string;
    classNameContent?: string;
    btnText?: string;
    children?: ReactNode;
}
const HoverBtn: React.FC<HoverBtnProps> = ({ className , btnText, children, classNameContent}) => {
    return (

        <HoverCard>

            <HoverCardTrigger>
                <div className={`${className} flex gap-2 justify-center items-center `}>
                    <span>{btnText}</span>
                    <span className='text-xl'><IoIosArrowForward /></span>
                </div>
            </HoverCardTrigger>

            <HoverCardContent className={`${classNameContent}`}>
                {children}
            </HoverCardContent>
        </HoverCard>

    )
}

export default HoverBtn
