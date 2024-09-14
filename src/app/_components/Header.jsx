'use client'

import React from 'react'

const Header = () => {
  // const {user, isSignedIn} = useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <div className='flex flex-row items-center'>
        {/* <Image src='/logo.png' width={40} height={25} alt='logo' /> */}
        <span>BudgetBuddy.ai</span>
      </div>
      <div>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    </div>
  )
}

export default Header