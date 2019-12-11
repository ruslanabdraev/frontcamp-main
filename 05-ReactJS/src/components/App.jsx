import Search from './Search'
import styled from 'styled-components'
import Panel from './Panel'
import ErrorBoundary from './ErrorBoundary'
import MovieList from './MovieList'

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

const App = () => (
    <Container>
        <ErrorBoundary>
            <Header>FIND YOUR MOVIE</Header>
            <Search onSearch={onSearch} />
            <Panel movieCount={10} onSort={onSort} />
            <MovieList />
        </ErrorBoundary>
    </Container>
)

export default App