import estilos from "./BotonAccesible.module.css";

export default function BotonAccesible({ onClick, texto, ariaLabel, tipo = "primario" }) {
  const claseBoton = `${estilos.boton} ${estilos[tipo]}`;

  return (
    <button 
      className={claseBoton} 
      onClick={onClick} 
      aria-label={ariaLabel}
    >
      {texto}
    </button>
  );
}
