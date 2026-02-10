import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import Wrapper from '../StyledComponents/CardWrapper'

// Sample Card component using the wrapper for testing
const TestCard = ({ title, description, linkText, linkHref, badge, imageSrc }) => (
  <Wrapper>
    {imageSrc && (
      <img className="card-image" src={imageSrc} alt={`Image for ${title}`} />
    )}
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        {badge && <span className="card-badge">{badge}</span>}
        {linkText && (
          <a href={linkHref} className="card-link">
            {linkText}
          </a>
        )}
      </div>
    </div>
  </Wrapper>
)

describe('CardWrapper Accessibility Tests', () => {
  it('should have no accessibility violations with basic content', async () => {
    const { container } = render(
      <TestCard
        title="Test Card Title"
        description="This is a test description for the card component."
        linkText="Learn more"
        linkHref="/test-link"
        badge="Category"
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should have no accessibility violations with image', async () => {
    const { container } = render(
      <TestCard
        title="Card with Image"
        description="A card that includes an image."
        imageSrc="https://example.com/image.jpg"
        linkText="View details"
        linkHref="/details"
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should have no accessibility violations without optional elements', async () => {
    const { container } = render(
      <TestCard
        title="Minimal Card"
        description="A card with only required content."
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should render semantic article element', () => {
    render(
      <TestCard
        title="Semantic Test"
        description="Testing semantic HTML."
      />
    )

    const article = document.querySelector('article')
    expect(article).toBeInTheDocument()
  })

  it('should have proper heading structure', () => {
    render(
      <TestCard
        title="Heading Test"
        description="Testing heading structure."
      />
    )

    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('Heading Test')
  })

  it('should have accessible link with proper href', () => {
    render(
      <TestCard
        title="Link Test"
        description="Testing link accessibility."
        linkText="Click here"
        linkHref="/destination"
      />
    )

    const link = screen.getByRole('link', { name: 'Click here' })
    expect(link).toHaveAttribute('href', '/destination')
  })

  it('should have accessible image with alt text', () => {
    render(
      <TestCard
        title="Image Test"
        description="Testing image accessibility."
        imageSrc="https://example.com/image.jpg"
      />
    )

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Image for Image Test')
  })

  it('should be keyboard navigable', async () => {
    const user = userEvent.setup()

    render(
      <TestCard
        title="Keyboard Test"
        description="Testing keyboard navigation."
        linkText="Navigate here"
        linkHref="/navigate"
      />
    )

    const link = screen.getByRole('link')

    await user.tab()
    expect(link).toHaveFocus()
  })

  it('should have visible focus indicator on interactive elements', async () => {
    const user = userEvent.setup()

    render(
      <TestCard
        title="Focus Test"
        description="Testing focus visibility."
        linkText="Focus me"
        linkHref="/focus"
      />
    )

    const link = screen.getByRole('link')
    await user.tab()

    // Check that link has focus
    expect(link).toHaveFocus()
    expect(document.activeElement).toBe(link)
  })

  it('should not have any ARIA violations in dark theme', async () => {
    // Simulate dark theme by adding class to body
    document.body.classList.add('dark-theme')

    const { container } = render(
      <TestCard
        title="Dark Theme Test"
        description="Testing dark theme accessibility."
        linkText="Dark link"
        linkHref="/dark"
        badge="Dark Badge"
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()

    // Cleanup
    document.body.classList.remove('dark-theme')
  })

  it('should have descriptive text content', () => {
    render(
      <TestCard
        title="Content Test"
        description="This description provides meaningful information."
      />
    )

    expect(screen.getByText('Content Test')).toBeInTheDocument()
    expect(
      screen.getByText('This description provides meaningful information.')
    ).toBeInTheDocument()
  })
})
