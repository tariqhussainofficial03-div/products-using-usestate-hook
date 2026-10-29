


import React, { useState } from 'react'
import Logo from '../assets/images/logo.jpg'

function Header({products, setProducts}) {

    const [activeBtn, setactiveBtn] = useState(1)
    const [showNavbar, setshowNavbar] = useState(false)

  return (
    <div className='w-full h-18 flex justify-between sticky top-0 bg-white shadow-xl '>
        <div className=' w-[90%] h-full mx-auto flex justify-between items-center'>

         <div className='h-full md:w-[10%] sm:w-[12%] lg:w-[9%]'  > 
          <img className='h-full w-full' src={Logo} alt="logo" />
         </div>

        <div className={` navBar ${showNavbar ? 'left-0 duration-400' : '-left-90 duration-400'}  mobile-manue sm:w-auto  sm:static flex-col  sm:flex-row sm:gap-3 lg:gap-6`}>
            <button className={`${activeBtn===1? ' active-category ': 'hover: cursor-pointer sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px]'}`}   onClick={()=>{setProducts('All'); setactiveBtn(1);setshowNavbar(!showNavbar)}}  >All Products</button>
            <button className={`${activeBtn===3? ' active-category ': 'hover: cursor-pointer sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px]'}`}   onClick={()=>{setProducts('Clothing'); setactiveBtn(3);setshowNavbar(!showNavbar)}}  >Clothing</button>
            <button className={`${activeBtn===4? ' active-category ': 'hover: cursor-pointer sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px]'}`}   onClick={()=>{setProducts('Accessories'); setactiveBtn(4);setshowNavbar(!showNavbar)}}  >Accessories</button>
            <button className={`${activeBtn===2? ' active-category ': 'hover: cursor-pointer sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px]'}`}   onClick={()=>{setProducts('Electronics'); setactiveBtn(2);setshowNavbar(!showNavbar)}} >Electronics</button>
            <button className={`${activeBtn===5? ' active-category ': 'hover: cursor-pointer sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px]'}`}   onClick={()=>{setProducts('Home & Living'); setactiveBtn(5);setshowNavbar(!showNavbar)}}  >Home & Living</button>
            <button className={`${activeBtn===6? ' active-category ': 'hover: cursor-pointer sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px]'}`}    onClick={()=>{setProducts('Beauty'); setactiveBtn(6);setshowNavbar(!showNavbar)}}   >Beauty</button>
        </div>

        <button className='cursor-pointer sm:hidden' onClick={()=>{setshowNavbar(!showNavbar)}}> {showNavbar ? <span className='text-4xl' >&times;</span> : <span className='text-2xl'>&#9776;</span> } </button>
    </div>
    </div>
  )
}

export default Header