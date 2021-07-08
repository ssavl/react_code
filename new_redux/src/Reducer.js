const initState = {
    counter: 2021
}

export default function Reducer (state = initState, actions) {
    if (actions.type === "ADD") {
        return {
            counter: this.state.counter + 1
        }
    }
    if (actions.type === "SUB") {
        return {
            counter: this.state.counter - 1
        }
    }
    return state
}
