import styled, { css } from 'styled-components'

const Container = styled.div`
    display: inline-block;
    padding: 3px;
`

const Img = styled.img`
    width: 300px;
    padding: 0px 0xp 0px 0px;
`

const MovieItem = ({imageUrl="", title="", genre="", releasedAt=0}) => {
    return(
        <Container>
            <Img src={imageUrl}></Img>
            <div>
                <span>{title}</span><span>{releasedAt}</span>
                <div>{genre}</div>
            </div>
        </Container>
    )
}

export default MovieItem