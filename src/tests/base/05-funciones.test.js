import {getUser, getUsuarioActivo} from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {

  test('get usuario debe retornar un objeto', () => {

    const userTest = {
      uid: 'ABC123',
      username: 'Robert'
    }

    const user = getUser();

    expect(user).toEqual(userTest);

  })

  //getUsuarioActivo debe retornar un objeto
  describe('pruebas a la funcion 05- funciones funcion con parametros', () => {

    test('getUsuarioActivo activo debe retoranr un objeto', () => {

      const nombre = "Beni"

      const userActivo = {
        uid: 'ABC567',
        username: 'Beji'
      }
      const user = getUsuarioActivo(nombre);

      expect(user).toEqual(userActivo)
    })
  })
})











