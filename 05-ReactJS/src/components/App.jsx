import Search from './Search'
import MovieItem from './MovieItem'
import styled from 'styled-components'

const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
`

const onSearch = (searchValue) => {
    console.log(searchValue)
}

const imgUrl = "https://images-na.ssl-images-amazon.com/images/I/51%2Bzb74v-TL.jpg"

const App = () => (
    <Container>
        <Search onSearch={onSearch}></Search>
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

    </Container>
)

export default App