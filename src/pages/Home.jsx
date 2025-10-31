
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

import Logo from '../components/Logo'

import styled from 'styled-components'
import { motion } from 'framer-motion'


export default function Home() {
    const [active, setActive] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 500)
    }, [])

    return (

        <div className='full center col'>
            <Backdrop />

            {/* <Music /> */}
            {/* <Deckboards /> */}
            {/* <audio src='/theme.mp3' autoPlay loop /> */}

            <div>
                <motion.h6
                    className='thin'
                    style={{ color: '#FfD399', transformOrigin: 'left center' }}
                    initial={{ opacity: 0, x: 20, y: 20, scaleX: 1.2 }}
                    animate={{ opacity: 1, x: 0, scaleX: 1 }}
                    transition={{ duration: .5, delay: 1.5, type: 'tween' }}
                >
                    Where beauty meets resilience
                </motion.h6>
                
                <Logo active={active} />

                <div className='flex wrap'>
                    <motion.button 
                        className='secondary mr2'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.75, type: 'spring' }}
                    >Browse our gallery</motion.button>
                    <motion.button
                        className='primary'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, type: 'spring' }}
                    >Start your project</motion.button>
                </div>
            </div>
            
            <Glazing />
        </div>
    )
}

const glazes = [
    'Always on time',
    'Free site visits',
    'Transparent pricing',
    'Custom Designs',
    'Collaborative process',
    'Consistent communication',
    'No corners cut',
    'Daily clean-up',
    'Perfect finish guaranteed'
]


const GlazeContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 100dvw;
    overflow: hidden;
    padding-block: 2rem;
    background: linear-gradient(0deg, #0008, #0000);

    .glazeList {
        list-style-type: none;
        display: flex;
        gap: 4rem; /* when you change this, must half it and update scroll animation */
        width: max-content;
        
        flex-wrap: nowrap;
        animation: scroll 40s linear infinite;


        li {
            color: #ffd399;
            white-space: nowrap;
            font-weight: 300;
        }
    }

    @keyframes scroll {
        to {
            transform: translate(calc(-50% - 2rem));
        }
    }
`

const Glazing = () => {
    const doubled = [...glazes, ...glazes]
    return (
        <GlazeContainer>
            <ul className='glazeList'>
                {doubled.map((g, i) => (
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: .5, y: 0 }} transition={{ delay: i*.5, duration: 1 }}>{g}</motion.li>
                ))}
            </ul>

        </GlazeContainer>
    )
}



const MusicIcon = styled.img`
    width: 1.25rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    transition: all 0.25s ease;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.8);
    }
`

const audio = new Audio('/theme.mp3');

const Music = () => {
    const [playing, setPlaying] = useState(false)


    useEffect(() => {
        if (playing) {
            audio.play()
        } else {
            audio.pause()
        }
    }, [playing])

    useEffect(() => {
        audio.loop = true;
        
        return () => {
            audio.pause()
        }
    }, [])

    return (
        <MusicIcon onClick={() => setPlaying(p => !p)} src={`/img/${playing ? 'playing' : 'mute'}.png`} />
    )
}



// Classy video of us strutting our shit across our decks
const Backdrop = () => (
    <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: .2 }}
        transition={{ duration: 2, delay: .25 }}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: -2,
            pointerEvents: 'none'
        }}
    >
        <source src="/vid/bg.mp4" type="video/mp4" />
    </motion.video>
)







const _Deckboards = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    // opacity: 0.44;

    img {
        height: 100dvh;
        
    }
`


function Deckboards() {
    return <_Deckboards>
        {Array.from({length: 41}, (_, i) => (
            <motion.img
                src='/img/deckboard.png'
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: i * 0.05, type: 'spring' }}
            />
        ))}
    </_Deckboards>
}