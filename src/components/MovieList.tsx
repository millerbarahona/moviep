import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Movie } from '../models'
import { favsStore, moviesStore } from '../state'
import { addFav, getLocalFavs, removeFav } from '../utilities'
import styles from './styles/MovieList.module.css'

interface MovieListProps {
 movies: Movie[]
}
function MovieList({movies}: MovieListProps) {

  return (
    <div>
      <div className={styles.container}>
        {
          movies?.map((movie) => (
            <MovieItem movie={movie} key={movie.id}/>
          ))
        }
      </div>
    </div>
  )
}

interface MovieProps {
  movie: Movie
}

function MovieItem({movie}: MovieProps) {
  const navigate = useNavigate()
  const favState = favsStore()

  const checkInFavs = (movieId: number) => {
    const favs = getLocalFavs()
    const isFav = favs?.filter(fav => fav.id === movieId).length

    return !!isFav
  }

  const [isFav, setIsFav] = useState<boolean>(checkInFavs(movie.id!))

  const handleClick = (movie: Movie) => {
    const favs = getLocalFavs()
    const isFavorite = favs?.filter(fav => fav.id === movie.id).length
    isFavorite ? removeFav(movie) : addFav(movie)
    setIsFav(!isFav)
    !isFav ? favState.addMovie(movie) : favState.removeMovie(movie.id!)
  }

  return (
    <div key={movie.id} className={styles.itemList} >
      <svg onClick={() => handleClick(movie)} width="40" height="40" viewBox="0 0 30 30" fill={isFav ? "#D1483D" : '#8899a4'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <img src={`${import.meta.env.VITE_IMGS_BASE_URL}${movie.poster_path}`} alt="" onClick={() => navigate(`/movie/${movie.id}`)} />
      <p>{movie.title}</p>
      <p>{movie.release_date.toString()}</p>
    </div>
  )
}


export default MovieList

