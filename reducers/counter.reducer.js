import * as types from '../constants/counter.const';

export default function CounterApp(state = 0, action) {
    switch(action.type) {
        case types.INCREMENT:
            return state = state + 1;
        case types.DECREMENT:
            if (state !== 0) {
                return state = state - 1;
            }
            return state;
        case types.INCREMENT10:
            return state = state + 10;
    }
    return state;
}
