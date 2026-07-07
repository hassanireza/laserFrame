import { useState } from "react";
import { navLinks, siteConfig } from "../data/site";

interface NavbarProps {
  activeSection: string | null;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => setIsMenuOpen((open) => !open);
  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt={siteConfig.name} className="logo-img" />
      </div>

      <button
        type="button"
        className={`menu-toggle${isMenuOpen ? " active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
      </button>

      <ul className={`nav-links${isMenuOpen ? " active" : ""}`}>
        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={
                  [link.isPrimary ? "btn-primary" : "", isActive ? "is-active" : ""]
                    .filter(Boolean)
                    .join(" ") || undefined
                }
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
