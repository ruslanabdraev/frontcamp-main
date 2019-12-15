import React, {useState, useEffect} from 'react'
import history from '../constants/history'

const Movie = () => {
    const [hasMovie, setHasMovie] = useState(false)

    useEffect(()=>{
        const movieId = history.location.pathname.split("/")[2];

        if(movieId)
        {
            
        }
        
    }, [])

    return (
        <div>
            {!hasMovie? <h2>Movie not found</h2> : "" }
        </div>
    )
}
    
export default Movie