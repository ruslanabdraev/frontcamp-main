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
  margin: 0px 0px 15px 0px;
`

const Search = ({onSearch=f=>f}) => {
    let _searchValue, _title, _genre

    const handleSearch = () => {
      const option = _title.checked ? _title.value: _genre.value
      onSearch(_searchValue.value, option)
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          handleSearch()
        }
    }
    
    return (
        <Container>
            <Input type="text" ref={input => _searchValue = input} onKeyDown={onEnter}></Input>
            <Button onClick={handleSearch} primary>SEARCH</Button>
            <br></br>
            SEARCH BY  
            <label>
                <input type="radio" ref={title => _title = title} id="title" name="movie" value="title" readOnly defaultChecked/>
                TITLE
            </label>
            <label>
                <input type="radio" ref={genre => _genre = genre} id="genre" name="movie" readOnly value="genre"/>
                GENRE
            </label>
        </Container>
)}

export default Search