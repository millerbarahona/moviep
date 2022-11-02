import { useEffect, useState } from 'react'
import './App.css'
import { getCategories } from './utilities'
import { Category } from './models'
import { Router } from './router/router'
import { Header } from './components'

function App() {
  const [count, setCount] = useState(0)
  const [categories, setCategories] = useState<Category[]>()

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories))
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Router />
      </div>
      
    </div>
  )
}

export default App
