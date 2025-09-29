import { useParams } from 'react-router-dom'


export default function JobDetails() {
    const { id } = useParams()

    return (
        <div className='full center'>
            <h1>Job {id}</h1>
        </div>
    )
}