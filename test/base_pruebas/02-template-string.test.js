import { getSaludo } from "../../src/base_pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe de retornar Hola Victor', () => {
        // 1. Arrange
        const nombre = 'Victor';

        // 2. Act
        const saludo = getSaludo(nombre);

        // 3. Assert
        expect(saludo).toBe('Hola ' + nombre);
    })
})
