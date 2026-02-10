import { useEffect, useRef, useCallback } from 'react'
import { styled } from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  display: grid;
  place-items: center;
  z-index: 1000;
  padding: 1rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Dialog = styled.div`
  background: var(--white);
  border-radius: 0.75rem;
  box-shadow: var(--shadow-4);
  width: 100%;
  max-width: 480px;
  padding: 2rem;
  position: relative;

  .dark-theme & {
    background: var(--grey-800);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: slideUp 0.25s ease-out;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--grey-200);

    .dark-theme & {
      border-bottom-color: var(--grey-700);
    }
  }

  .modal-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--textColor);
    letter-spacing: var(--letterSpacing);
    line-height: 1.3;
    flex: 1;
    margin-right: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .modal-close {
    background: transparent;
    border: 2px solid transparent;
    border-radius: 0.375rem;
    cursor: pointer;
    display: grid;
    place-items: center;
    padding: 0.5rem;
    min-width: 44px;
    min-height: 44px;
    color: var(--grey-600);
    transition: var(--transition);
    line-height: 1;
    font-size: 1.25rem;

    &:hover {
      color: var(--textColor);
      background: var(--grey-100);

      .dark-theme & {
        background: var(--grey-700);
      }
    }

    &:focus-visible {
      outline: 2px solid var(--primary-500);
      outline-offset: 2px;
    }
  }

  .modal-body {
    margin-bottom: 1.5rem;
  }

  .modal-body p {
    font-size: 1rem;
    line-height: 1.65;
    color: var(--textColor);
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
  }

  .modal-footer button {
    cursor: pointer;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem 1.25rem;
    font-size: 0.95rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    transform: translateY(0);

    &:hover {
      background: var(--primary-700);
      box-shadow: var(--shadow-3);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: var(--shadow-1);
    }

    &:focus-visible {
      outline: 2px solid var(--primary-500);
      outline-offset: 2px;
    }
  }
`

const Modal = ({ isOpen, onClose, title = 'Modal Title', children }) => {
  const dialogRef = useRef(null)
  const previousFocusRef = useRef(null)

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )

        if (focusable.length === 0) {
          e.preventDefault()
          return
        }

        if (focusable.length === 1) {
          e.preventDefault()
          focusable[0].focus()
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        dialogRef.current?.querySelector('.modal-close')?.focus()
      }, 0)
    }

    return () => {
      document.body.style.overflow = ''
      previousFocusRef.current?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <Overlay onClick={onClose} onKeyDown={handleKeyDown}>
      <Dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="modal-title">
            {title}
          </h4>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            &#x2715;
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </Dialog>
    </Overlay>
  )
}

export default Modal
