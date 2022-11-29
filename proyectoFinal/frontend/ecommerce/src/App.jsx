import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  fetch('http://localhost:8080/api/productos')
  .then(resp=>console.log(resp))

  return (
    <div className="App">
      
    Ecommerce
    </div>
  )
}

export default App
