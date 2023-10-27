import { Link } from 'react-router-dom'
import Wrapper from '../StyledComponents/MealCard'
const Meal = ({ meal }) => {
  const {
    idMeal: id,
    strCategory: category,
    strInstructions: instructions,
    strMeal: name,
    strMealThumb: img,
    strSource: readMore,
    strYoutube: urlYoutube,
    strArea: area,
  } = meal

  return (
    <Wrapper>
      <div className='image-container'>
        <img src={img} alt={name} />
      </div>
      <div className='details'>
        <h4>{name}</h4>
        <p>{category}</p>
        <small>{area}</small>
        <Link to={`meal/${id}`}>Details</Link>
      </div>
    </Wrapper>
  )
}
export default Meal
