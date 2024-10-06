import React from 'react'
import cardImg from '@/public/Airtel_logo_logotype_emblem.4f3c01e006541efd6d3d.png'
import cardImg2 from "@/public/MTN_Logo.svg.f8adb27b687b72b95be8.png"
import cardImg3 from "@/public/download (1).jpeg"
import cardImg4 from "@/public/download.jpeg"
import Image from 'next/image';

const Network = () => {
    const images = [
        cardImg,
        cardImg2,
        cardImg3,
        cardImg4,
    ];
    return (
        <>
            {images.map((image, index) => (
                <div key={index} className="w-12 h-12 rounded-full bg-white flex justify-center items-center shadow-lg shadow-slate-200">
                    <div className='w-8 h-8 '>
                        <Image src={image} alt={`Network ${index}`} className='rounded-full w-full h-full object-cover' />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Network
