import React from 'react'
import cardImg from '@/public/Mobile App Ad-2.fce45c6c48080886555e.png'
import cardImg2 from "@/public/Mobile App Ad@2x.2a9bcc78b227c4c32bbd.png"
import Carousel from './Carousel';

const CardTwo = () => {
    const images = [
        cardImg,
        cardImg2,
    ];
    return (
        <div className='w-[19rem] h-72 rounded-lg'>
            <Carousel images={images} interval={8000} />
        </div>
    )
}

export default CardTwo
