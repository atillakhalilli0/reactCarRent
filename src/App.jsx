import { useState } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  const [search, setSearch] = useState("")
  const [basket, setBasket] = useState([])  

  function removeFromBasket(id) {
    setBasket(basket.filter(item => item.id !== id));
  }  

  return (
    <>
      <Header removeFromBasket={removeFromBasket} basket={basket} setSearch={setSearch} />
      <Main search={search} basket={basket} setBasket={setBasket} />
      <Footer />
    </>
  )
}

export default App
