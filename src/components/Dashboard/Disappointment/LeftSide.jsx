import PropTypes from 'prop-types'

const LeftSide = ({ title, src }) => {
    return (
        <div className='shadow-lg p-2 rounded w-full'>
            <h1 className='h-10 px-4 bg-gray-200 flex justify-center items-center rounded-md mb-2'>{title}</h1>
            <img src={src} alt="Not found" className="w-72 mx-auto sm:w-80 object-cover" />
        </div>
    )
}

LeftSide.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string
}
export default LeftSide