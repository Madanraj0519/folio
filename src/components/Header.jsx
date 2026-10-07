import React, { useState } from "react";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { useShowMode } from "../DarkMode";

const navigation = [
  { label: "About", href: "/#About" },
  { label: "Skills", href: "/#Skills" },
  { label: "Projects", href: "/#Project" },
  { label: "Experience", href: "/#Experience" },
  { label: "Contact", href: "/#Contact" },
];

const Header = () => {
  const { isShowDark, toggleDarkMode } = useShowMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand-mark" href="/#Hero" onClick={closeMenu} aria-label="Madanraj, home">
          M<span>.</span>
        </a>

        <nav className={`site-nav${isMenuOpen ? " site-nav--open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleDarkMode}
            aria-label={`Switch to ${isShowDark ? "light" : "dark"} theme`}
            title={`Switch to ${isShowDark ? "light" : "dark"} theme`}
          >
            {isShowDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
          <a className="button button--small header-contact" href="mailto:madanraj0519@gmail.com">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav${isMenuOpen ? " mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
