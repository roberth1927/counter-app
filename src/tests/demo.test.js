describe('Preubas en alchivo demo.test.js', () => {

  test('deben ser iguales los strings', () => {

    //1 . inicializacion

    const mensaje = 'hola mundo';

    //2. estimulo
    const mensaje2 = "hola mundo";

    //3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);

  })
})
