import Items from "./Items";

export default function RightSide({ title }) {
    return (
        <div className='p-2  rounded shadow-lg w-full'>
            <h1 className='h-10 px-4 bg-gray-200 flex justify-center items-center rounded-md mb-2 '>{title}</h1>
            <div>
                <div className="grid grid-cols-2 gap-2">
                    <h1 className="h-10 flex items-center justify-center bg-gray-200 rounded-md">Keywords</h1>
                    <h1 className="h-10 flex items-center justify-center bg-gray-200 rounded-md">Percente</h1>
                </div>
                <Items name="Food" percent={40} red={true} />
                <Items name="Coffee" percent={20} red={true} />
                <Items name="Cappuccino" percent={30} red={true} />
                <Items name="room" percent={30} red={true} />
            </div>
        </div>
    )
}
