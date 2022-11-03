import { useEffect, useState } from "react"
import { MovieList } from "../../components"
import { Movie } from "../../models"
import { getLocalFavs } from "../../utilities"

function FavMovies() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    getLocalFavs() ? setMovies(getLocalFavs()!) : null
  }, [])
  
  return (
    <div>
      <h1>Favorite Movies</h1>
      <MovieList movies={movies}/>
    </div>
  )
}

export default FavMovies