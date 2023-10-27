import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../StyledComponents/NewsletterWrapper'
export const action = async ({ request }) => {
  let formData = await request.formData()
  formData = Object.fromEntries(formData)
  return null
}
const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='POST'>
        <div className='first-name'>
          <label htmlFor='fName'>First Name</label>
          <input type='text' id='fName' name='fName' required />
        </div>
        <div className='last-name'>
          <label htmlFor='lName'>Last Name</label>
          <input type='text' id='lName' name='lName' required />
        </div>
        <div className='email-address'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' required />
        </div>
        <button className='submit' type='submit' disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    </Wrapper>
  )
}
export default Newsletter
