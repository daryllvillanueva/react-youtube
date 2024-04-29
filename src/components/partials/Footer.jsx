import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <ul>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Press</Link></li>
            <li><Link to="#">Copyright</Link></li>
            <li><Link to="#">Contact us </Link></li >
            <li><Link to="#">Creators</Link></li>
            <li><Link to="#">Advertise</Link></li>
            <li><Link to="#">Developers</Link></li>
        </ul>
        <ul>
            <li><Link to="#">Terms</Link></li>
            <li><Link to="#">Privacy</Link></li>
            <li><Link to="#">Policy & Safety</Link></li>
            <li><Link to="#">How Youtube works</Link></li>
            <li><Link to="#">Test new features</Link></li>
        </ul>
        <small className='text-[0.8rem] text-[#717171]'>© 2024 Google LLC</small>
    </div>
  )
}

export default Footer
