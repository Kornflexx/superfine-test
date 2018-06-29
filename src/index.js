import { h, render } from "superfine"
import App from './components/App'
import renderWithState from './utils/renderWithState'

renderWithState(null, App, document.querySelector('#app'))

