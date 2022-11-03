import './App.css'
import { Router } from './router/router'
import { Header } from './components'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="Main">
        <Router />
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
