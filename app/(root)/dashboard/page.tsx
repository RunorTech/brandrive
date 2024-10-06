
import React from 'react'
import AccountSum from '@/components/custom_ui/AccountSum';
import NetTab from '@/components/custom_ui/NetTab';
import RecentTF from '@/components/custom_ui/RecentTF';

const page = () => {
  return (
    <div className='bg-gray-100 h-full p-6'>
      <p className='text-xl font-thin mb-2'>Hi Personal,</p>
      <p className='text-3xl text-slate-700 mb-10'>Welcome back 👋</p>

      <AccountSum />

      <NetTab />

      <RecentTF />

    </div>
  )
}

export default page
