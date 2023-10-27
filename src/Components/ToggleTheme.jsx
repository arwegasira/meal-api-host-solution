import { useGlobalContext } from '../AppContext'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
const ToggleTheme = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <div className='theme'>
      {isDarkTheme ? (
        <button onClick={() => toggleDarkTheme()}>
          <span>Light Mode</span>
          <BsFillSunFill></BsFillSunFill>
        </button>
      ) : (
        <button onClick={() => toggleDarkTheme()}>
          <span>Dark Mode</span>
          <BsFillMoonFill></BsFillMoonFill>
        </button>
      )}
    </div>
  )
}
export default ToggleTheme
