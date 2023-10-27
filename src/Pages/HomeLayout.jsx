import { Outlet } from 'react-router-dom'
import Navigation from '../Components/Navigation'
const HomeLayout = () => {
  return (
    <>
      <Navigation></Navigation>
      <main className='page'>
        <Outlet></Outlet>
      </main>
    </>
  )
}
export default HomeLayout
