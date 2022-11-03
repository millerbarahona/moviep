import { useEffect, useState } from "react"
import { MovieList } from "../../components"
import Spinner from "../../components/Spinner"
import { Movie } from "../../models"
import { categoriesStore, favsStore, moviesStore } from "../../state"
import { getCategories, getLocalFavs, getMovie, getMovies } from "../../utilities"
import Categories from "./components/Categories"
import styles from "./Index.module.css"

function Index() {
  const categoriesState = categoriesStore()
  const moviesState = moviesStore()
  const favsState = favsStore()

  useEffect(() => {
    getCategories().then(categoriesState.addCategories)
    getMovies(1).then(moviesState.addMovies)
  }, [])
  

  return (
    <div>
      <h2>Select a Category</h2>
      <main className={styles.container}>
        <div className={styles.genreContainer}>
        {
          categoriesState.categories?.length !== 0 ? <Categories /> : <Spinner />
        }
        </div>
        <MovieList movies={moviesState.movieRes.movies!}/>
        {
          favsState.favs.length > 0 ? <div><h1>Your Favorites</h1>
          <MovieList movies={favsState.favs}/></div> : null
        }
        
      </main>
    </div>
  )
}

export default Index