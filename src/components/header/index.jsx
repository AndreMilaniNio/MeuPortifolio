import { useState, useRef, useEffect } from "react";
import "./index.css";

export function Header() {
  // Variáveis para o menu hambúrguer
  const [hambMenuOpen, setHambMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Fecha ao clicar fora (Quando o menu abrir ou fechar, execute isso.)
  useEffect(() => {
    function handleClickOutside(event) {
      // Só fecha se o clique não for no menu E não for no botão.
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setHambMenuOpen(false);
      }
    }

    // Só escute os cliques se o menu estiver aberto.
    if (hambMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Esse bloco remove o evento quando:
    //    O menu fecha
    //    O componente desmonta
    //    Isso evita bugs e eventos duplicados.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hambMenuOpen]);

  return (
    <>
      <header id="headerComponent">
        <div className="title_text_div">
          <h1 className="header_title">Bem-vindo</h1>
          <i className="fa-solid fa-face-laugh-beam"></i>
        </div>

        {/* Botão Hambúrguer */}
        <button
          ref={buttonRef}
          className={`hamburger ${hambMenuOpen ? "open" : ""}`}
          onClick={() => setHambMenuOpen((prev) => !prev)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <nav ref={menuRef} className={`nav ${hambMenuOpen ? "active" : ""}`}>
          <ul className="navbar_list">
            <li className="navbar_item">
              <a
                onClick={() => setHambMenuOpen(false)}
                className="navbar_link"
                href="#about-me-section"
              >
                sobre mim
              </a>
            </li>
            <li className="navbar_item">
              <a
                onClick={() => setHambMenuOpen(false)}
                className="navbar_link"
                href="#projects-section"
              >
                projetos
              </a>
            </li>
            <li className="navbar_item">
              <a
                onClick={() => setHambMenuOpen(false)}
                className="navbar_link"
                href="#contact"
              >
                contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
