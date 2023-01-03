import React from 'react';
import athlete from '../img/athlete-small.png'
import theRacer from '../img/theracer-small.png'
import goodTimes from '../img/goodtimes-small.png'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { useScroll } from '../useScroll';
import { pageAnimation } from "../animations.js";
import {fade, photoAnim, lineAnim, slider} from '../animations.js'

export default function Work(){

    const [element, controls] = useScroll()
    const [element2, controls2] = useScroll()


    return (
        <StyledWork
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit='exit'

        >
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="Athelete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element} variants={fade} animate={controls} initial="hidden">
                <h2>The Racer</h2>
                <motion.div variants={lineAnim}  className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <img src={theRacer} alt="The Racer" />
                </Link>
            </Movie>
            <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/good-times'>
                    <img src={goodTimes} alt="GoodTimes" />
                </Link>
            </Movie>
        </StyledWork>
    )
}

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0;
        color:white;
    }
    @media screen and (max-width: 1150px) {
        padding: 1rem 5rem;
    }
    @media screen and (max-width: 770px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width: 770px) {
        padding: 1rem 3rem;
    }
    @media screen and (max-width: 750px) {
        padding: 0rem;
    }

`

const Movie = styled(motion.div)`
    padding-bottom:10rem ;

    @media screen and (max-width: 750px) {
        padding: 1rem;
    }


    .line{
        height: 0.3rem;
        background-color: #23d997;
        margin-bottom: 3rem; 
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

// !!! FRAME ANIMATION

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top:10%;
    width:100%;
    height: 100%;
    background-color:#fffebf ;
    z-index: 3;
`

const Frame2 = styled(Frame1)`
    background-color: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background-color: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background-color: #8effa0;
`