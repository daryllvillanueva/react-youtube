import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'

const Shorts = () => {
  return (
    <div className='px-4 py-2'>
        <div className='flex gap-2 mb-3'>
          <img src={`${baseImgUrl}/home/shorts-icon.svg`} alt=""/>
          <h1 className='text-2xl text-white'>Shorts</h1>
        </div>

        <div className='flex items-center gap-3'>
          <div>
            <video className="h-[25rem] w-[15rem] rounded-lg" controls>
              <source src="../../img/shorts/shorts-1.mp4" type="video/mp4"/>
            </video>
          </div>

          <video className="h-[25rem] w-[15rem] rounded-lg" controls>
            <source src="../../img/shorts/shorts-1.mp4" type="video/mp4" />
          </video>
        </div>
    </div>
  )
}

export default Shorts