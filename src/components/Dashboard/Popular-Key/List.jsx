import React from 'react'
import PropTypes from 'prop-types'
const List = ({ keyword, date, sentiment, id }) => {
    return (
        <div className='flex justify-between items-center h-12 px-2 hover:bg-blue-200 transition-transform duration-200 ease-in-out cursor-pointer rounded'>
            <h1>{id}</h1>
            <h1 className={`font-bold ${sentiment && "text-blue-600"} ${!sentiment && "text-red-600"}`}>{sentiment && "Positive"} {!sentiment && "Negative"} </h1>
            <h1>{new Date().toDateString()}</h1>
            <h1>Pizza</h1>
        </div >
    )
}

List.propTypes = {
    keyword: PropTypes.string,
    date: PropTypes.string,
    sentiment: PropTypes.bool,
    id: PropTypes.number
}


export default List