const { render } = require("@testing-library/react")
import FirstApp from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => {
    test('Debe coincidir con la captura', () => {
        render(<FirstApp />)
    })
})
