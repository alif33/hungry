import React from 'react'
import Header from '../Header/Header'
import Card from './Card/Card'
import ChartOne from './Chart/ChartOne'
import Search from './Search/Search'
import ChartTwo from './Chart/ChartTwo';
import { ChartThree } from './Chart/ChartThree'
import Table from './Table/Table'
import Dissappointment from './Disappointment/Dissappointment'
import { Satisfaction } from './Satisfaction/Satisfaction'

const Dashboard = () => {
    return (
        <>
            {/* Header */}
            <Header />
            <main className='w-full '>
                {/* Card box */}
                <Card />
                <hr className='shadow ' />
                {/* Google search */}
                <Search />
                {/* pai chart */}
                <div className='flex sm:flex-row flex-col mx-auto mt-10 my-2 '>
                    <ChartOne />
                    {/* <ChartTwo /> */}
                    <ChartThree />
                </div>
                <hr className='shadow ' />
                {/* table */}
                <Table />
                <hr className='shadow ' />

                {/* Popular keyword */}
                {/* disappointment product*/}
                <Dissappointment />
                <hr className='shadow ' />

                {/* atisfaction per product */}
                <Satisfaction />
                <hr className='shadow ' />

            </main>
        </>
    )
}

export default Dashboard