import { getHeroeById, getHeroesByOwner } from "../../src/base_pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        // 1. Arrange
        const id = 1
        const heroe = getHeroeById(id)
        // 2. Act
        // 3. Assert
        expect(heroe).toEqual(heroes[0])
    })
    
    test('getHeroeById debe retornar undefined si heroe no existe', () => {
        // 1. Arrange
        const id = 10
        const heroe = getHeroeById(id)
        // 2. Act
        // 3. Assert
        expect(heroe).toBe(undefined)
        // expect(heroe).toBeFalsy() // undefined, null, 0, ''
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        // 1. Arrange
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        // 2. Act
        // 3. Assert
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
        expect(heroes.length).toBe(3)
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        // 1. Arrange
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        // 2. Act
        // 3. Assert
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
        expect(heroes.length).toBe(2)
    })
})
