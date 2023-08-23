import { useState } from 'react'
import NavBar from './components/NavBar/Nav.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="card">
      </div>
    </>
  );
}

export default App
