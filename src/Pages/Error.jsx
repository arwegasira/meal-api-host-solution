import { useRouteError, Link } from 'react-router-dom'
import notFound from '../assets/pageNotFound.svg'
import Wrapper from '../StyledComponents/ErrorWrapper'
import notFoundDark from '../assets/notFoundDark.svg'
import { useGlobalContext } from '../AppContext'

const Error = () => {
  const { isDarkTheme } = useGlobalContext()
  const error = useRouteError(Error)
  console.log(error)
  if (error.status === 404) {
    return (
      <Wrapper>
        <div className='img-container'>
          <img
            src={isDarkTheme ? notFoundDark : notFound}
            alt='Page not found'
          />
        </div>

        <h2>OOPS, Page Not Found</h2>
        <div className='back-home'>
          <Link to='/'>Back Home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h2>Something Went Wrong...</h2>
    </Wrapper>
  )
}
export default Error
