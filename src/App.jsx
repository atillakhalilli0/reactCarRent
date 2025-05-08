import { useState } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  const [search, setSearch] = useState("")
  return (
    <>
      <Header setSearch={setSearch} />
      <Main search={search} />
      <Footer />
    </>
  )
}

export default App
