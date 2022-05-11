import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col space-y-5'>
            <Link to={"/login"}>
                <h1 className='h-10 text-lg text-white px-8 bg-blue-600 flex items-center justify-center rounded-full'>Login</h1>
            </Link>
            <Link to="/dashboard">
                <h1 className='h-10 text-lg text-white px-8 bg-blue-600 flex items-center justify-center rounded-full'>Dashboard</h1>
            </Link>
        </div>
    )
}

export default Index