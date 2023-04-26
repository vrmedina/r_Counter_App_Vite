const { render, screen, fireEvent } = require("@testing-library/react")
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en <CounterApp />', () => {
    const value = 10

    test('Debe mostrar <CounterApp /> correctamente', () => {
        const { container } = render(<CounterApp value={ value }/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar el valor por defecto de 100', () => {
        const { getByText } = render(<CounterApp />)
        expect(getByText('100')).toBeTruthy()
    })

    test('Debe incrementar con el boton +1', () => {
        const { getByText } = render(<CounterApp value={ value }/>)
        fireEvent.click(screen.getByText('+1'))
        expect(getByText('11')).toBeTruthy()
    })

    test('Debe decrementar con el boton -1', () => {
        const { getByText } = render(<CounterApp value={ value }/>)
        fireEvent.click(screen.getByText('-1'))
        expect(getByText('9')).toBeTruthy()
    })

    test('Debe resetear con el boton reset', () => {
        render(<CounterApp value={ value }/>)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('Reset'))
        
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        
        screen.getByText('10')
        //screen.debug()
    })
})