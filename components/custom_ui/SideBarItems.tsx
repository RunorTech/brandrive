import sideBarData from '@/constant/sidebarData';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SideBarItems = () => {
    const [activeLink, setActiveLink] = useState<string | null>("/dashboard");
    const router = useRouter();

    const handleActiveLink = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        event.preventDefault(); // Prevent default behavior
        if (activeLink === link) {
            event.preventDefault();
        } else {
            setActiveLink(link);
            router.push(link);
        }
    };
    return (
        <>
            {sideBarData.map(data => (
                <a key={data.$id}
                    onClick={(e) => handleActiveLink(e, data.link)}
                    className={`flex gap-3 items-center px-4 h-11 rounded-lg ${activeLink === data.link ? "active_Link" : "unActive_link"}`}
                    href={data.link}
                >
                    <span className={`${activeLink === data.link ? "text-xl  " : "text-xl unActive_icon"}`}>{data.svg}</span>
                    <span className='text-[0.80rem]'>{data.text}</span>
                </a>
            ))}
        </>
    )
}

export default SideBarItems;
