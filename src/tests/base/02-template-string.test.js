import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas del template string', () => {

  test('Get saludo debe retornar hola roberth', () => {
    const nombre = "Roberth";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre);

  })

  test('Debe regresar hola carlo si no hay argumento en el nombre', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos');
  })
})
