import React, {useState, useEffect} from 'react'
import history from '../constants/history'
import styled from 'styled-components'

const Container = styled.div`
    display: inline-block;
    padding: 3px;
    margin: 20px 13px 30px 13px;
`

const Img = styled.img`
    width: 300px;
    padding: 0px 0xp 0px 0px;
`

const Poster = styled.div`
    float: left;
`
const Desc = styled.div`
    width: 600px;
    margin: 0px 0px 0px 50px;
    float:left;
    word-wrap: break-word;
`

const Container2 = styled.div`
    display: inline-block;
`

const Title = styled.div`
    font-size: 3em;
    float: left;
    padding: 0 20px 0 0;
    width: 400px;
`

const Rating = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid white;
    vertical-align: middle;
    text-align: center;
    display: table-cell;
    float: left auto;
    font-size: 1.5em;
    color: lightgreen;
`

const RedStyle = styled.span`
    color: red;
    font-size: 1.2em;
    padding: 0 5px 0 0;
`

const Movie = () => {
    const [hasMovie, setHasMovie] = useState(false)
    const [movie, setMovie] = useState(null)

    useEffect(()=>{
        const movieId = history.location.pathname.split("/")[2];

        if(movieId)
        {
            fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
                .then(response => response.json())
                .then(data => {
                    setMovie(data);
                    setHasMovie(true);
                })

        }
        
    }, [])

    const back = () => {
        history.goBack()
    }

    const year = (date) => {
        return (new Date(date)).getFullYear()
    }

    return (
        <Container>
            <p>
                <button onClick={back}>Back</button>
            </p>
            
               {!hasMovie? <h2>Movie not found</h2> : 
                (<section>
                    <Poster>
                        <Img src={movie.poster_path}></Img>
                    </Poster>
                    <Desc>
                        <Container2>
                            <Title>{movie.title}</Title>
                            <Rating>{movie.vote_average}</Rating>
                        </Container2>
                        <h3>{movie.tagline}</h3>
                        <section>
                            <RedStyle>{year(movie.release_date)}</RedStyle>year&nbsp;&nbsp;
                            <RedStyle>{movie.runtime? movie.runtime: "Unknown"}</RedStyle>min
                        </section>
                        <p>
                            {movie.overview}
                        </p>
                    </Desc>
                </section>
                )
               
               }
            
            
        </Container>
    )
}
    
export default Movie