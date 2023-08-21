

import NavBar from './components/NavBar/Nav.jsx'
import './App.css'
import Cards from './components/Cards/cards.jsx'

function App() {

  return (
    <>
      <NavBar />
      <div className="content">
        <div className="videos">
          <Cards />
        </div>


        <div className="card">
        </div>
      </div>
    </>
  )
}

export default App
