import TableHeader from './TableHeader'
import TBody from './TBody'
import THead from './THead'
import TPagination from './TPagination'

const Table = () => {
    return (
        <>
            <div className="bg-white p-8 rounded-md max-w-4xl mx-auto mt-10">
                <TableHeader />
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto overflow-y-auto  ">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal ">
                                <THead />
                                <TBody />
                            </table>
                        </div>
                    </div>
                    <TPagination />

                </div>
            </div>
        </>

    )
}

export default Table