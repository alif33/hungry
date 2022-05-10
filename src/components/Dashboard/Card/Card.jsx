import React from 'react'
import SingleCard from './SingleCard';
import { ChatAlt2Icon, ExclamationIcon, PresentationChartBarIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const Card = () => {
    return (
        <div className='max-w-5xl mx-auto p-3'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-5'>
                <SingleCard number={100} title={"Comment"} Icon={<ChatAlt2Icon className='h-16 md:h-12 text-yellow-500' />} />
                <SingleCard number={"21.11%"} title={"Positive Rate"} Icon={<PresentationChartBarIcon className='h-16 md:h-12 text-green-500' />} />
                <SingleCard number={2} title={"Global Rating"} star={<div className='flex space-x-1 items-center'>
                    <StarIcon className='h-8 md:h-4 ' />
                    <StarIcon className='h-8 md:h-4' />
                    <StarIcon className='h-8 md:h-4' />
                    <StarIcon className='h-8 md:h-4' />
                    <StarIcon className='h-8 md:h-4' />
                </div>} />
                <SingleCard number={"Not Enough"} title={"Client Satisfaction"} Icon={<ExclamationIcon className=' h-16 md:h-12 text-red-500' />} />
            </div>
        </div>
    )
}

export default Card