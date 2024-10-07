'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiLogout } from 'react-icons/ci'
import { FiHelpCircle } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import profileIMg from '@/public/$2b$04$9I3g3eiitPQhWUShqofLOMDIAQ6IsDZwiCFAZpkRBrfsP7giQsS.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import HoverBtn from './HoverBtn'

const SideBarDrop = () => {
    const [openSideDrop, setOpenSideDrop] = useState(false)
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

    const sideBarHoverData = [
        {
            $id: 1,
            name: "Bethel collections",
            btntext: "OWNER",
        },
        {
            $id: 2,
            name: "Business Demo",
            btntext: "manager",
        },
        {
            $id: 3,
            name: "BASIC HAUR",
            btntext: "OWNER",
        },
        {
            $id: 4,
            name: "Write It",
            btntext: "OWNER",
        },
        {
            $id: 5,
            name: "Vet Pets",
            btntext: "OWNER",
        },
        {
            $id: 6,
            name: "Dummy",
            btntext: "OWNER",
        },
    ]
    return (
        <div onClick={() => setOpenSideDrop(!openSideDrop)} className='bg-gray-100 rounded-md cursor-pointer p-4 absolute left-6 bottom-3'>
            <div className={openSideDrop ? "" : "hidden"}>
                <div className='flex flex-col gap-2' >
                    <div>
                        <div >
                            <HoverBtn className='bg-blue-950 px-2 w-full py-3 rounded-lg text-white text-sm text-center '
                                btnText='Switch to Business'
                                classNameContent='bg-blue-950 text-white p-3 w-56 rounded-2xl  '
                            >
                                {sideBarHoverData.map(data => (
                                    <div 
                                    key={data.$id}
                                    className='  w-full mt-4  mb-4'>
                                        <div className='w-full flex justify-between items-center mb-4 '>
                                            <p className='text-xs font-thin'>{data.name}</p>
                                            <button className='text-[0.65rem] font-thin bg-gray-200 text-black px-2'>{data.btntext}</button>
                                        </div>
                                        <hr className='border-gray-400' />
                                    </div>
                                ))}


                            </HoverBtn>
                        </div>
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
    )
}

export default SideBarDrop
