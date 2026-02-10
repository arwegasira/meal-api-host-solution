import { useState } from 'react'
import HeadingOneWrapper from '../StyledComponents/HeadingOneWrapper'
import Modal from '../StyledComponents/Modal'

const Preview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <HeadingOneWrapper>Component Showcase</HeadingOneWrapper>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="btn" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="About This App"
      >
        <p>
          Welcome to Meal Recipes, your go-to destination for discovering
          delicious meals from around the world. Browse through a curated
          collection of recipes, search for your favorites, and find your next
          culinary inspiration.
        </p>
      </Modal>
    </div>
  )
}
export default Preview
