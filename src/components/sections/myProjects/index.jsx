import { Modal } from "../../modal";
import { useState } from "react";
import "./index.css";

export function MyProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="content-section" id="projects-section">
        <div>
          <button onClick={() => {setModalOpen(true)}}>
            Abrir Modal
          </button>

          {modalOpen && <Modal fechar={() => setModalOpen(false)} />}
        </div>
      </section>
    </>
  );
}
