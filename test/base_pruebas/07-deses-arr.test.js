import { retornaArreglo } from "../../src/base_pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 
    test('debe de retornar un string y un número', () => { 
        // 1. Arrange
        // 2. Act
        const [ letters, numbers ] = retornaArreglo() // ['ABC', 123]

        // 3. Assert
        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        expect(letters).toEqual( expect.any(String) )
    })
 })