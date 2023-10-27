import { createContext, useContext, useState, useEffect } from 'react'
const globalContext = createContext()
export const useGlobalContext = () => useContext(globalContext)
//check if use prefer dark mode
const isDefaultDarkMode = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const localStorageDark = localStorage.getItem('darkMode') === 'true'
  return defaultDark || localStorageDark
}

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(isDefaultDarkMode())
  const toggleDarkTheme = () => {
    const mode = !isDarkTheme
    setIsDarkTheme(mode)
    localStorage.setItem('darkMode', mode)
    document.body.classList.toggle('dark-theme')
  }
  useEffect(() => {
    const darkMode = isDefaultDarkMode()
    document.body.classList.toggle('dark-theme', darkMode)
  }, [])
  return (
    <globalContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
      }}
    >
      {children}
    </globalContext.Provider>
  )
}
export default AppContext
