import { Form } from 'react-router-dom'
import Wrapper from '../StyledComponents/SearchFormWrapper'
const SearchForm = () => {
  return (
    <Wrapper>
      <Form className='search-form'>
        <input type='search' id='search' name='search' />
        <button type='submit'>Search</button>
      </Form>
    </Wrapper>
  )
}
export default SearchForm
