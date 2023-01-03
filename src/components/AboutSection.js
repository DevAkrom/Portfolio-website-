import React from "react";
import home1 from '../img/home1.png'
import {motion} from 'framer-motion'
import {Hide, Image, Description, About} from './styles.js'
import {titleAnim, fade, photoAnim} from '../animations.js'
import Wave from "../wave";
import styled from "styled-components";

export default function AboutSection(){
    return (
        <About>
            <div>
                <Description>
                    <motion.div className="title">
                        <Hide className="hide">
                            <motion.h2
                                variants={titleAnim}>
                                We work to make
                            </motion.h2> 
                        </Hide>
                        <Hide className="hide">
                            <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
                        </Hide>
                        <Hide className="hide">
                            <motion.h2 variants={titleAnim}>come true</motion.h2>
                         </Hide>
                    </motion.div>
                </Description>
                <motion.p variants={fade}>Contact us about any photography or <br /> videography ideas</motion.p>
                <Btn variants={fade}> Contact us</Btn>
            </div>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="" />
            </Image>
            <Wave/>
        </About>
    )
}


const Btn = styled(motion.button)`

    @media screen and (max-width:750px) {
        display: inline-block;
        margin-bottom: 20px;
    }

` 