import React from 'react'
import {motion} from 'framer-motion'
import { pageAnimation, titleAnim } from "../animations.js";
import styled from 'styled-components'
import { IconContext } from 'react-icons';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


export default function ContactUs(){
    return (
        <ContactStyled
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="contact">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch with us</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                   <Social variants={titleAnim}>
                        <Circle>
                            <IconContext.Provider value={{className: "icon" }}>
                                    <BsFacebook />
                            </IconContext.Provider>
                        </Circle>
                        <h2>Send us a message</h2>
                    </Social> 
                </Hide>
            </div>
            <div>
                <Hide>
                   <Social variants={titleAnim}>
                        <Circle>
                            <IconContext.Provider value={{className: "icon" }}>
                                    <BsTwitter />
                            </IconContext.Provider>
                        </Circle>
                        <h2>Tweet us</h2>
                    </Social> 
                </Hide>
            </div>
            <div>
                <Hide>
                   <Social variants={titleAnim}>
                        <Circle>
                            <IconContext.Provider value={{className: "instag" }}>
                                    <BsInstagram />
                            </IconContext.Provider>
                        </Circle>
                        <h2>Follow us</h2>
                    </Social> 
                </Hide>
            </div>
            <div>
                <Hide>
                   <Social variants={titleAnim}>
                        <Circle>
                            <IconContext.Provider value={{className: "email" }}>
                                    <MdEmail />
                            </IconContext.Provider>
                        </Circle>
                        <h2>Send us an email</h2>
                    </Social> 
                </Hide>
            </div>
        </ContactStyled>
    )
}

const ContactStyled = styled(motion.div)`
    padding: 2rem 10rem;
    color:white;
    min-height: 90vh;

    @media screen and (max-width: 1150px) {
        padding: 1rem 5rem;
    }
    @media screen and (max-width: 770px) {
        padding: 1rem 3rem;
    }
    @media screen and (max-width: 750px) {
        padding: 1rem 4rem;
        h2{
            font-size: 40px;
        }
    }

`

const Title = styled.div`
    margin-bottom: 4rem 1rem;
    color:white;
`

const Hide = styled.div`
    overflow: hidden;
`

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: white;
    color:black;

    .icon{
        font-size: 2rem;
        color: #0077b6;
    }

    .instag{
        font-size: 2rem;
        color: #cc444b
    }

    .email{
        font-size: 2rem;
        color:#03071e;
    }

    @media screen and (max-width: 750px) {
        width: 2rem;
        height: 2rem;

        .icon, .instag, .email{
            font-size: 1rem;
        }
    }
    
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;

    h2{
        margin: 2rem;
        font-size: 2rem;
    }

    @media screen and (max-width: 1360px){
        h2{
            font-size: 1.6rem;
        }
    }

    @media screen and (max-width: 750px) {
        h2{
            font-size: 25px;
            margin: 20px;
        }
    }
`