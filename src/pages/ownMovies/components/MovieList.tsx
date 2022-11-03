import { useNavigate } from 'react-router-dom'
import { OwnMovie } from '../../../models'
import styles from './MovieList.module.css'

interface MovieListProps {
 movies: OwnMovie[]
}

function MovieList({movies}: MovieListProps) {

  return (
    <div>
      <div className={styles.container}>
        {
          movies?.map((movie, index) => (
            <MovieItem movie={movie} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

interface MovieProps {
  movie: OwnMovie
}

function MovieItem({movie}: MovieProps) {
  const navigate = useNavigate()


  return (
    <div className={styles.itemList} >
      <svg width="40" height="40" viewBox="0 0 30 30" fill='#D1483D' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <img src={`${movie.image}`} alt="" />
      <p>{movie.name}</p>
      <p>{movie.date.toString()}</p>
    </div>
  )
}


export default MovieList

