import { ADD, REMOVE } from './actionTypes';

export function add(item) {
    return {
        type: ADD,
        item
    };
}

export function remove(key) {
    return {
        type: REMOVE,
        key
    };
}