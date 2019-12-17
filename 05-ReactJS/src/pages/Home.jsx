import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import history from '../constants/history'
import styled from 'styled-components'
import Search from '../components/Search'
import Panel from '../components/Panel'
import MovieList from '../components/MovieList'
import { sortFunction } from '../lib/array-helper'

const Header = styled.div`
    font-size: 3em; 
    padding: 20px 0px 0px 20px;
`

const Home = ({movies=[], onSearch=f=>f, onSort=f=>f}) => {
	const [serchOption, setSearchOption] = useState("title")
	const [sortOption, setSortOption] = useState("release_date")

	useEffect(()=>{
		const searchQuery = history.location.search
		onSearch(searchQuery)
	},[])

	const handleSearch = (searchValue, searchOption) =>{
		history.push(`/search/search?sortBy=${sortOption}&searchBy=${searchOption}&search=${searchValue}`)

		const searchQuery = history.location.search
		onSearch(searchQuery)
	}

	return (
		<>
			<Header>FIND YOUR MOVIE</Header>
			<Search onSearch={handleSearch} />
			<Panel movieCount={movies.length} onSort={onSort} />
			<MovieList items={movies} />
		</>
)}

export default connect(
	state => ({
		movies:  state.movies.length > 0 ? [...state.movies].sort(sortFunction(state.sort)): []
	}),

	dispatch => ({
		onSearch(searchQuery){
			fetch(`https://reactjs-cdp.herokuapp.com/movies${searchQuery}&sortOrder=desc`)
				.then(response=>response.json())
				.then(data=>{
					dispatch({type: "SET_MOVIES", items: data.data})
				})
		},
		onSort(sortOption){
			dispatch({type: "SORT_MOVIES", sortBy: sortOption})
		}
	})
)(Home)