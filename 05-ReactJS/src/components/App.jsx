import Search from './Search'
import MovieItem from './MovieItem'
import styled from 'styled-components'
import Panel from './Panel'
import ErrorBoundary from './ErrorBoundary'

const Container = styled.div`
    background: #353535;
    border-radius: 5px;
    width: 1000px;
    margin: 20px auto;
`
const Header = styled.div`
    font-size: 3em; 
    padding: 20px 0px 0px 20px;
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
        <ErrorBoundary>
            <Header>FIND YOUR MOVIE</Header>
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
        </ErrorBoundary>
    </Container>
)

export default App