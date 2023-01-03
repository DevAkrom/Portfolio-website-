import React from 'react'
import styled from 'styled-components'
import {About} from './styles.js'
import Toggle from '../toggle.js'
import { AnimateSharedLayout } from 'framer-motion'
import {fade} from '../animations.js'
import { useScroll } from "../useScroll";

export default function FaqSection(){

    const [element, controls] = useScroll()

    return (
        <FAQ ref={element}variants={fade} animate={controls} initial="hidden">
            <h2>Any questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How do I start">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eius!</p>
                    </div>  
            </Toggle>
            <Toggle title = "Daily Schedule">
                <div className="answer">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eius!</p>
                </div>
            </Toggle>
            <Toggle title = "Different payment methods">
                <div className="answer">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eius!</p>
                </div>
            </Toggle>
            <Toggle title = "What products do we offer?">
                <div className="answer">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eius!</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </FAQ>
    )
}

const FAQ = styled(About)`

    display: block;

    span{
        display: block;
    }

    h2{
        padding-bottom: 20px;
    }

    p{
        padding: 20px 0;
    }

    h4{
        font-size: 1.5rem;
        font-weight: 500;
    }

    @media screen and (max-width: 1150px) {
        padding: 1rem 5rem;
        height: 90vh;
    }

    @media screen and (max-width: 770px) {
        padding: 1rem 3rem;
    }
    @media screen and (max-width: 750px) {
        padding: 1rem 1rem;
        min-height: 50vh;
    }


    .faq-line{
        height: 2px;
        width:100%;
        background-color: #ccc;
        margin-bottom: 20px;
    }

    
`