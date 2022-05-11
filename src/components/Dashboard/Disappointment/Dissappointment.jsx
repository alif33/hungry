import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Dissappointment = () => {
    return (
        <>
            <div className='max-w-5xl mx-auto mt-10 mb-5 p-2 md:p-0'>
                <div className='flex justify-between flex-col md:flex-row lg:flex-row space-y-5 md:space-y-0 lg:space-y-0 px-5 md:space-x-5 '>
                    <LeftSide title="Product You need to imporve" src={'/image/improve.png'} />
                    <RightSide title="Score of disappointment per product" />
                </div>
                <div className='flex items-center space-x-5 mt-10'>
                    <img src="/image/sad.png" alt="sad" className='w-16' />
                    <h1 className='text-red-500 text-lg'>Please fix these things </h1>
                </div>
            </div>
        </>
    )
}

export default Dissappointment