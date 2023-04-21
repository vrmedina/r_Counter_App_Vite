import { usContext } from "../../src/base_pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj', () => {
    test('debe de retornar un objeto', () => {
        // 1. Arrange
        const data = {
            nombre: 'Victor',
            edad: 45,
            clave: 'ABC123',
        }

        const usContextTest = {
            nombreClave: 'ABC123',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            },
        }

        // 2. Act
        const context = usContext(data)

        // 3. Assert
        expect(context).toEqual(usContextTest)
    })
})
