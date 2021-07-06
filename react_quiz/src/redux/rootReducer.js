const initualState = {
    counter: 10,

}

export default function rootReducer(state = initualState, action) {

    if (action.type) {
        if (action.type === "ADD") {
            return {
                counter: state.counter + 1
            }
        }
        if (action.type === "SUB") {
            return {
                counter: state.counter - 1
            }
        }
        if (action.type === "ADD_NUMBER") {
            return {
                counter: state.counter + action.value
            }
        }
        else {return state}
    }

    // switch (action.type) {
    //     case 'ADD':
    //         return {
    //             counter: state.counter + 1
    //         }
    //     case 'SUB':
    //         return {
    //             counter: state.counter - 1
    //         }
    // }


    return state
}

