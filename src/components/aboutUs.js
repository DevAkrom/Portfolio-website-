import React from "react";
import About from './AboutSection.js'
import Services from './services.js'
import FaqSection from './faqSection.js'
import {motion} from 'framer-motion'
import { pageAnimation } from "../animations.js";

export default function AboutUs(){
    return (
        <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit='exit'
        className="aboutPages">
            <About/>
            <Services/>
            <FaqSection/>
        </motion.div>
    )
}
