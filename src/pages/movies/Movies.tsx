import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { MovieList, Pagination } from "../../components"
import { Category } from "../../models"
import { moviesStore } from "../../state"
import { getCategory, getMoviesbyCategory } from "../../utilities"
import styles from "./Movies.module.css"

function Movies() {
  const { idCategory } = useParams()
  const moviesState = moviesStore()
  const [category, setCategory] = useState<Category>()
  const [params] = useSearchParams()
  const page = params.get('page')

  useEffect(() => {
    getCategory(+idCategory!).then(setCategory)
    getMoviesbyCategory(+idCategory!, page ? +page! : 1).then(moviesState.addMovies)
  }, [])

  return (
    <div>
      <div>
        <div>
          <h1 className={styles.title}>Movies of {category?.name}</h1>
        </div>
        <MovieList movies={moviesState.movieRes.movies!}/>
        {
          moviesState.movieRes.movies?.length! === undefined ? <div>No hay resultados</div> : null
        }
        <Pagination />
      </div>
    </div>
  )
}

export default Movies