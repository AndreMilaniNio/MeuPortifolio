// Importação de imagem
import fotoDePerfil from "../../../assets/Fotoperfil.jpg";
// CSS's
import "./styles/aboutMeSection.css";
import "./styles/technologies.css";
import "./styles/profileImage.css";
import "./styles/animations.css";
// Responsividade
import "./styles/mediaQuerys/mobileCss.css";
import "./styles/mediaQuerys/tabletCss.css";

export function AboutMeSection() {
  return (
    <>
      <section className="content_section" id="about-me-section">
        <div className="about_me_text_box">
          <h1 className="about_me_title">
            <strong>UM POUCO SOBRE MIM</strong>
          </h1>
          <br />
          <p>
            Sou desenvolvedor Full Stack, formado como técnico em
            Desenvolvimento de Sistemas pelo projeto Rio Pomba Valley e também
            eletricista industrial formado pelo SENAI em 2024. Gosto de unir
            lógica, tecnologia e prática para criar soluções funcionais.
          </p>
          <br />
          <p>
            Tenho interesse constante em aprender, explorar novas ferramentas e
            evoluir tanto na área de software quanto na tecnologia em geral,
            gosto de jogos de tabuleiros, algumas séries e passo a maior parte
            de meu tempo estudando.
          </p>
          <br />

          <div className="tech">
            <h2 className="tech_title">TECNOLOGIAS QUE UTILIZO</h2>

            {/* Grid que contém todas as tecnologias */}
            <div className="tech_grid">
              <div className="tech_item">
                <i className="tech_icon fa-brands fa-square-js"></i>
                <span className="tech_name">JavaScript</span>
              </div>

              <div className="tech_item">
                <i className="tech_icon fa-brands fa-node-js"></i>
                <span className="tech_name">Node.js</span>
              </div>

              <div className="tech_item">
                <i className="tech_icon fa-brands fa-git-alt"></i>
                <span className="tech_name">Git</span>
              </div>

              <div className="tech_item">
                <i className="tech_icon fa-brands fa-github"></i>
                <span className="tech_name">GitHub</span>
              </div>

              <div className="tech_item">
                <i className="tech_icon fa-brands fa-linux"></i>
                <span className="tech_name">Linux</span>
              </div>

              <div className="tech_item">
                <i className="tech_icon fa-brands fa-html5"></i>
                <span className="tech_name">HTML</span>
              </div>

              <div className="tech_item">
                <i className="tech_icon fa-brands fa-css3-alt"></i>
                <span className="tech_name">CSS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border_animada">
          <img
            className="about_me_image"
            src={fotoDePerfil}
            alt="Imagem de André Milani"
          />
        </div>
      </section>
    </>
  );
}
