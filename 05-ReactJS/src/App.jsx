import styled from 'styled-components'
import ErrorBoundary from './components/ErrorBoundary'
import history from './constants/history'
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Movie from './pages/Movie'

const Container = styled.div`
    background: #353535;
    border-radius: 5px;
    width: 1000px;
    min-height: 1000px;
    padding: 20px;
    margin: 20px auto;
`

const App = () => (
    <Container>
            <Router history={history}>
                <Switch>
                    <Route exact path={"/"} component={Home}></Route>
                    <Route path={"/movie"} component={Movie}></Route>
                    <Route path={"/movie/:id"} component={Movie}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </Router>
    </Container>
)

export default App