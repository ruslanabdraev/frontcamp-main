import React from 'react'
import styled, { css } from 'styled-components'

const Input = styled.input`
    width: 350px;
    height: 20px;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`

const Search = ({onSearch=f=>f}) => {
    let _searchValue

    const onEnter = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          onSearch(_searchValue.value)
        }
    }
    
    return (
        <Container>
            <Input type="text" ref={input => _searchValue = input} onKeyDown={onEnter}></Input>
            <Button onClick={()=>onSearch(_searchValue.value)} primary>SEARCH</Button>
            <br></br>
            SEARCH BY
        </Container>
)}

export default Search