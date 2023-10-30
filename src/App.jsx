import { useEffect, useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThmemeContext } from './Components/Context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')
  useEffect(()=>{
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  },[])

  return (
    <ThmemeContext.Provider value={{theme,setTheme}}>
    <div className={`${theme} 
    ${theme=='dark'?'bg-[#121212]':null} min-h-[100vh]`}>
      <Header />
      <Home />
    </div>
    </ThmemeContext.Provider>
  )
}

export default App
