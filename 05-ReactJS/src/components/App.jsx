import Search from './Search'
import MovieItem from './MovieItem'
import styled from 'styled-components'
import Panel from './Panel'

const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
`

const onSearch = (searchValue, option) => {
    console.log(`Serch value: ${searchValue}, option: ${option}`)
}

const onSort = (option) => {
    console.log("Sort by: ", option)
}

const imgUrl = "https://images-na.ssl-images-amazon.com/images/I/51%2Bzb74v-TL.jpg"

const App = () => (
    <Container>
        <h2>FIND YOUR MOVIE</h2>
        <Search onSearch={onSearch}></Search>
        <Panel onSort={onSort}></Panel>
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