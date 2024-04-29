import React from 'react'
import { baseImgUrl } from '../helpers/functions-general'
import { FaMicrophone, FaSearch } from 'react-icons/fa'
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <>
        <div className="header px-6 bg-black">
            <div className="header_wrapper flex justify-between ">
                <div className='flex items-center gap-5'>
                    <img src={`${baseImgUrl}header/burger.svg`} alt="" className='w-[28px] h-[30px]'/>
                    <div className='relative'>
                        <img src={`${baseImgUrl}header/youtube.svg`} alt="" className='w-[100px] h-[60px] '/>
                        <span className='absolute top-3 right-[-17px] text-[11px] font-semibold text-[#aaaaaa]'>PH</span>
                    </div> 
                </div>
                <div className='flex items-center relative gap-10'>
                    <div className='relative w-[43rem] px-6'>
                        <div className='border border-black'>
                            <input type="text" name="search" className='rounded-tl-full h-[43px] px-4 rounded-bl-full w-full bg-transparent outline-none text-white'/>
                            <label htmlFor="search" className='absolute text-[#ffffffe0] left-10 bottom-2 text-lg'>Search</label>
                        </div>
                        <IoIosSearch className='text-white text-2xl absolute right-6 top-3'/>
                        <span className='content-[""] rounded-tr-full rounded-br-full bg-[#ffffff1a] py-[22px] px-[30px] absolute right-0 bottom-0'></span>
                    </div>
                    <div className='relative'>
                        <FaMicrophone className='text-white text-2xl'/>
                        <span className='content-[""] rounded-full bg-[#ffffff1a] py-[25px] px-[25px] absolute top-[-10px] left-[-12px]'></span>
                    </div>     
                </div>

                <div className='flex items-center gap-5'>
                    <img src={`${baseImgUrl}header/record.svg`} alt="" className='w-[25px]'/>
                    <img src={`${baseImgUrl}header/bell.svg`} alt="" className='w-[25px]'/>
                    <span className='content-[""] rounded-full bg-white py-[20px] px-[20px]'></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header