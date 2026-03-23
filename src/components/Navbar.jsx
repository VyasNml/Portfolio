import { useState } from 'react';
import { IoGlobeOutline } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Professional');

  const links = ['Professional', 'Contact'];

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        Vyas <span className="dot">.</span>
      </a>

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
    </nav>
  );
};

export default Navbar;
