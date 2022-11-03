import { useLocation, useNavigate } from 'react-router-dom'
import styles from './styles/Header.module.css'

function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  console.log(pathname)
  
  return (
    <div>
      <div className={styles.container}>
        <h4 onClick={() => navigate('/')} className={ pathname === '/' ? styles.selected: ''}>Home</h4>
        <h4 onClick={() => navigate('favorites')} className={ pathname === '/favorites' ? styles.selected: ''}>Favs</h4>
        <h4 onClick={() => navigate('add/movie')} className={ pathname === '/add/movie' ? styles.selected: ''}>Add Movie</h4>
        <h4 onClick={() => navigate('movies/own')} className={ pathname === '/movies/own' ? styles.selected: ''}>Your Movies</h4>
      </div>
      
    </div>
  )
}

export default Header