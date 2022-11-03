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
      <MovieList movies={movies}/>
    </div>
  )
}

export default FavMovies