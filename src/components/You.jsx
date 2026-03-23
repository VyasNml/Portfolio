import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';
import { SiLeetcode } from "react-icons/si";
import profileImg from '../assets/profile.png';

const You = () => {
  const socialLinks = [
    // { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    // { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <SiLeetcode /> , href: 'https://codolio.com/profile/VyasNml', label: 'Coding Portfolio' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/vyasnademmal/', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/VyasNml', label: 'GitHub' },
  ];

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
          {/* <p className="hero-description">
            IT Specialist &amp; Full-Stack Developer | Pragmatic,
            delivery-oriented | Fintech &amp; Cloud | India
          </p> */}

          <div className="hero-actions">
            <button className="cv-btn">
              VIEW CV <IoChevronForward />
            </button>

            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
      <div className="contact-grid-bg" />
    </section>
  );
};

export default You;
