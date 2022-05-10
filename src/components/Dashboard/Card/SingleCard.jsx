import React from 'react'

const SingleCard = ({ number, title, Icon, star }) => {
    return (
        <div className='flex bg-gray-200 px-3 py-2 rounded-lg shadow-md h-24 items-center cursor-pointer active:scale-95 transition-transform duration-200 ease-in-out hover:bg-gray-300'>
            <div className='flex justify-between flex-1 items-center'>
                <div>
                    {Icon && Icon}
                    {star && star}
                </div>
                <div className='flex flex-col space-y-1'>
                    <h1 className='text-2xl font-bold'>{number}</h1>
                    <p className='text-sm'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleCard