import { useParams } from 'react-router-dom'
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

const Container = styled.div`

    main {
        border: 1px solid red;
        
        .images {
            img#preview {
                height: 60vh;
                border-radius: 1rem;
            }
            .others {
                img {
                    height: 3vw;
                    border-radius: 0.25rem;
                }
            }
        }


    }
`

export default function Showcase() {
    const { id } = useParams()

    return (
        <Container className='full col'>
            <h1>Some Deck</h1>
            <main className='fill center'>
                <div className='images'>
                    <img src={tempImage} id='preview' />
                    <div className='sep2 others'>
                        {job.images.map(src => <img src={src} /> )}
                    </div>
                </div>
                <Details job={job} />
            </main>
        </Container>
    )
}

const DetailsContainer = styled.div`
    display: flex col;
    padding-left: 2rem;

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

`


const Details = ({ job }) => {

    return (
        <DetailsContainer>
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
        </DetailsContainer>
    )
}