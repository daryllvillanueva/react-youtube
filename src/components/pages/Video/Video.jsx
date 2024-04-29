import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { videos } from './data'
import { Link } from 'react-router-dom'

const Video = ({videos,grouping}) => {

    const getGroupings = videos.filter((video) => video.grouping === grouping)
  return (
    <>
        <div className="container px-4 flex items-center flex-wrap gap-2">
            {getGroupings.map((video, key) => (
                <button key={key}>
                    <div className="content w-[23rem] h-[21rem] p-4 text-white">
                        <div className='relative mb-3'>
                            <img src={`${baseImgUrl}video/${video.img}`} alt="" className='w-[400px] h-[200px] object-cover rounded-lg'/>
                            <span className='bg-[#00000099] px-2 py-[1px] absolute bottom-2 right-2 text-[0.8rem] font-semibold rounded-md tracking-wider'>{video.duration}</span>
                        </div>
                        <div className='flex gap-3 items-start text-left'>
                            <img src={`${baseImgUrl}video/${video.logo}`} alt="" className=' rounded-full w-[40px]'/>
                            <div>
                                <h1 className='text-base font-semibold'>{video.title}</h1>
                                <h3 className='text-[#aaa]'>{video.author}</h3>
                                <h3 className='text-[#aaa] tracking-wider'>{video.views} <span>• {video.time}</span></h3>
                            </div>
                        </div>
                    </div>
                </button>
            ))}  
        </div>
    </>
  )
}

export default Video