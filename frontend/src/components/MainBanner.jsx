import React from 'react'
import { assets } from '../assets/assets'

const MainBanner = () => {
    return (
        <div className='relative'>
            <img loading='lazy' src={assets.main_banner_bg} alt="Main Banner" className='w-full hidden md:block' />
            <img loading='lazy' src={assets.main_banner_bg_sm} alt="Small Main Banner" className='w-full md:hidden' />
        </div>
    )
}

export default MainBanner