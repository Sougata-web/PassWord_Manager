import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nvabar from './components/Nvabar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nvabar/>
    <div className=' min-h-[88vh]  bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3dd_100%)]'>

    <Manager/>
    </div>
    <Footer/>
    </>
  )
}

export default App
