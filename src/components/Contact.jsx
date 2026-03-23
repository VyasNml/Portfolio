import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <h2 className="section-title">
        Let's <span className="accent-text">Talk</span>
      </h2>

      <p className="contact-description">
        What led you here? What are you looking for? I would love to hear from
        you over a virtual coffee chat!
      </p>

      <div className="contact-actions">
        <a href="mailto:hello@example.com" className="contact-btn primary">
          Let's get in touch <FaTelegramPlane />
        </a>
      </div>

      {/* Decorative grid background */}
      <div className="contact-grid-bg" />
    </section>
  );
};

export default Contact;
