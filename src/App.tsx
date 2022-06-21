import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <>
    {isLoading && <Loader/>}
    <Navbar />
    </>
  )
}

export default App
