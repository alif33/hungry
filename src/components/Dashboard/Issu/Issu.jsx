import React from 'react'
import ChartTwo from './../Chart/ChartTwo';

const Issu = () => {
    return (
        <div className='mt-10'>
            <div>
                <h1 className='h-14 flex items-center justify-left  bg-blue-500 text-white text-lg pl-12' >Resolved issue per day/month/year</h1>
            </div>
            <div className="flex space-x-5 justify-center items-center flex-col sm:flex-col md:flex-row space-y-3 sm:space-y-4 md:space-y-0 my-10">
                <div>
                    <input type="text" className="outline-none bg-gray-200 px-2 py-1 rounded-md text-center h-10 " defaultValue={new Date().toDateString()} />
                </div>
                <div className="flex flex-row space-x-3">
                    <h3 className="flex h-10 items-center justify-center px-6 py-2 bg-blue-500 rounded-md text-white text-sm  active:scale-95  cursor-pointer transition-transform duration-150 ease-in-out text-center hover:bg-blue-600">Daily</h3>
                    <h3 className="flex h-10 items-center justify-center px-6 py-2 bg-blue-500 rounded-md text-white text-sm  active:scale-95  cursor-pointer transition-transform duration-150 ease-in-out text-center hover:bg-blue-600">Weekly</h3>
                    <h3 className="flex h-10 items-center justify-center px-6 py-2 bg-blue-500 rounded-md text-white text-sm active:scale-95  cursor-pointer transition-transform duration-150 ease-in-out text-center hover:bg-blue-600">Monthly</h3>
                </div>
            </div>
            <div className='mx-auto'>
                <ChartTwo />
            </div>
        </div>
    )
}

export default Issu