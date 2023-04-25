const { render, screen } = require("@testing-library/react")
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => {
    const title = 'Hola, soy Goku'
    const subTitle = 123456

    test('Debe coincidir con el snapshot', () => {
        const { container } = render(<FirstApp title={ title }/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar el mensaje Hola, soy Goku', () => {
        render(<FirstApp title={ title }/>)
        expect(screen.getByText(title)).toBeTruthy()
    })

    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={ title }/>)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
    })

    test('Debe mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={ title } subTitle={ subTitle }/>)
        expect(screen.getAllByText(subTitle).length).toBe(2)
    })
})
