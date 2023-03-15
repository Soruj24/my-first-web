const { createStore } = require("redux");



const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state

const ininialCounterState = {
    count: 0,
}
const ininialUserState = {
    users: [
        {
            name: "Soruj Mahmud"
        }
    ]
}

// action - object - type ,payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}


const counterReducer = (state = ininialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }


        default:
            state;
    }
}

const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCounter());