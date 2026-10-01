import { useState } from "react";
import estilos from "./TarjetaTaller.module.css";
import BotonAccesible from "../BotonAccesible/BotonAccesible";

export default function TarjetaTaller({ taller, compacto }) {
  const { titulo, categoria, cupo, inscriptos, nuevo, descripcion } = taller;
  const [expandida, setExpandida] = useState(false);

  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);

  let claseCupo = estilos.disponible;
  if (libres === 0) {
    claseCupo = estilos.completo;
  } else if (libres >= 1 && libres <= 3) {
    claseCupo = estilos.pocos;
  }

  let colorBarra = "var(--color-exito)";
  if (libres === 0) {
    colorBarra = "var(--color-peligro)";
  } else if (libres <= 3) {
    colorBarra = "var(--color-alerta)";
  }

  const clasesTarjeta = `${estilos.tarjeta} ${claseCupo} ${expandida ? estilos.expandida : ""}`;

  return (
    <article className={clasesTarjeta}>
      {nuevo && <span className={estilos.badgeNuevo}>Nuevo</span>}

      <h2 className="h4 mt-2">{titulo}</h2>
      <p className="text-muted mb-1">{categoria}</p>

      {libres === 0 ? (
        <p className={estilos.textoCompleto}>Completo</p>
      ) : (
        <p className="mb-1">Cupos libres: {libres} de {cupo}</p>
      )}

      {!compacto && (
        <>
          <div className={estilos.barraContenedor}>
            <div 
              className={estilos.barraProgreso} 
              style={{ width: `${porcentaje}%`, backgroundColor: colorBarra }}
            ></div>
          </div>
          <small className="text-muted d-block mb-3">Ocupación: {porcentaje}%</small>
        </>
      )}

      <div className="mt-auto">
        <BotonAccesible 
          onClick={() => setExpandida(!expandida)}
          texto={expandida ? "Ocultar detalles" : "Ver detalles"}
          ariaLabel={`${expandida ? 'Ocultar' : 'Ver'} detalles del taller ${titulo}`}
          tipo="primario"
        />
      </div>

      {expandida && (
        <div className="mt-3 pt-3 border-top">
          <p className="mb-0">{descripcion}</p>
        </div>
      )}
    </article>
  );
}
