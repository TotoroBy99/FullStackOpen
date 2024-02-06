import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensaje from './mensaje'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          El contador es {count}
        </button>
      </div>
      <h1 className="read-the-docs">
        ¡Hola Mundo!
      </h1>
      <p>{+new Date()}</p>
      <div>
        <Mensaje message='Probando una variable'/>
        <Mensaje message='Con React y Vite'/>
        <Mensaje message='Desde un modulo aparte'/>
        <Descripcion />
      </div>
    </>
  )
}

function Descripcion(){
  return (
    <p>
      Probando una funcion
    </p>
  )
}


export default App
