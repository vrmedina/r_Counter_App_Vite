import { getHeroeByIdAsync } from "../../src/base_pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe("Pruebas en 09-promesas", () => {
    test("getHeroeByIdAsync debe retornar un heroe async", (done) => { // done is a callback function
        // 1. Arrange
        const id = 1;

        // 2. Act
        getHeroeByIdAsync(id)
            .then((heroe) => {
            // 3. Assert
                expect(heroe).toBe(heroes[0]);
                done(); 
        });
    });

    test("getHeroeByIdAsync debe retornar un error si el heroe por id no existe", () => {
        // 1. Arrange
        const id = 10;
    
        // 2. Act
        getHeroeByIdAsync(id)
        // 3. Assert
            .catch((error) => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });
    });
});
