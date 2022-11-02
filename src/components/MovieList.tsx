import { moviesStore } from '../state'
import styles from './styles/MovieList.module.css'

function MovieList() {
  const moviesState = moviesStore()

  return (
    <div>
      <div className={styles.container}>
        {
          moviesState?.movieRes?.movies?.map((movie) => (
            <div key={movie.id} className={styles.itemList}>
              <img src={`${import.meta.env.VITE_IMGS_BASE_URL}${movie.poster_path}`} alt="" />
              <p>{movie.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MovieList