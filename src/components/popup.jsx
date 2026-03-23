import { IoClose } from 'react-icons/io5';

const Popup = ({ title, pdfUrl, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2 className="popup-title">{title}</h2>
          <button className="popup-close" onClick={onClose} aria-label="Close">
            <IoClose />
          </button>
        </div>
        <div className="popup-body">
          <iframe
            src={pdfUrl}
            title="CV PDF"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;