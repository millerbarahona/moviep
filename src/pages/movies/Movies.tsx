import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieList, Pagination } from "../../components"
import { Category } from "../../models"
import { moviesStore } from "../../state"
import { getCategory, getMoviesbyCategory } from "../../utilities"
import styles from "./Movies.module.css"

function Movies() {
  const { idCategory } = useParams()
  const moviesState = moviesStore()
  const [category, setCategory] = useState<Category>()

  useEffect(() => {
    getCategory(+idCategory!).then(setCategory)
    getMoviesbyCategory(+idCategory!, 4).then(moviesState.addMovies)
  }, [])

  return (
    <div>
      <div>
        <div>
          <h1 className={styles.title}>Movies of {category?.name}</h1>
        </div>
        <MovieList />
        <Pagination />
      </div>
    </div>
  )
}

export default Movies