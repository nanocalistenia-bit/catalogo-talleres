import estilos from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller }) {
  const { titulo, categoria, cupo, inscriptos } = taller;
  const libres = cupo - inscriptos;

  return (
    <article className={estilos.tarjeta}>
      <h2>{titulo}</h2>
      <p className="text-muted">{categoria}</p>
      <p>Cupos libres: {libres} de {cupo}</p>
    </article>
  );
}
