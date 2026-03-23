
const Popup = ({ title, pdfUrl, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          width: "80%",
          maxWidth: "800px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ textAlign: "center", padding: "1rem 0" }}>{title}</h2>

        <iframe
          src={pdfUrl}
          style={{ flex: 10, border: "none" }}
          title="CV PDF"
        />

        <button
          style={{ margin: "1rem auto" }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;