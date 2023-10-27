import customFetch from '../Axios/customFetch'
import { useQuery } from '@tanstack/react-query'
import { useLoaderData, Navigate, Link } from 'react-router-dom'
import Wrapper from '../StyledComponents/SingleMealWrapper'
const url = '/lookup.php?i='
const queryOptions = (id) => {
  return {
    queryKey: ['singleMeal', id],
    queryFn: async () => {
      const response = await customFetch.get(`${url}${id}`)
      return response.data
    },
  }
}
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    await queryClient.ensureQueryData(queryOptions(id))
    return { id }
  }
const SingleMeal = () => {
  const { id } = useLoaderData()
  const response = useQuery(queryOptions(id))
  if (!response?.data?.meals) {
    return <Navigate to='/'></Navigate>
  }
  const meal = response?.data?.meals[0]
  const {
    idMeal,
    strCategory: category,
    strInstructions: instructions,
    strMeal: name,
    strMealThumb: img,
    strSource: readMore,
    strYoutube: urlYoutube,
    strArea: area,
  } = meal
  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith('strIngredient'))
    .map((item) => meal[item])
    .filter((item) => item !== '')
    .join(', ')

  return (
    <Wrapper>
      <div className='link-container'>
        <Link to='/'>Back Home</Link>
        <h4>{name}</h4>
      </div>
      <article>
        <div className='img-container'>
          <img src={img} alt={name} />
        </div>
        <div className='details'>
          <div className='line-item'>
            <p>
              <span>Name:</span>
              {name}
            </p>
          </div>
          <div className='line-item'>
            <p>
              <span>Category:</span>
              {category}
            </p>
          </div>

          <div className='line-item'>
            <p>
              <span>Ingredients:</span>
              {ingredients}
            </p>
          </div>
          <div className='line-item'>
            <p>
              <span>Instructions:</span>
              {instructions}
            </p>
          </div>
        </div>
      </article>
    </Wrapper>
  )
}
export default SingleMeal
