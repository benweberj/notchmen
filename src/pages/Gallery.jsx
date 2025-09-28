import styled from 'styled-components'


const jobs = [
    {
        id: 'kaiser',
        thumbnail: '',
        images: [],
        city: 'San Antonio',
        state: 'TX',
        type: 'Deck',
        sqft: 1700,
        duration: '2 months'
    },
    {
        id: 'kaiser',
        thumbnail: '',
        images: [],
        city: 'San Antonio',
        state: 'TX',
        type: 'Deck',
        sqft: 1700,
        duration: '2 months'
    },
    {
        id: 'kaiser',
        thumbnail: '',
        images: [],
        city: 'San Antonio',
        state: 'TX',
        type: 'Deck',
        sqft: 1700,
        duration: '2 months'
    },
    {
        id: 'kaiser',
        thumbnail: '',
        images: [],
        city: 'San Antonio',
        state: 'TX',
        type: 'Deck',
        sqft: 1700,
        duration: '2 months'
    },
    {
        id: 'kaiser',
        thumbnail: '',
        images: [],
        city: 'San Antonio',
        state: 'TX',
        type: 'Deck',
        sqft: 1700,
        duration: '2 months'
    }
]

const _Gallery = styled.div`

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

                img {
                    height: 20px;
                    padding-right: 1rem;
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
    return (
        <_Gallery className=''>
            {jobs.map(job => (
                <Overview job={job} />
            ))}
        </_Gallery>
    )
}


const Overview = ({ job }) => {
    return (
        <div className='entry flex'>
            <img src={job.thumbnail} className='thumbnail' />
            <div className='info'>
                <div className='item'>
                    <img src={'/img/location.png'} className='icon' />
                    <p>{job.city}, {job.state}</p>
                </div>
                <div className='item'>
                    <img src={`/img/${job.type}.png`} className='icon' />
                    <p>{job.type}</p>
                </div>
                <div className='item'>
                    <img src={'/img/sqft.png'} className='icon' />
                    <p>{job.sqft} sq/ft</p>
                </div>
                <div className='item'>
                    <img src={'/img/duration.png'} className='icon' />
                    <p>{job.duration}</p>
                </div>

                <button>See more</button>
            </div>
        </div>
    )
}