import { useState } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";
import BotonAccesible from "./components/BotonAccesible/BotonAccesible";

export default function App() {
  const [tema, setTema] = useState("claro");
  const [vista, setVista] = useState("grilla");
  const [compacto, setCompacto] = useState(false);

  const toggleTema = () => {
    setTema(tema === "claro" ? "oscuro" : "claro");
  };

  return (
    <div data-tema={tema} style={{ minHeight: "100vh" }}>
      <main className="container py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
          <h1 className="fw-bold mb-0">Catálogo de Talleres</h1>
          
          <div className="d-flex flex-wrap gap-2">
            <BotonAccesible 
              onClick={() => setCompacto(!compacto)}
              texto={compacto ? "Modo Normal" : "Modo Compacto"}
              ariaLabel="Alternar entre modo de visualización compacto y normal"
              tipo="secundario"
            />
            <BotonAccesible 
              onClick={() => setVista(vista === "grilla" ? "lista" : "grilla")}
              texto={vista === "grilla" ? "Ver como Lista" : "Ver como Grilla"}
              ariaLabel="Alternar distribución de tarjetas entre grilla y lista"
              tipo="secundario"
            />
            <BotonAccesible 
              onClick={toggleTema}
              texto={tema === "claro" ? "Tema Oscuro" : "Tema Claro"}
              ariaLabel="Cambiar el esquema de colores de la página"
              tipo="secundario"
            />
          </div>
        </div>

        <div className="row g-4">
          {talleres.map((taller) => (
            <div 
              key={taller.id} 
              className={vista === "grilla" ? "col-12 col-md-6 col-lg-4" : "col-12"}
            >
              <TarjetaTaller taller={taller} compacto={compacto} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
