import React from 'react'

const NewsLetter = () => {
    return (
        <div class="w-full bg-[#EEF9F4] px-2 text-center text-white py-20 flex flex-col items-center justify-center mt-16">
            <p class="text-[#4FBF8B] p-medium">Get updated</p>
            <h1 class="max-w-lg p-semibold text-4xl/[44px] mt-2 text-black">Subscribe to our newsletter & get the latest news</h1>
            <div class="flex items-center justify-center mt-10 border border-[#4FBF8B] outline-none text-sm rounded-full h-14 max-w-md w-full">
                <input type="text" class="text-black bg-transparent outline-none rounded-full px-4 h-full flex-1 p-regular" placeholder="Enter your email address" />
                <button class="bg-[#4FBF8B] text-white rounded-full h-11 mr-1 px-8 flex items-center justify-center p-regular">
                    Subscribe now
                </button>
            </div>
        </div>)
}

export default NewsLetter