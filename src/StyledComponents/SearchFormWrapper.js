import { styled } from 'styled-components'
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  .search-form {
    width: 60%;
    max-width: var(--fixed-width);
    padding: 2rem 0.5rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.3rem;
    input[type='search'] {
      padding: 0.5rem;
      border-radius: 0;
      border: 1px solid var(--grey-500);
    }
    button {
      padding: 0 0.5rem;
      border: none;
      border-radius: none;
      background: var(--primary-500);
      color: var(--textColor);
      cursor: pointer;
    }
    button:hover {
      background: var(--primary-700);
    }
  }
`

export default Wrapper
