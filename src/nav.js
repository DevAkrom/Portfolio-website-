import React from 'react';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom'
export default function Nav(){
    return (
        <StyledNav>
            <h1><Link to='/'>Capture</Link></h1>
            <ul>
                <li><Link to="/">1. About us</Link></li>
                <li><Link to="/work">2. Our work</Link></li>
                <li><Link to="/contact">3. Contact us</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 1150px) {
        padding: 1rem 5rem;
    }
    @media screen and (max-width: 770px) {
        padding: 1rem 3rem;

        a{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 700px) {
        padding: 1rem;
        flex-direction: column;
        gap:30px

        a{
            font-size: 18px;
        }
    }

    @media screen and (max-width:500px){
        ul{
            display: flex;
            flex-direction: column;
        }
    }



    h1, h1 a{
        font-family: 'Lobster', sans-serif;
        font-size: 1.8rem;
        letter-spacing: 3px;
    }

    ul{
        display: flex;
        list-style: none;

        li{
            padding: 0 15px;
        }
    }

    a{
        color: white;
        border: none;
        text-decoration: none;
        transition: 0.3s all ease;
    }

    a:hover{
        color:#23d997;
    }

`