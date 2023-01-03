import React from "react";

// !!! Images and Icons

import time from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import {Hide, Image, Description, About} from './styles.js'
import styled from "styled-components";
import {fade} from '../animations.js'
import { useScroll } from "../useScroll";



// !! The End
export default function Services(){

    const [element, controls] = useScroll()

    return (
        <Service ref={element}variants={fade} animate={controls} initial="hidden">
            <Description1>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <Icon>
                            <img src={time} alt="" />
                            <h3>Efficient</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <Icon>
                            <img src={diaphragm} alt="" />
                            <h3>Diaphragm</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <Icon>
                            <img src={money} alt="" />
                            <h3>Affordable</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <Icon>
                            <img src={teamwork} alt="" />
                            <h3>Teamwork</h3>
                        </Icon>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description1>
            <Image>
                <img src={home2} alt="" />
            </Image>
        </Service>
    )
}

const Service = styled(About)`

    justify-content: center;


    h2{
        padding-bottom: 1rem;
    }

    p{
        width: 70%;
        padding: 1rem 0;
    }

    @media screen and (max-width: 1150px) {
        padding: 1rem 5rem;
        height: 80vh;
        margin:20px 0;
    }

    @media screen and (max-width: 950px){
        h2{
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 750px) {
        min-height: 100vh;
        display: block;
        align-items: center;        
    }

    @media screen and (max-width: 750px) {
        padding: 1rem 0rem;
    }


`
const Card = styled.div`

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

const Description1 = styled(Description)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 950px) {
        padding-right: 2rem;

        p{
            padding:10px 0;
        }
    }

`

const Icon = styled.div`
    display: flex;
    justify-content: flex-start;
    gap:10px;
    align-items: center;
    margin: 10px 0;
    padding: 0;

    @media screen and (max-width: 770px) {
        img{
            width: 20%;
        }
        h3{
            font-size: 1rem;
        }

        p{
            font-size: 0.8rem;
        }
    }

`
const Cards  = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    @media screen and (max-width: 950px) {
        margin-right: 0rem; 
    }
    @media screen and (max-width: 750px) {
        flex-direction: row;
    }


`