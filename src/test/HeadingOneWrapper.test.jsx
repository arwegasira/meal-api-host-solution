import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Wrapper from '../StyledComponents/HeadingOneWrapper'

describe('HeadingOneWrapper Accessibility Tests', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Wrapper>Component Showcase</Wrapper>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should render as an h1 element', () => {
    render(<Wrapper>Component Showcase</Wrapper>)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Component Showcase')
  })

  it('should have no accessibility violations in dark theme', async () => {
    document.body.classList.add('dark-theme')

    const { container } = render(
      <Wrapper>Component Showcase</Wrapper>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()

    document.body.classList.remove('dark-theme')
  })

  it('should have visible text content', () => {
    render(<Wrapper>Component Showcase</Wrapper>)

    expect(screen.getByText('Component Showcase')).toBeVisible()
  })
})
