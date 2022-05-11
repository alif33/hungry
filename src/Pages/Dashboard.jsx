import React from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Dashboard/Card/Card'
import ChartOne from '../components/Dashboard/Chart/ChartOne'
import Search from '../components/Dashboard/Search/Search'
import ChartTwo from '../components/Dashboard/Chart/ChartTwo';
import { ChartThree } from '../components/Dashboard/Chart/ChartThree'
import Table from '../components/Dashboard/Table/Table'
import Dissappointment from '../components/Dashboard/Disappointment/Dissappointment'
import { Satisfaction } from '../components/Dashboard/Satisfaction/Satisfaction'
import Issu from '../components/Dashboard/Issu/Issu'
import PopularKey from '../components/Dashboard/Popular-Key/PopularKey'
import Footer from '../components/Footer/Footer'

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
                <PopularKey />
                <hr className='shadow ' />

                {/* disappointment product*/}
                <Dissappointment />
                <hr className='shadow ' />

                {/* atisfaction per product */}
                <Satisfaction />
                <hr className='shadow ' />
                {/* Issu */}
                <Issu />

            </main>
            <Footer />
        </>
    )
}

export default Dashboard