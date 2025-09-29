// import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100dvw;
    // background: #0001;
    padding: 1rem 4vw;

    #logo {
        height: 1rem;
    }

    nav {
        span {
            cursor: pointer;
        }
    }
`

export default function Header() {
    const navigate = useNavigate()

    return (
        <StyledHeader>
            <img
                src='/logo.png'
                alt='Notchmen logo'
                id='logo'
                onClick={() => navigate('/')}
            />
            <nav className='center sep-x5'>
                <span onClick={() => navigate('/gallery')}>Gallery</span>
                <span onClick={() => navigate('/about')}>About Us</span>
                <span onClick={() => navigate('/contact')}>Contact</span>
                <span onClick={() => navigate('/reviews')}>Reviews</span>
            </nav>
        </StyledHeader>
    )
}