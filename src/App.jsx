import { useState } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";

export default function App() {
  const [tema, setTema] = useState("claro");

  const toggleTema = () => {
    setTema(tema === "claro" ? "oscuro" : "claro");
  };

  return (
    <div data-tema={tema} style={{ minHeight: "100vh" }}>
      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold">Catálogo de Talleres</h1>
          <button className="btn btn-outline-secondary" onClick={toggleTema}>
            {tema === "claro" ? "Tema oscuro" : "Tema claro"}
          </button>
        </div>

        <div className="row g-4">
          {talleres.map((taller) => (
            <div key={taller.id} className="col-12 col-md-6 col-lg-4">
              <TarjetaTaller taller={taller} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
