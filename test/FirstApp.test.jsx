const { render } = require("@testing-library/react")
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => {
    // test('Debe coincidir con el snapshot', () => {
    //     const title = 'Hola soy Goku'
    //     const { container } = render(<FirstApp title={ title }/>)

    //     expect(container).toMatchSnapshot()
    // })

    test('Debe mostrar el titulo en un h1', () => {
        const title = 'Hola soy Goku'
        const { getByText, getByTestId } = render(<FirstApp title={ title }/>)

        expect(getByText(title)).toBeTruthy()

        expect(getByTestId('test-title').innerHTML).toContain(title)
    })

    test('Debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola soy Goku'
        const subTitle = 123456
        const { getByText } = render(<FirstApp title={ title } subTitle={ subTitle }/>)

        expect(getByText(subTitle)).toBeTruthy()
    })
})
