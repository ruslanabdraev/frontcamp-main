import MovieItem from './MovieItem'

const imgUrl = "https://images-na.ssl-images-amazon.com/images/I/51%2Bzb74v-TL.jpg"

const MovieList = () => {
    return (
        <>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
            <MovieItem imageUrl={imgUrl} title={"Star Wars"} genre={"Genre 1"} releasedAt={1977}></MovieItem>
        </>
    )
}

export default MovieList