import { useState } from 'react'

import './App.css'
import ProductListPage from './pages/ProductListContainer/ProductListPage'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">

      <ProductListPage/>
    
    </div>
  )
}

export default App
