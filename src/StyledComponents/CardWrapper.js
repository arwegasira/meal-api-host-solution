import { styled } from 'styled-components'

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  overflow: hidden;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-4);
    transform: translateY(-2px);
  }

  &:focus-within {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--grey-900);
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .card-description {
    font-size: 1rem;
    color: var(--grey-600);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid var(--grey-200);
  }

  .card-link {
    color: var(--primary-600);
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 0;
    transition: var(--transition);

    &:hover {
      color: var(--primary-800);
      text-decoration: underline;
    }

    &:focus {
      outline: 2px solid var(--primary-500);
      outline-offset: 2px;
      border-radius: var(--borderRadius);
    }
  }

  .card-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--primary-100);
    color: var(--primary-700);
    font-size: var(--small-text);
    font-weight: 500;
    border-radius: var(--borderRadius);
  }

  /* Dark theme support */
  .dark-theme & {
    background: var(--grey-800);

    .card-title {
      color: var(--textDark);
    }

    .card-description {
      color: var(--grey-300);
    }

    .card-footer {
      border-top-color: var(--grey-700);
    }

    .card-badge {
      background: var(--primary-800);
      color: var(--primary-200);
    }
  }

  /* Responsive adjustments */
  @media (min-width: 48rem) {
    .card-content {
      padding: 2rem;
    }

    .card-image {
      height: 250px;
    }
  }
`

export default Wrapper
