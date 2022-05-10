const TPagination = () => {
    return (
        <div
            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span className="text-xs xs:text-sm text-gray-900">
                Showing 1 to 4 of 50 Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button
                    className="text-sm text-indigo-50 transition duration-150 hover:bg-blue-500 bg-blue-600 font-semibold py-2 px-4 rounded-l active:scale-95">
                    Prev
                </button>
                &nbsp; &nbsp;
                <button
                    className="text-sm text-indigo-50 transition duration-150 hover:bg-blue-500 bg-blue-600 font-semibold py-2 px-4 rounded-r active:scale-95">
                    Next
                </button>
            </div>
        </div>
    )
}



export default TPagination