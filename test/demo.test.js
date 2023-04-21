describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no falla', () => {
        // Arrange (Preparación)
        const message = 'Hola Mundo';
    
        // Act (Acción)
        const message2 = `Hola Mundo`;
    
        // Assert (Afirmación)
        expect(message).toBe(message2);
    })
})

