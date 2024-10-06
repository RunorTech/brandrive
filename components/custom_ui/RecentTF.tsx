import React from 'react'
import Container from './Container'
import TransactionCon from './TransactionCon'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6'

const RecentTF = () => {
    return (
        <Container>
            <div className='mb-10'>
                <div className='grid grid-cols-[20px_minmax(200px,_1fr)] place-content-center'>
                    <span className='bg-orange-500 h-5 w-2 rounded-t-full rounded-b-full'></span>
                    <p className='text-blue-800 text-base font-semibold'>Most Recent Transactions</p>
                </div>
            </div>
            <div>
                <TransactionCon text="personal wallet funding from brandrive" type={true} svg={FaArrowUp} />
                <TransactionCon text="personal wallet funding from brandrive" type={false} svg={FaArrowDown} />
                <TransactionCon text="personal wallet funding from brandrive" type={false} svg={FaArrowDown} />
                <TransactionCon text="personal wallet funding from brandrive" type={false} svg={FaArrowDown} />
                <TransactionCon text="personal wallet funding from brandrive" type={false} svg={FaArrowDown} />
            </div>
        </Container>
    )
}

export default RecentTF
