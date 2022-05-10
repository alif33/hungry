import React from 'react'
import Header from '../Header/Header'
import Card from './Card/Card'
import ChartOne from './Chart/ChartOne'
import Search from './Search/Search'
import ChartTwo from './Chart/ChartTwo';
import { ChartThree } from './Chart/ChartThree'

const Dashboard = () => {
    return (
        <>
            {/* Header */}
            <Header />
            <main className='w-full '>
                {/* Card box */}
                <Card />
                {/* Google search */}
                <Search />
                {/* pai chart */}
                {/* <div> */}
                <div className='flex sm:flex-row flex-col mx-auto mt-10 my-2 '>
                    <ChartOne />
                    {/* <ChartTwo /> */}
                    <ChartThree />
                </div>
                {/* </div> */}
            </main>
        </>
    )
}

export default Dashboard