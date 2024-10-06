'use client'
import React, { useState } from 'react'
import { FaLink } from "react-icons/fa6";
import { TbCurrencyNaira } from 'react-icons/tb';


const CardOne = () => {
    const [activeLink, setActiveLink] = useState<string | null>("#NGN");
    const [showBalance, setShowbalance] = useState(false);
    return (
        <div className='bg-white h-80 w-[19.5rem] rounded-lg p-[0.35rem]'>
            <div className='flex justify-between bg-gray-100 rounded-lg p-[0.35rem]'>
                <a className='bg-white rounded-lg py-[0.65rem] px-8 text-sm font-thin ' href="#NGN">NGN Wallet</a>
                <a className=' rounded-lg py-[0.65rem] px-8 text-sm font-thin' href="#USD">USD Wallet</a>
            </div>
            <div className='py-4 px-2 flex flex-col gap-8'>
                <div>
                    <h3 className='flex items-center'><span className='text-2xl'><TbCurrencyNaira/></span><span className='text-xl'>{showBalance? "20" : "*****,**"}</span></h3>
                    <p className='text-xs font-thin'>Wallet Balance <span className='text-base'>|</span> <span onClick={() => setShowbalance(!showBalance)} className='text-[0.75rem] cursor-pointer text-orange-500 underline'>{showBalance? "Hide Wallet" : "Show Wallet"}</span></p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-thin'>Your Wallet & Bank Account</p>
                    <p className='text-sm font-thin flex items-center gap-2'>8012873942 <span className='bg-orange-500 text-white  rounded-full p-1'><FaLink/></span></p>
                    <p className='text-sm font-thin'>SAFE HAVEN MFB</p>
                </div>

                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white py-[0.65rem] px-7 rounded-sm text-sm font-semibold'>Find Account</button>
                    <button className=' py-[0.65rem] px-10  text-xs font-thin border-[1px] border-black border-dashed'>Transfer</button>
                </div>
            </div>
        </div>
    )
}

export default CardOne
