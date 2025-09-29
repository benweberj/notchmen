import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../components/Logo'


export default function Home() {
    const [active, setActive] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 1000)
    }, [])

    return <div className='full center col'>
        <Logo active={active} />
        <motion.p
            className='upper thin'
            style={{ fontSize: `max(14px, 2vw)` }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: 1, delay: 2, type: 'spring' }}
        >
            Custom Decks & Outdoor Living
        </motion.p>
        <Link to='/gallery'>
            <motion.button
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -20 }}
                transition={{ duration: 1, delay: 2.5, type: 'spring' }}
            >Gallery</motion.button>
        </Link>
    </div>
}