import styles from './styles/Pagination.module.css'

function Pagination() {
  return (
    <div className={styles.containerPag}>
      <div className={styles.itemPag}>
        Prev
      </div>
      <div className={styles.itemPag}><span>  </span></div>
      <div className={styles.itemPag}>
        Next
      </div>
    </div>
  )
}

export default Pagination