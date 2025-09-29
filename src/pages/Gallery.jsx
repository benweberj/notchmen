import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const tempImage = 'https://www.flooringinc.com/media/magefan_blog/2024/04/Woodendeck-GettyImages-912332782-2473b41993164927aa6605cf13f6cacf.jpg'

const job = {
    id: 'kaiser',
    thumbnail: tempImage,
    images: [
        tempImage, tempImage, tempImage, tempImage, tempImage
    ],
    city: 'San Antonio',
    state: 'TX',
    type: 'Deck',
    sqft: 1700,
    duration: '2 months'
}

const jobs = Array.from({length: 8}, (_, i) => ({...job, id: i }))



const StyledGallery = styled.div`

    padding-top: 5rem;


    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    .entry {
        .thumbnail {
            width: 100%;
            // width: 30vw;
            height: 20vw;
            background: #5b9bea;
            border-radius: .5rem;
        }

        .info {
            padding-left: 1rem;

            .item {
                display: flex;
                align-items: center;
                margin-bottom: 2vh;

                .icon {
                    width: 20px;
                    // height: 20px;
                    margin-right: 1rem;
                }

                p {
                    font-size: .9rem;
                    white-space: nowrap;
                    font-weight: 200;
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        .entry .thumbnail {
            height: 30vw;
        }
    }

    @media screen and (max-width: 700px) {
        .entry {
            flex-direction: column;
            margin-bottom: 2rem;

            .thumbnail {
                height: 80vmin;
                margin-bottom: 1rem;
            }
        }
    }
`

export default function Gallery() {
    const [viewing, setViewing] = useState(false)



    return (
        <StyledGallery className=''>
            {jobs.map(job => (
                <Overview job={job} />
            ))}
        </StyledGallery>
    )
}


const Overview = ({ job }) => {
    let navigate = useNavigate()

    return (
        <div className='entry flex'>
            <img src={job.thumbnail} className='thumbnail' alt='Job thumbnail' />
            <div className='info'>
                <div className='item'>
                    <img src={'/img/location.png'} className='icon' alt='' />
                    <p>{job.city}, {job.state}</p>
                </div>
                <div className='item'>
                    <img src={`/img/${job.type.toLowerCase()}.png`} className='icon' alt='' />
                    <p>{job.type}</p>
                </div>
                <div className='item'>
                    <img src={'/img/sqft.png'} className='icon' alt='' />
                    <p>{job.sqft} sq/ft</p>
                </div>
                <div className='item'>
                    <img src={'/img/duration.png'} className='icon' alt='' />
                    <p>{job.duration}</p>
                </div>

                <button onClick={() => navigate(`/gallery/${job.id}`)}>See more</button>
            </div>
        </div>
    )
}