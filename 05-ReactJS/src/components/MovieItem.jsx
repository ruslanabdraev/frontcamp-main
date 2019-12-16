import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: inline-block;
    padding: 3px;
    margin: 20px 13px 30px 13px;
`

const Img = styled.img`
    width: 300px;
    padding: 0px 0xp 0px 0px;
`

const Release = styled.div`
    border: 1px solid #909089;
    border-radius: 3px;
    padding: 3px 10px;
    float: right;
`
const TitleAndGenre = styled.div`
    width: 200px;
    float:left;
    word-wrap: break-word;
`

const MovieItem = ({id=0, imageUrl="", title="", genre="", releasedAt=0}) => {
    return(
        <Container>
            <NavLink to={"/movie/" + id }><Img src={imageUrl}></Img></NavLink>
            <div>
                <TitleAndGenre><b>{title}</b><br/>{genre}</TitleAndGenre>
                <Release>{releasedAt}</Release>
            </div>
        </Container>
    )
}

export default MovieItem