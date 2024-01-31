import './modal.css'

export default function modal({children, handleClose}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
       {children}
       <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

