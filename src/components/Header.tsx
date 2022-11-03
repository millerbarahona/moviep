import { useNavigate } from 'react-router-dom'
import styles from './styles/Header.module.css'

function Header() {
  const navigate = useNavigate()
  
  return (
    <div>
      <div className={styles.container}>
        <h4 onClick={() => navigate('/')}>Home</h4>
        <h4 onClick={() => navigate('favorites')}>Favs</h4>
        <h4 onClick={() => navigate('add/movie')}>Add Movie</h4>
        <h4 onClick={() => navigate('movies/own')}>Your Movies</h4>
      </div>
      
    </div>
  )
}

export default Header