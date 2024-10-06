'use client'
import React, { useState } from 'react'
import SideBarItems from './custom_ui/SideBarItems';
import Logo from './custom_ui/Logo';
import SideBarDrop from './custom_ui/SideBarDrop';
const SideBar = () => {

    return (
        <div className=' relative h-screen grid grid-cols-1 grid-rows-[85px_minmax(500px,_1fr)_200px] px-8 py-4 '>
            <div className=''>
                <div className='w-full h-20 p-4'><Logo /></div>
            </div>
            <div className=' grid grid-cols-1 gap-2 px-2' >
                <SideBarItems />
            </div>
            <div>
                <SideBarDrop />
            </div>
        </div>
    )
}

export default SideBar

