'use client'
import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import { GoSun } from "react-icons/go";

const BarIcon = () => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div className='flex gap-3 justify-center items-center'>
            <div className='text-xl'><GoSun/></div>
            <div className='z-50'>
            <ToggleSwitch checked={isToggled} onChange={setIsToggled} />
            </div>
            <div className='w-8 h-8 rounded-full bg-blue-950'></div>
        </div>
    )
}

export default BarIcon


