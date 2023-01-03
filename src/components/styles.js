import styled from 'styled-components'
import {motion} from 'framer-motion'

export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 10rem;
    color:white;

    @media screen and (max-width: 1150px) {
        padding: 1rem 5rem;
        height: 90vh;
    }

    @media screen and (max-width: 770px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width: 750px) {
        padding : 1rem 0;
        min-height: 100vh;
        display: block;
        align-items: center;
        overflow: hidden;

        div{
            text-align: center;
            margin: 0 auto;
            padding: 0;
        }

        p{
            padding: 20px;
        }

        img{
            z-index: 3;
        }

        svg{
            z-index: 1;
        }
    }

    `;

export const Description = styled.div`
    flex:1;
    padding-right: 5rem;
    z-index: 2;

    h2{
        font-weight: lighter;
    }

`

export const Image =  styled.div`
    overflow: hidden;
    z-index: 2;

    img{
        width: 100%;
        height: 90vh;
        object-fit: cover;
    }

    @media screen and (max-width: 1150px) {
        img{
            height: 80vh;
        }
    }

    @media screen and (max-width: 950px) {
        img{
            height: 70vh;
        }
    }

    @media screen and (max-width:830px){
        img{
            height: 60vh;
            /* width:80%; */
        }
    }
    @media screen and (max-width:750px){
        margin: 10px 0 ;
    }

`;

export const Hide = styled.div`
overflow: hidden;
`
