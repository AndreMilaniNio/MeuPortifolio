import "./index.css";

export function Header() {
  return (
    <>
      <header id="headerComponent">
        <div className="title_text_div">
          <h1 className="header_title">Bem-vindo</h1>
          <i class="fa-solid fa-face-laugh-beam"></i>
        </div>

        <nav>
          <ul className="navbar_list">
            <li className="navbar_item">
              <a className="navbar_link" href="#about-me-section">
                sobre Mim
              </a>
            </li>
            <li className="navbar_item">
              <a className="navbar_link" href="#projects-section">
                projetos
              </a>
            </li>
            <li className="navbar_item">
              <a className="navbar_link" href="">
                contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
