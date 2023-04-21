import { getUser, getUsuarioActivo } from "../../src/base_pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        // 1. Arrange
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        // 2. Act
        const user = getUser();

        // 3. Assert
        expect(user).toEqual(userTest);
    })

    // Tarea
    test('getUsuarioActivo debe retornar un objeto', () => {
        // 1. Arrange
        const nombre = 'Victor';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        // 2. Act
        const user = getUsuarioActivo(nombre);

        // 3. Assert
        expect(user).toEqual(userTest);
    })
})