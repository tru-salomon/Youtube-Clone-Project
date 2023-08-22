
import Video from "./Components/Video.jsx"
import NavBar from './components/NavBar/Nav.jsx'
import './App.css'
import Cards from './components/Cards/cards.jsx'

function App() {

  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <main className="main">
        <div className='side-bar'></div>
        <div className="content">
          <Cards />
        </div>
//      <div className="App">
//       <Video />
//     </div>
      </main>
    </>
  )

}

export default App;