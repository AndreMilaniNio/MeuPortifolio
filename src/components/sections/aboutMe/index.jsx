import "./index.css";

export function AboutMeSection() {
  return (
    <>
      <section className="content-section" id="about-me-section">
        <div className="about-me-text-box">
          <h1>Um Pouco Sobre Mim:</h1>
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
            <h2 className="technologies_title">Tecnologias Que Utilizo:</h2>
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
        <div class="border-animada">
          <img
            className="about-me-image"
            src="../../../src/images/Fotoperfil.jpg"
            alt="Imagem de André Milani"
          />
        </div>
      </section>
    </>
  );
}
