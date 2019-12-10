import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    text-align: center;
    font-size: 1.2em;
    margin: 0px 0px 15px 0px;
`

const Input = styled.input`
    background: #282828;
    border-radius: 3px;
    border: 1px solid rgb(246,82,97);
    color: white;
    width: 500px;
    height: 40px;
    margin: 0px;
    padding: 0px 0.5em;
`

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 1px solid rgb(246,82,97);
    color: rgb(246,82,97);
    height: 40px;
    margin: 0em 2em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
      background: rgb(246,82,97);
      color: white;
    `}
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