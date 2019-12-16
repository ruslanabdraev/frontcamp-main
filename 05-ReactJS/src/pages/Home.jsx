import React, {useState, useEffect} from 'react'
import history from '../constants/history'
import styled from 'styled-components'
import Search from '../components/Search'
import Panel from '../components/Panel'
import MovieList from '../components/MovieList'

const Header = styled.div`
    font-size: 3em; 
    padding: 20px 0px 0px 20px;
`

const Home = () => {
	const [serchOption, setSearchOption] = useState("title")
	const [sortOption, setSortOption] = useState("release_date")
	const [count, setCount] = useState(0)
	const [movies, setMovies] = useState([])

	useEffect(()=>{
		search()
	}, [])

	const search = () => {
		const searchQuery = history.location.search

		if(searchQuery)
		{
			fetch(`https://reactjs-cdp.herokuapp.com/movies${searchQuery}&sortOrder=desc`)
			.then(response=>response.json())
			.then(data=>{
				setCount(data.data.length)
				setMovies(data.data)
			})
			
		} else {
			fetch("https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=desc")
				.then(response=>response.json())
				.then(data=>{
					setCount(data.data.length)
					setMovies(data.data)
			})
		}
	}

	const onSort = (sortOption) => {
		setSortOption(sortOption)
	}

	const onSearch = (searchValue, option) => {
		history.push(`/search/search?sortBy=${sortOption}&searchBy=${option}&search=${searchValue}`)
		search()
	}

	return (
		<>
			<Header>FIND YOUR MOVIE</Header>
			<Search onSearch={onSearch} />
			<Panel movieCount={count} onSort={onSort} />
			<MovieList items={movies} />
		</>
)}

export default Home