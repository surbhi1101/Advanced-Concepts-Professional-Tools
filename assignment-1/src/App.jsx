import { useContext, useState } from 'react'
import './App.css'
import { ThemeContext } from './ThemeContext'

function App() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className={`container ${theme}`}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Theme </button>
    </div >
  )
}

export default App
