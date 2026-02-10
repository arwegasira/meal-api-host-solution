import { styled } from 'styled-components'

const Wrapper = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--textColor);
  letter-spacing: var(--letterSpacing);
  line-height: 1.2;
  text-align: center;
  margin-bottom: 1.5rem;

  .dark-theme & {
    color: var(--textDark);
  }

  @media (min-width: 48rem) {
    font-size: 3rem;
  }
`

export default Wrapper
