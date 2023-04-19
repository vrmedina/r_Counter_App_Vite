test('Esta prueba no falla', () => {
    if ( 1 === 0 ) {
        throw new Error('No se puede dividir entre cero')
    }
})