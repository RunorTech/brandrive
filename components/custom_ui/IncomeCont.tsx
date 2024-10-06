import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";

interface IncomeContProps {
    svg: React.ElementType; // Type for a React component
    text: string;
    balance: string;
    color: boolean;
}

const IncomeCont: React.FC<IncomeContProps> = ({ svg: SvgIcon, text, balance, color}) => {
    return (
        <div className={ `${color? "bg-emerald-50" : "bg-slate-100"} rounded-lg p-4 py-6 flex items-center gap-2`}>
            <div className='text-blue-700 text-3xl'><SvgIcon /></div>
            <div>
                <p className='text-xs pl-1'>{text}</p>
                <p className='flex items-center text-slate-600'><span className='text-2xl'><TbCurrencyNaira/></span><span className='text-xl'>{balance}</span></p>
            </div>
        </div>
    )
}

export default IncomeCont
