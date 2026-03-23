import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    // { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    // { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <SiLeetcode /> , href: 'https://codolio.com/profile/VyasNml', label: 'Coding Portfolio' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/vyasnademmal/', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/VyasNml', label: 'GitHub' }
  
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Vyas Nademmal</p>

        <div className="footer-socials">
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
    </footer>
  );
};

export default Footer;
