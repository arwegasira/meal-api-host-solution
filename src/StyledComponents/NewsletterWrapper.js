import { styled } from 'styled-components'
const Wrapper = styled.section`
  form {
    width: 70%;
    max-width: 35rem;
    margin: 5rem auto;
    background: var(--grey-100);
    color: #111;
    padding: 2rem 1rem;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    > div {
      display: flex;
      flex-direction: column;
      gap: 0.3125rem;
    }
    input {
      padding: 0.4rem;
      border: 1px solid var(--grey-200);
      border-radius: var(--borderRadius);
      outline: none;
      font-size: 1rem;
    }
    label {
      font-size: var(--small-text);
    }
    button {
      padding: 0.4rem;
      background: var(--primary-500);
      border: none;
      color: white;
      border-radius: var(--borderRadius);
      margin-top: 0.3rem;
      cursor: pointer;
    }
    header {
      text-align: center;
      margin-bottom: 1rem;
      line-height: 1.2;
      /* letter-spacing: var(--letterSpacing); */
      font-weight: bold;
      font-size: clamp(1rem, 3vw, 1.3rem);
    }
    @media (min-width: 40rem) {
      form {
        gap: 0.8rem;
      }
    }
  }
`
export default Wrapper
