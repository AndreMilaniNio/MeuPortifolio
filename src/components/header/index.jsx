import "./index.css";
import { useState } from "react";

export function Header() {
  // Menu hambúrguer
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header id="headerComponent">
        <div className="title_text_div">
          <h1 className="header_title">Bem-vindo</h1>
          <i class="fa-solid fa-face-laugh-beam"></i>
        </div>

        <button
          className={`menu_toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <ul className={`navbar_list ${menuOpen ? "active" : ""}`}>
            <li className="navbar_item">
              <a className="navbar_link" href="#about-me-section">
                sobre mim
              </a>
            </li>
            <li className="navbar_item">
              <a className="navbar_link" href="#projects-section">
                projetos
              </a>
            </li>
            <li className="navbar_item">
              <a className="navbar_link" href="#contact">
                contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
