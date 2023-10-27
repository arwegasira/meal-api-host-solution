import { styled } from 'styled-components'

const Wrapper = styled.nav`
  background: var(--backgroundNav);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .logo {
    line-height: 1.2;
    letter-spacing: var(--letterSpacing);
    font-weight: bold;
    color: var(--primary-600);
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  .nav-links a {
    color: var(--textColor);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
    line-height: 1.2;
    font-size: 1.3rem;
  }
  .nav-links a.active {
    color: var(--primary-600);
  }
  .theme {
    button {
      background: transparent;
      border: transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      line-height: 1.2;
      letter-spacing: var(--letterSpacing);
      font-size: 1.3rem;
      color: var(--textColor);
      /* background: red; */
      svg {
        font-size: 1.4rem;
      }
    }
  }
  @media (min-width: 48rem) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
    }
    .nav-links {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    .theme {
      display: grid;
      place-items: center;
    }
  }
`
export default Wrapper
