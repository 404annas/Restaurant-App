import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import Banner from '../components/Banner'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
    return (
        <div className='mt-10'>
            <MainBanner />
            <Categories />
            <BestSellers />
            <Banner />
            <NewsLetter />
        </div>
    )
}

export default Home