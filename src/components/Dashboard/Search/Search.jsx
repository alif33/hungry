import { MicrophoneIcon } from "@heroicons/react/outline"

const Search = () => {
    return (
        <div className="mt-5 my-3 max-w-5xl mx-auto  flex justify-between sm:items-center flex-col sm:flex-row px-5 space-y-5 md:space-y-0 space-x-4">
            {/* Search */}
            <div className="searchBox w-full md:w-[300px]  py-2 px-4 rounded overflow-hidden shadow-md mx-auto sm:mx-0">
                <div className="flex  bg-gray-100 lg:w-max py-2.5 px-3 rounded-full space-x-2 shadow-md hover:bg-gray-200 cursor-pointer ">
                    <img src="/image/map.png" alt="map" className="h-6 cursor-pointer" />
                    <input type="text" className="bg-transparent outline-none w-full" placeholder="Google Search" />
                    <MicrophoneIcon className="h-6 cursor-pointer hover:text-green-500" />
                </div>
            </div>
            {/* Data */}
            <div className="flex  space-x-5 items-center flex-col sm:flex-col md:flex-row space-y-3 sm:space-y-4 md:space-y-0">
                <div>
                    <input type="text" className="outline-none bg-gray-200 px-2 py-1 rounded-md text-center h-10 " defaultValue={new Date().toDateString()} />
                </div>
                <div className="flex flex-row space-x-3">
                    <h3 className="flex h-10 items-center justify-center px-6 py-2 bg-blue-500 rounded-md text-white text-sm  active:scale-95  cursor-pointer transition-transform duration-150 ease-in-out text-center hover:bg-blue-600">Daily</h3>
                    <h3 className="flex h-10 items-center justify-center px-6 py-2 bg-blue-500 rounded-md text-white text-sm  active:scale-95  cursor-pointer transition-transform duration-150 ease-in-out text-center hover:bg-blue-600">Weekly</h3>
                    <h3 className="flex h-10 items-center justify-center px-6 py-2 bg-blue-500 rounded-md text-white text-sm active:scale-95  cursor-pointer transition-transform duration-150 ease-in-out text-center hover:bg-blue-600">Monthly</h3>
                </div>
            </div>
        </div>
    )
}

export default Search