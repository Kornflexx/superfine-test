import { h, render } from 'superfine'
import { withState } from '../utils/renderWithState'

const Test2 = () => (
    <div
        onupdate={() => console.log('update test2')}
    >
        Component that update every time (should ?)
    </div>
)

const Test = props => (
    <div
        onupdate={() => console.log('update test')}
    >
        <input
            type="text"
            value={props.name}
            oninput={e => props.setState({ name: e.target.value })}
        />
        <h1>
            {props.name}
        </h1>
    </div>
)

const StatedTest = withState({
    name: 'Component with state'
})(Test)


const App = props =>
  <div>
    <Test2 />
    <StatedTest />
  </div>


export default App
