'use client'
import React, { useState } from 'react'
import SideBarItems from './custom_ui/SideBarItems';
import profileIMg from '@/public/$2b$04$9I3g3eiitPQhWUShqofLOMDIAQ6IsDZwiCFAZpkRBrfsP7giQsS.png'
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDashboard } from 'react-icons/md';
import { FiHelpCircle } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import Logo from './custom_ui/Logo';
const SideBar = () => {
    const [openSideDrop, setOpenSideDrop] = useState(false)

    const handleDropDown = () => {
        setOpenSideDrop(!openSideDrop);
    }
    const sideBarDataDrop = [
        {
            $id: 1,
            link: "/dashboard",
            text: "Help Center",
            svg: <FiHelpCircle />
        },
        {
            $id: 2,
            link: "/dashboard",
            text: "Manage Profile",
            svg: <IoSettingsOutline />
        },
        {
            $id: 3,
            link: "/dashboard",
            text: "Logout",
            svg: <CiLogout />
        },
    ]
    return (
        <div className=' relative h-screen grid grid-cols-1 grid-rows-[85px_minmax(500px,_1fr)_200px] px-8 py-4 '>
            <div className=''>
                <div className='w-full h-20 p-4'><Logo /></div>
            </div>
            <div className=' grid grid-cols-1 gap-2 px-2' >
                <SideBarItems />
            </div>
            <div onClick={handleDropDown} className='bg-gray-100 rounded-md cursor-pointer p-4 absolute left-6 bottom-3'>
                <div className={openSideDrop ? "" : "hidden"}>
                    <div className='flex flex-col gap-2' >
                        <div>
                            <button className='bg-blue-900 px-2 w-full py-3 rounded-lg text-white text-xs'>Switch To Business </button>
                        </div>
                        <div className='w-full'>
                            {sideBarDataDrop.map(data => (
                                <a key={data.$id}
                                    className={`flex gap-3 items-center  py-3 rounded-lg`}
                                    href={data.link}
                                >
                                    <span className='text-2xl unActive_icon'>{data.svg}</span>
                                    <span className='text-[0.80rem]'>{data.text}</span>
                                </a>
                            ))}
                        </div>
                        <div className='px-2 mb-2'>
                            <button className='text-xs w-full text-slate-700 bg-white border-dashed py-3 px-4 border-slate-700 border-[1px]'>Create New Business +</button>
                        </div>
                    </div>
                </div>
                <div className='w-full rounded-md grid grid-cols-[45px_minmax(90px,_1fr)] place-content-center place-items-center gap-2 '>
                    <div className='rounded-full w-full h-full flex justify-center items-center'>
                        <div className='w-full h-11'>
                            <Image src={profileIMg} alt={`Slide `} className='rounded-full w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='flex justify-between items-center'><span className='text-xs '>Demo</span><span className='text-3xl active:bg-slate-400 rounded-full'><RiArrowDropDownLine /></span></h4>
                        <p className='text-[10px]'>demoacount@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar

