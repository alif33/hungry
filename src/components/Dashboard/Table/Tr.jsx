import PropTypes from 'prop-types'

const Tr = (props) => {
    const { sno, sentiment, date, keywords } = props.data
    return (
        <tr  >
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{sno}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className={`text-gray-900 whitespace-no-wrap `}>{sentiment}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap ">
                    {date}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {keywords}
                </p>
            </td>

        </tr>
    )
}
Tr.propTypes = {
    sno: PropTypes.number,
    sentiment: PropTypes.string,
    date: PropTypes.string,
    keywords: PropTypes.string
}
export default Tr