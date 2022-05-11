import React from 'react'
import TopTitle from './TopTitle'
import LeftSide from './../Disappointment/LeftSide';
import List from './List';

const PopularKey = () => {
    return (
        <div className=''>
            <TopTitle />
            <div className='p-2 max-w-5xl mx-auto flex   justify-center my-10 space-y-5 md:space-y-0  md:space-x-5 flex-col md:flex-row lg:flex-row'>
                <LeftSide src='/image/improve.png' title='Popular Keywords Cloud' />
                <div className='w-full p-2 shadow-lg rounded-md'>
                    <h1 className='h-10 mx-auto flex items-center justify-center bg-gray-200 rounded-lg'>Popular keywords List</h1>
                    <div className='mt-2'>
                        <div className='flex justify-between items-center h-12 px-2 rounded  bg-blue-500 text-white'>
                            <h1>ID</h1>
                            <h1>Sentiment</h1>
                            <h1>Date</h1>
                            <h1>Keywords</h1>
                        </div>
                        <div className='h-52 overflow-y-auto'>
                            <List keyword="Pizza" date={new Date().toDateString()} id={1} sentiment={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularKey