import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Movie } from "../../models"
import { getMovie } from "../../utilities"

function MovieDetail() {
  const {idMovie} = useParams()
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    getMovie(+idMovie!).then(setMovie)
  }, [])

  
  return (
    <div>
      <h1>{movie?.title}</h1>
      <h3>{movie?.release_date.toString()}</h3>
      <img src={`${import.meta.env.VITE_IMGS_BASE_URL}${movie?.poster_path}`} height='400px' />
      <p>{movie?.overview}</p>

    </div>
  )
}

export default MovieDetail