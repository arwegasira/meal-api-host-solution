import { styled } from 'styled-components'
const Wrapper = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 clamp(0.5rem, 5vw, 2rem);
  gap: 1.5rem;
  .link-container {
    text-align: center;
    padding: 1rem 0;
    a {
      background: var(--primary-500);
      padding: 0.3rem 1rem;
      color: white;
      border-radius: var(--borderRadius);
      border: none;
      outline: none;
      cursor: pointer;
    }
    a:hover {
      background: var(--primary-700);
    }
    h4 {
      margin-top: 1rem;
      letter-spacing: var(--letterSpacing);
      line-height: 1.2;
      text-align: center;
      font-size: 1.7rem;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  article .img-container {
    border-radius: var(--borderRadius);
  }
  article .img-container img {
    width: 100%;
    object-fit: cover;
    border-radius: var(--borderRadius);
  }
  article .details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  article .details .line-item {
    p {
      line-height: 1.3;
    }
    span {
      display: inline-block;
      background: var(--primary-500);
      padding: 0.3rem;
      border-radius: var(--borderRadius);
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    article {
      display: grid;
      grid-template-columns: 2fr 3fr;
    }
    .img-container {
      flex-basis: 1;
    }
  }
`

export default Wrapper
