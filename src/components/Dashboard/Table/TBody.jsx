import Tr from './Tr'
import { CommentTableApi } from './../../../Apis/FackTable';
import { useState } from 'react'
const TBody = () => {
    const [Data, setData] = useState(CommentTableApi)
    return (
        <tbody className='overflow-hidden h-12'>
            {
                Data && Data.map((tr, index) => {
                    return (
                        <Tr data={tr} key={index} />
                    )
                })
            }
        </tbody>
    )
}




export default TBody