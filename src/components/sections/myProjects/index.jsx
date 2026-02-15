import "./index.css";
import projects from "../../../data/myProjectsData.json";
import { useState } from "react";

export function MyProjectsSection() {
  // Constante de projetos para carregar
  const PROJECTS_PER_LOAD = 3;
  // Mostrar projetos visíveis
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_LOAD);

  // Função para carregar mais projetos
  function loadMoreProjects() {
    setVisibleProjects((prev) => prev + PROJECTS_PER_LOAD);
  }

  // Função para remover projetos
  function removeProjects() {
    setVisibleProjects((prev) =>
      Math.max(PROJECTS_PER_LOAD, prev - PROJECTS_PER_LOAD),
    );
  }

  return (
    <>
      <section className="content_section" id="projects-section">
        <h1 className="my_projects_main_title">
          <strong>MEUS PROJETOS</strong>
        </h1>

        <div className="projects_grid">
          {projects.slice(0, visibleProjects).map((project) => (
            <div className="project_box" key={project.id}>
              <h2 className="project_name">{project.name}</h2>

              <p className="project_description">{project.description}</p>

              <ul className="project_details">
                <li>
                  <p>
                    <strong>Desenvolvedor:</strong> {project.developer}
                  </p>
                </li>

                <li>
                  <p>
                    <strong>Tecnologias utilizadas:</strong>{" "}
                    {project.technologies.join(", ")}
                  </p>
                </li>

                <li>
                  <p>
                    <strong>Data:</strong> {project.date}
                  </p>
                </li>
              </ul>

              <a
                className="goto_repository"
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Repositório
              </a>
            </div>
          ))}
        </div>

        <div className="load_more_container">
          {/* Botão de carregar mais projetos */}
          <button
            className="load_more_button"
            onClick={loadMoreProjects}
            disabled={visibleProjects >= projects.length}
          >
            CARREGAR PROJETOS
          </button>
          {/* Botão de retirar projetos */}
          <button
            className="collapse_projects_button"
            onClick={removeProjects}
            aria-label="Mostrar menos projetos"
            disabled={visibleProjects <= PROJECTS_PER_LOAD}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>
      </section>
    </>
  );
}
