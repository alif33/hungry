import React from 'react'

const TopTitle = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center bg-blue-500 w-full px-10  py-4 md:h-16  md:py-0 space-y-4 md:space-y-0'>
            <div>
                <h1 className='text-white text-lg'>Most popular keywords of your business</h1>
            </div>
            <div className=' flex space-x-4'>
                <h1 className='bg-cyan-600 h-10 px-4 flex items-center justify-center rounded-md shadow-md active:scale-95 cursor-pointer'>Positive</h1>
                <h1 className='bg-red-600 text-white h-10 px-4 flex items-center justify-center rounded-md shadow-md active:scale-95 cursor-pointer'>Negative</h1>
            </div>
        </div>
    )
}

export default TopTitle