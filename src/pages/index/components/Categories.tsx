import { useNavigate } from "react-router-dom"
import { categoriesStore } from "../../../state"
import styles from './Categories.module.css'

function Categories() {
  const categoriesState = categoriesStore()
  const navigate = useNavigate()

  function handleClick (categoryId: number) {
    navigate(`/movies/${categoryId}`)
  }
  return (
    <div>
      <div className={styles.container}>
        {
          categoriesState.categories!.map((category) => (
            <div key={category.id} className={styles.listItem} onClick={() => handleClick(category.id)}>
              <h4>{category.name}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories