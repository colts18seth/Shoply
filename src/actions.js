import { ADD, REMOVE, INCREMENT, DECREMENT } from './actionTypes';

export function add(item) {
    return {
        type: ADD,
        item
    };
}

export function remove(item) {
    return {
        type: REMOVE,
        item
    };
}

export function increment(item) {
    return {
        type: INCREMENT,
        item
    };
}

export function decrement(item) {
    return {
        type: DECREMENT,
        item
    };
}