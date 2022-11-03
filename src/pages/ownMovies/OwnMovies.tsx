import { useState } from "react"
import { getOwnMovies } from "../../utilities"
import MovieList from "./components/MovieList"

function OwnMovies() {
  const [movies, setMovies] = useState(getOwnMovies())
  
  return (
    <div>
      <h1>Your Movies</h1>
      <MovieList movies={movies!}/>
    </div>
  )
}

export default OwnMovies