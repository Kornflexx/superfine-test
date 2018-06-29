import { h, render } from 'superfine'

const mainNode = {
    last: null,
    next: null,
    container: null
}

export const withState = (initialState) => (ComponentToWrap) => {
    const state = { ...initialState }
    const setState = (partialState) => {
        for (const key in partialState) {
            state[key] = partialState[key]
        }
        mainNode.last = render(mainNode.last, mainNode.next(), mainNode.container)
    }
    const WrappedComponent = (props) => (
        <ComponentToWrap
            {...props}
            {...state}
            setState={setState}
        />
    )
    return WrappedComponent
}

export default (last, next, container) => {
    mainNode.next = next
    mainNode.container = container
    mainNode.last = render(last, next(), container)
}
