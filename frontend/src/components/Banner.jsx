import React from 'react'
import { assets, features } from '../assets/assets'

const Banner = () => {
    return (
        <div className='relative mt-16'>
            <img loading='lazy' src={assets.bottom_banner_image} alt="Banner Image" className='w-full hidden md:block' />
            <img loading='lazy' src={assets.bottom_banner_image_sm} alt="Banner Image" className='w-full md:hidden' />
            <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-32'>
                <div>
                    <h1 className='text-2xl md:text-3xl p-semibold text-primary mb-6'>Why we are the best?</h1>
                    {features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-4 mt-2'>
                            <img loading='lazy' src={feature.icon} alt={feature.title} className='md:w-11 w-9' />
                            <div className=''>
                                <h3 className='text-lg md:text-xl p-semibold'>{feature.title}</h3>
                                <p className='text-gray-500/70 text-xs md:text-sm p-regular'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner