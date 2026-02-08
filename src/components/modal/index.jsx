import "./index.css";

export function Modal({ fechar }) {
  return (
    <div className="overlay" onClick={fechar}>
      {/* Esse stop faz com que se clicar dentro da div ele não feche */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Meu Modal</h2>
        <p>Esse é o conteúdo do modal</p>

        <button onClick={fechar}>Fechar</button>
      </div>
    </div>
  );
}
