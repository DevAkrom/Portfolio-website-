import React from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export function useScroll(){

    const controls = useAnimation()
    const [element, view] = useInView({threshold:0.5})
    if(view){
        controls.start('show')
    }else{
        controls.start('hidden')
    }

    return [element, controls]

}