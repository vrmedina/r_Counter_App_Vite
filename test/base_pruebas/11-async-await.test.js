import { getImagen } from "../../src/base_pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar el url de la imagen', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })

    test('getImagen debe retornar un error si no existe la imagen', async () => {
        const resp = await getImagen();
        expect(resp).not.toBe('No se encontro la imagen');
    })
})
