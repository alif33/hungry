import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    return (
        <header className='flex justify-between items-center bg-white shadow-md py-5 md:py-3 px-10 flex-row '>
            <div className='flex space-x-5'>
                <h1>Company Logo</h1>
                <h1 className='capitalize'>{location.pathname.replace("/", "")}</h1>
            </div>
            <div className='hidden md:inline-flex space-x-3'>
                <h1 className='px-5 hover:bg-gray-200 h-10 flex items-center justify-center text-center rounded-lg cursor-pointer hover:text-blue-500 active:scale-95 transition-transform duration-200 ease-in-out'>Support</h1>
                <h1 className='px-5 hover:bg-gray-200 h-10 flex items-center justify-center text-center rounded-lg cursor-pointer hover:text-blue-500 active:scale-95 transition-transform duration-200 ease-in-out'>About</h1>
                <h1 className='px-5 hover:bg-gray-200 h-10 flex items-center justify-center text-center rounded-lg cursor-pointer hover:text-blue-500 active:scale-95 transition-transform duration-200 ease-in-out'>Logout</h1>
            </div>
        </header>
    )
}

export default Header