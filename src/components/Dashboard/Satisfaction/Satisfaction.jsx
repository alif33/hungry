import LeftSide from "../Disappointment/LeftSide"
import Items from './../Disappointment/Items';

export const Satisfaction = () => {
    return (
        <div className='max-w-4xl mx-auto mt-10 mb-5'>
            <div className='flex justify-between flex-col md:flex-row lg:flex-row space-y-5 md:space-y-0 lg:space-y-0 px-5 md:space-x-5 '>
                <LeftSide title="Products you customers like " src={'/image/improve.png'} />

                <div className='p-2  rounded shadow-lg w-full'>
                    <h1 className='h-10 px-4 bg-gray-200 flex justify-center items-center rounded-md mb-2 '>Score of satisfaction per product</h1>
                    <div>
                        <div className="grid grid-cols-2 gap-2">
                            <h1 className="h-10 flex items-center justify-center bg-gray-200 rounded-md">Keywords</h1>
                            <h1 className="h-10 flex items-center justify-center bg-gray-200 rounded-md">Percente</h1>
                        </div>
                        <Items name="Food" percent={40} blue={true} />
                        <Items name="Coffee" percent={20} blue={true} />
                        <Items name="Cappuccino" percent={30} blue={true} />
                        <Items name="room" percent={30} blue={true} />
                    </div>
                </div>
            </div>
            <div className='flex items-center space-x-5 mt-10'>
                <img src="/image/happy.png" alt="happy" className='w-16' />
                <h1 className='text-blue-500 text-lg'>Our customers are happy with
                    these please keep improving</h1>
            </div>
        </div>
    )
}
