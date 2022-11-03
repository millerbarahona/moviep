import { useNavigate } from 'react-router-dom'
import styles from './styles/Header.module.css'

function Header() {
  const navigate = useNavigate()
  
  return (
    <div>
      <div className={styles.container}>
        <h2 onClick={() => navigate('/')}>Home</h2>
        <h2 onClick={() => navigate('favorites')}>Favs</h2>
      </div>
      
    </div>
  )
}

export default Header