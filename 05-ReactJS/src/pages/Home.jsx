import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Search from '../components/Search'
import Panel from '../components/Panel'
import MovieList from '../components/MovieList'


const Header = styled.div`
    font-size: 3em; 
    padding: 20px 0px 0px 20px;
`



const onSort = (option) => {
    console.log("Sort by: ", option)
}

const Home = () => {
	const [serchOption, setSearchOption] = useState("title")
	const [movies, setMovies] = useState([])
	

	useEffect(()=>{
		fetch("https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&limit=15")
		.then(response=>response.json())
		.then(data=>setMovies(data.data))

	}, [])

	const onSearch = (searchValue, option) => {
		console.log(`Serch value: ${searchValue}, option: ${option}`)
	}

	return (
		<>
			<Header>FIND YOUR MOVIE</Header>
			<Search onSearch={onSearch} />
			<Panel movieCount={15} onSort={onSort} />
			<MovieList items={movies} />
		</>
)}

export default Home