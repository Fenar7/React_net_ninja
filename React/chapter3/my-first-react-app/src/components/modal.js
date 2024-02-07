import ReactDOM from 'react-dom'
import './modal.css'

export default function modal({children, handleClose, isSalesModal}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={{border: "4px solid",
      borderColor: isSalesModal ? "#ff0000": "#00ff00",
      textAlign: "center",
      }}>
       {children}
       <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ), document.body)
}

