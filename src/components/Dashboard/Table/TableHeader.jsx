
const TableHeader = () => {
    return (
        <div className=" flex items-center justify-between pb-6 flex-col sm:flex-col md:flex-row lg:flex-row space-y-4 sm:space-y-4 ">
            <div>
                <h2 className="text-gray-600 font-semibold">Comment's</h2>
                <span className="text-xs">List off all comments overtime</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex bg-gray-50 items-center p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd" />
                    </svg>
                    <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="... Search by key words" />
                </div>
                <div className="lg:ml-40 ml-10 space-x-8">
                    <button className="bg-blue-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer active:scale-95">Positive</button>
                    <button className="bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer active:scale-95">Negitive</button>
                </div>
            </div>
        </div>
    )
}

export default TableHeader