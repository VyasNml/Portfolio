import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";


const Navbar = () => {
  const socialLinks = [
      { icon: <SiLeetcode /> , href: 'https://codolio.com/profile/VyasNml', label: 'Coding Portfolio' },
      { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/vyasnademmal/', label: 'LinkedIn' },
      { icon: <FaGithub />, href: 'https://github.com/VyasNml', label: 'GitHub' },
    ];

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        VyasNml <span className="dot">.</span>
      </a>

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

{/*  
      <div className="navbar-links">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={activeLink === link ? 'active' : ''}
            onClick={() => setActiveLink(link)}
          >
            {link}
          </a>
        ))}
        <button className="lang-btn">
          <IoGlobeOutline />
          English
          <IoMdArrowDropdown />
        </button>
      </div>
*/}
    </nav>
  );
};

export default Navbar;
