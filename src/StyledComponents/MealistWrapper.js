import { styled } from 'styled-components'
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 2rem;

  article {
    background: var(--grey-300);
    color: #111;
    box-shadow: var(--shadow-2);
    border-radius: var(--borderRadius);
  }
  article .image-container {
  }
  article .image-container img {
    width: 100%;
    /* height: 18.75rem; */
    object-fit: cover;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  article .details {
    padding: 1rem 0.5rem;
    h4 {
      line-height: 1.2;
      /* letter-spacing: var(--letterSpacing); */
      font-size: 1.5rem;
    }
    a {
      display: block;
      margin-top: 0.3rem;
      background: var(--primary-500);
      width: 30%;
      padding: 0.5rem;
      color: white;
      text-align: center;
      cursor: pointer;
      border-radius: var(--borderRadius);
    }
    a:hover {
      background: var(--primary-700);
    }
  }
`

export default Wrapper
