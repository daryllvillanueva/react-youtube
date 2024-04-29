import React from 'react'
import { explore, mainNav, subNav, subscriptions, typeYoutube } from './data';
import { LiaCogSolid } from "react-icons/lia";
import { HiOutlineFlag } from "react-icons/hi2";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { TbExclamationMark } from "react-icons/tb";
import { baseImgUrl } from '../../helpers/functions-general'

const SideBar = () => {
  return (
    <>
        <div className='side__nav'>
            {mainNav.map((item,key) => (
                 <ul key={key}>
                    <li>
                        <button className='list__nav '>
                            <img src={`${baseImgUrl}home/${item.img}`} alt="" className='w-[1.7rem]'/><h2>{item.nav}</h2>
                        </button>
                    </li>   
               </ul>
              ))}
        </div>
        <div className='side__nav'>
              <div className="flex gap-2 items-center">
                <h1 className='text-lg'>You</h1>
                <img src={`${baseImgUrl}home/greater-arrow.svg`} alt="" className='w-[1.2rem] mt-1'/>
              </div>
              {subNav.map((item,key) => (
                <ul key={key}>
                    <li>
                        <button className='list__nav'>
                            <img src={`${baseImgUrl}home/${item.img}`} alt="" className='w-[1.7rem]'/><h2>{item.nav}</h2>
                        </button>
                    </li>
                </ul>
              ))}
        </div>
        <div className='side__nav'>
              <h1 className='text-[1rem] font-semibold'>Subscriptions</h1>
              {subscriptions.map((item,key) => (
                <ul key={key}>
                    <li>
                        <button className='list__nav'>
                            <img src={`${baseImgUrl}home/${item.img}`} alt="" className='w-[1.7rem] rounded-full'/><h2>{item.nav}</h2>
                        </button>
                    </li>
                </ul>
              ))} 
        </div>
        <div className='side__nav'>
            <h1 className='text-[1rem] font-semibold'>Explore</h1> 
            {explore.map((item,key) => (
                <ul key={key}>
                    <li>
                        <button className='list__nav'>
                            <img src={`${baseImgUrl}home/${item.img}`} alt="" className='w-[1.7rem]'/><h2>{item.nav}</h2>
                        </button>
                    </li>
                </ul>
            ))} 
        </div>
        <div className='side__nav'>
            <h1 className='text-[1rem] font-semibold'>More from Youtube</h1>
            {typeYoutube.map((item,key) => (
                <ul key={key}>
                    <li>
                        <button className='list__nav'>
                            <img src={`${baseImgUrl}home/${item.img}`} alt="" className='w-[1.7rem]'/><h2>{item.nav}</h2>
                        </button>
                    </li>
                </ul>
            ))} 
        </div>
        <div className='side__nav'>
              <ul className='list__nav'>
                <li><LiaCogSolid className='text-2xl'/></li>
                <li><h2>Settings</h2></li>
              </ul>
              <ul className='list__nav'>
                <li><HiOutlineFlag className='text-xl'/></li>
                <li><h2>Report History</h2></li>
              </ul>
              <ul className='list__nav'>
                <li><RxQuestionMarkCircled className='text-xl'/></li>
                <li><h2>Help</h2></li>
              </ul>
              <ul className='list__nav'>
                <li><TbExclamationMark className='text-xl'/></li>
                <li><h2>Send feedback</h2></li>
              </ul>
        </div>
    </>
  )
}

export default SideBar