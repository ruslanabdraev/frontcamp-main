import MovieItem from './MovieItem'
import styled from 'styled-components'

const NotFound = styled.div`
    font-size: 2em; 
    margin: 20px;
    text-align: center;
`

const MovieList = ({items = []}) => {
    const genres = (genres = []) => {
        return genres.join(" ")
    }

    return (
        <>
            {
                items.length !== 0 ? items.map(item => 
                    <MovieItem key={item.id} id={item.id} imageUrl={item.poster_path} title={item.title} genre={genres(item.genres)} releasedAt={item.release_date}></MovieItem>
                ): <NotFound>No movies found</NotFound>
            }
        </>
    )
}

export default MovieList