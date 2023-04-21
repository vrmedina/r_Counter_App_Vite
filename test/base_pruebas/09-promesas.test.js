describe("Pruebas en 09-promesas", () => {
    test("getHeroeByIdAsync debe retornar un heroe async", (done) => {
        // 1. Arrange
        const id = 1;

        // 2. Act
        getHeroeByIdAsync(id).then((heroe) => {
        // 3. Assert
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

    test("getHeroeByIdAsync debe retornar un error si el heroe por id no existe", (done) => {
        // 1. Arrange
        const id = 10;
        
        // 2. Act
        getHeroeByIdAsync(id).catch((error) => {
        // 3. Assert
            expect(error).toBe("No se pudo encontrar el héroe");
            done();
        });
    });
});
