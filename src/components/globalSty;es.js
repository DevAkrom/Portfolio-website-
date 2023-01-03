import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

.App{
    max-width: 1500px;
    margin: 0 auto;
    overflow: hidden;
}


body{
    background-color: #1b1b1b;

    h2{
        font-weight: lighter;
        font-size: 3rem;
    }

    h3{
        color: white;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 120%;
    }

    h4{
        font-weight: bold;
    }

    span{
        font-weight: bold;
        color: #23d997;
    }

    @media screen and (max-width: 1360px) {
        h2{
            font-size: 2.5rem;
        }
        p{
            font-size: 1rem;
        }

        button{
            font-size: 1rem;
        }
    }
    @media screen and (max-width: 1200px) {
        h2{
            font-size: 2rem;
        }
        p{
            font-size: 0.9rem;
        }

        button{
            font-size: 0.9rem;
        }
    }


}

button{
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all ease 0.5s;

    &:hover{
        background-color: #23d997;
        color: white;
    };

}

.question{
    margin:50px 0 ;
    cursor: pointer;
}


`


export default Globalstyles