import { useState } from "react";
import { IoChevronForward } from 'react-icons/io5';
import profileImg from '../assets/profile.png';
import Popup from "./popup.jsx";
import cv from "../assets/cv.pdf"

const You = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="hero" id="professional">
      <div className="contact-grid-bg" />
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-label">Big Data Engineer</p>
          <h1 className="hero-title">
            Hello I'm
            <span className="name">Vyas</span>
            <span className="name">Nademmal</span>
          </h1>
          <p className="hero-description">
            Data Science | Machine Learning | Data Analytics | Problem-solving | Python
          </p>

          <div className="hero-actions">
            
            <button className="cv-btn" onClick={() => setShowPopup(true)}>
              VIEW CV <IoChevronForward />
            </button>
          </div>
        </div>

      <div className="hero-image">
          <div className="profile-image-wrapper">
            <div className="profile-ring" />
            <div className="profile-ring-inner" />
            <img src={profileImg} alt="Profile" />
          </div>
        </div>
      </div>

      {/* CV Popup component */}
      {showPopup && (
        <Popup
          title="My CV"
          pdfUrl={cv}
          onClose={() => setShowPopup(false)}
        />
      )}

      <div className="contact-grid-bg" />
    </section>
  );
};

export default You;
