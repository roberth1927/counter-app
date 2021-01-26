const nombre = "Roberth";
const apellido = "MOrales";

const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = "Carlos") {
  return 'Hola ' + nombre;
}
