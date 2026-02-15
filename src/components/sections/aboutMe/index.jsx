// Importação de imagem
import fotoDePerfil from "../../../assets/Fotoperfil.jpg"
import "./index.css";

export function AboutMeSection() {
  return (
    <>
      <section className="content_section" id="about-me-section">
        <div className="about_me_text_box">
          <h1 className="about_me_title"><strong>UM POUCO SOBRE MIM</strong></h1>
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

          <div className="technologies">
            <h2 className="technologies_title">TECNOLOGIAS QUE UTILIZO</h2>
            <div className="technologies_icons">
              <i className="technologies_icon fa-brands fa-square-js"></i>
              <i className="technologies_icon fa-brands fa-node-js"></i>
              <i className="technologies_icon fa-brands fa-git-alt"></i>
              <i className="technologies_icon fa-brands fa-github"></i>
              <i className="technologies_icon fa-brands fa-linux"></i>
              <i className="technologies_icon fa-brands fa-html5"></i>
              <i className="technologies_icon fa-brands fa-css3-alt"></i>
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
