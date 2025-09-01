import React from 'react'

const NewsLetter = () => {
    return (
        <div className="w-full bg-[#EEF9F4] px-2 text-center text-white py-20 flex flex-col items-center justify-center mt-16">
            <p className="text-[#4FBF8B] p-medium">Get updated</p>
            <h1 className="max-w-lg p-semibold text-4xl/[44px] mt-2 text-black">Subscribe to our newsletter & get the latest news</h1>
            <div className="flex items-center justify-center mt-10 border border-[#4FBF8B] outline-none text-sm rounded-full h-14 max-w-md w-full">
                <input type="text" className="text-black bg-transparent outline-none rounded-full px-4 h-full flex-1 p-regular" placeholder="Enter your email address" />
                <button className="bg-[#4FBF8B] text-white rounded-full h-11 mr-1 px-8 flex items-center justify-center p-regular">
                    Subscribe now
                </button>
            </div>
        </div>)
}

export default NewsLetter