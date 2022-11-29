import { useState } from 'react'
import "./styles.scss"
import ProductListPage from './pages/ProductListContainer/ProductListPage'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <main className="mainContainer">
        <ProductListPage/>
      </main>
    
    </div>
  )
}

export default App
