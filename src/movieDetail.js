import React from 'react';
import styled from 'styled-components';
import {useNavigate, useLocation} from 'react-router-dom'
import MovieState from './movieState.js'
import {motion} from 'framer-motion'
import { pageAnimation } from "./animations.js";

 const MovieDetail = ()=>{

    const location = useLocation()
    const url = location.pathname

   const [movies, setMovies] = React.useState(MovieState)
   const [movie, setMovie] = React.useState(null)

   React.useEffect(()=>{
        const currentMovie = movies.filter((item)=> item.url === url)
        setMovie(currentMovie[0])
   }, [movies, url])

    return (
        <>
        {movie &&
            <Details
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit='exit'
            >
                <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="" />
                </Headline>
                <Awards>
                    {movie.awards.map((item)=>{
                        return <Award
                        title = {item.title}
                        description = {item.description}
                        key = {item.title}
                        />
                    })}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="" />
                </ImageDisplay>
            </Details>
        }
        </>
    )
}

const Details = styled(motion.div)`
    color: white;

`

const ImageDisplay = styled.div`
    min-height: 50vh;
    width: 100%;

    img{
        width: 100%;
        object-fit: cover;
    }

`

const Headline = styled.div`

    min-height: 90vh;
    padding-top: 20vh;
    position: relative;


    @media screen and (max-width: 700px) {
        img{
            width: 100%;
        }
    }

    h2{
        position: absolute;
        top:10%;
        left :50%;
        transform: translate(-50%, -10%);


    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    @media screen and (max-width:800px) {
        margin: 5rem;
    }

    @media screen and (max-width:800px) {
        margin: 5rem 2rem;
    }


`

const AwardStyled = styled.div`
    padding: 1rem 10rem;

    @media screen and (max-width: 1200px) {
        padding: 1rem 5rem;
    }
    @media screen and (max-width: 970px) {
        padding: 1rem 1.8rem;
    }
    @media screen and (max-width: 870px) {
        padding: 1rem 1rem;
    }
    @media screen and (max-width: 800px) {
        padding: 1rem 0rem;
    }

    h3{
        font-size: 2rem;
        margin: 20px 0;
    }
  
    .line{
        width: 60%;
        background-color: #23d997;
        height: 0.5rem;
    }

    p{
        padding: 20px 0;
    }

  
`

const Award = ({title, description})=>{
    return (
        <AwardStyled>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyled>
    )
}

export default MovieDetail