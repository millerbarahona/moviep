import { useEffect, useState } from "react"
import Spinner from "../../components/Spinner"
import { Category } from "../../models"
import { categoriesStore, moviesStore } from "../../state"
import { getCategories } from "../../utilities"
import Categories from "./components/Categories"
import styles from "./Index.module.css"

function Index() {
  const categoriesState = categoriesStore()
  const moviesState = moviesStore()

  useEffect(() => {
    getCategories().then(categoriesState.addCategories)
    moviesState.removeMovies()
  }, [])
  

  return (
    <div>

      <main className={styles.container}>
        {
          categoriesState.categories.length !== 0 ? <Categories /> : <Spinner />
        }
      </main>
    </div>
  )
}

export default Index