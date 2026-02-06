import { useLoaderData, useNavigation } from 'react-router-dom'
import customFetch from '../Axios/customFetch'
import { useQuery } from '@tanstack/react-query'
import MealList from '../Components/MealList'
import SearchForm from '../Components/SearchForm'
const url = '/search.php?s='
const queryOptions = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await customFetch.get(`${url}${searchTerm}`)
      return response.data
    },
  }
}
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const searchUrl = new URL(request.url)
    const searchTerm = searchUrl.searchParams.get('search') || ''
    await queryClient.ensureQueryData(queryOptions(searchTerm))
    return { searchTerm }
  }
const Landing = () => {
  const navigation = useNavigation()
  const loading = navigation.state === 'loading'
  const { searchTerm } = useLoaderData()
  const response = useQuery(queryOptions(searchTerm))
  const meals = response?.data?.meals
  if (loading) {
    return <div className='loading'></div>
  }
  return (
    <>
      <SearchForm></SearchForm>
      <MealList meals={meals}></MealList>
    </>
  )
}
export default Landing
