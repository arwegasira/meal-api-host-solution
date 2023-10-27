import Wrapper from '../StyledComponents/MealistWrapper'
import Meal from './Meal'
const MealList = ({ meals }) => {
  if (!meals) {
    return (
      <Wrapper>
        <h2>Meal not found</h2>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      {meals.map((meal) => {
        return <Meal meal={meal} key={meal.idMeal}></Meal>
      })}
    </Wrapper>
  )
}
export default MealList
