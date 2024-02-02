import '../styles/Modal.css'

function Modal({ isOpen, onClose, children }) {
   if (!isOpen) {
    return null;
 }
  return (
    <div className="modal-background">
      <div className="modal">
        <button onClick={onClose}>Close</button>
        modal
      </div>
    </div>
  )
}

export default Modal;