import { styled } from 'styled-components'

const Wrapper = styled.section`
  width: var(--view-width);
  max-width: var(--max-width);
  padding: 2rem 0;
  margin: 0 auto;
  .img-container {
    display: flex;
    justify-content: center;
    padding: 0 1rem;
  }
  img {
    object-fit: cover;
    margin-bottom: 3rem;
    width: 100%;
  }
  h2 {
    text-align: center;
    font-size: clamp(1.5rem, 5vw, 3vw);
    padding: 0.5rem 0;
  }
  .back-home {
    /* background-color: red; */
    margin-top: 1rem;
    padding: 1rem 0;
    display: grid;
    place-items: center;
  }
  a {
    font-size: clamp(1.3rem, 3vw, 2rem);
    color: #f0f0f0;
    background: var(--primary-500);
    padding: 0.5rem 1.5rem;
    border-radius: var(--borderRadius);
    border: var(--transparent);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
  }
  a:hover {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    img {
      width: 70%;
    }
  }
`

export default Wrapper
