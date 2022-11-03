import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { moviesStore } from '../state'
import { getMoviesbyCategory } from '../utilities'
import styles from './styles/Pagination.module.css'

function Pagination() {
  const moviesState = moviesStore()
  const { idCategory } = useParams()
  const navigate = useNavigate()
  

  const handleCLick = (page: number) => {
    getMoviesbyCategory(+idCategory!,  page).then(moviesState.addMovies)
    navigate(`/movies/${idCategory}?page=${page}`)
  }

  return (
    <div className={styles.containerPag}>
      {
        moviesState.movieRes.page! > 1
          ?
          (<div className={styles.itemPag} onClick={() => handleCLick(moviesState.movieRes.page! - 1)}>
            Prev
          </div>)
          : null
      }
      <div className={styles.itemPag}><span>  </span></div>
      {
        moviesState.movieRes.page! < moviesState.movieRes.totalPages!
          ?
          (<div className={styles.itemPag} onClick={() => handleCLick(moviesState.movieRes.page! + 1)}>
            Next
          </div>)
          : null
      }
      
    </div>
  )
}

export default Pagination