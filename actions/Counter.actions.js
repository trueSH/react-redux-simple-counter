import * as types from '../constants/counter.const';

export function increment() {
    return {
        type: types.INCREMENT
    }
}

export function decrement() {
    return {
        type: types.DECREMENT
    }
}

export function increment10() {
    return {
        type: types.INCREMENT10
    }
}
