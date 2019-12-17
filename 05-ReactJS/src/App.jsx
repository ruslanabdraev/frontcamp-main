import styled from 'styled-components'
import ErrorBoundary from './components/ErrorBoundary'
import history from './constants/history'
import { Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Movie from './pages/Movie'
import { Provider } from 'react-redux'

const Container = styled.div`
    background: #353535;
    border-radius: 5px;
    width: 1000px;
    min-height: 1000px;
    padding: 20px;
    margin: 20px auto;
`

const App = ({store}) => (
    <Container>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path={"/"} component={Home}></Route>
                    <Route path={"/search"} component={Home}></Route>
                    <Route path={"/movie"} component={Movie}></Route>
                    <Route path={"/movie/:id"} component={Movie}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </Router>
        </Provider>
    </Container>
)

export default App