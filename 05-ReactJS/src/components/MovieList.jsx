import MovieItem from './MovieItem'

const imgUrl = "https://images-na.ssl-images-amazon.com/images/I/51%2Bzb74v-TL.jpg"

const MovieList = ({items = []}) => {
    const genres = (genres = []) => {
        return genres.join(" ")
    }

    return (
        <>
            {items.map(item => 
                <MovieItem key={item.id} id={item.id} imageUrl={item.poster_path} title={item.title} genre={genres(item.genres)} releasedAt={item.release_date}></MovieItem>
            )}
        </>
    )
}

export default MovieList