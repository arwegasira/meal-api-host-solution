import { NavLink } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'
import Wrapper from '../StyledComponents/NavWrapper'
const Navigation = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <h2 className='logo'>MealRecipes</h2>
        <div className='nav-links'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>Contacts</NavLink>
          <NavLink to='newsletter'>Subscribe</NavLink>
        </div>
        <ToggleTheme></ToggleTheme>
      </div>
    </Wrapper>
  )
}
export default Navigation
