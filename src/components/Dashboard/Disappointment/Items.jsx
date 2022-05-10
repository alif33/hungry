import PropTypes from 'prop-types'

const Items = ({ name, percent, blue, red }) => {
    return (
        <div className="grid grid-cols-2 p-2 mt-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <h1>{name}</h1>
            <div className="w-full bg-gray-200 rounded-md dark:bg-gray-200">
                <div className={`${blue && "bg-blue-600"} ${red && "bg-red-600"} text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded h-full flex justify-center items-center`} style={{ width: `${percent}%` }}>{percent}% </div>
            </div>
        </div>
    )
}
Items.propTypes = {
    name: PropTypes.string,
    percent: PropTypes.number
}
export default Items