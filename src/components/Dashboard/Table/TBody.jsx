import Tr from './Tr'
import { CommentTableApi } from './../../../Apis/FackTable';

const TBody = () => {
    return (
        <tbody>
            {
                CommentTableApi.map((tr, index) => {
                    return (
                        <Tr data={tr} key={index} />
                    )
                })
            }

        </tbody>
    )
}

export default TBody