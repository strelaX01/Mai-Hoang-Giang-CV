import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cv from './components/cv'
import PopupCertificate from './components/PopupCertificate'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Cv/>
   <PopupCertificate/>
   </>
  )
}

export default App
