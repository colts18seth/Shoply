import jsonData from './data.json';
import { ADD, REMOVE } from './actionTypes';

const data = { products: [] };
for (let key in jsonData.products) {
    data.products.push({ key: key, data: jsonData.products[key] })
}

const INITIAL_STATE = {
    data,
    cart: {}
}

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return {}
        case REMOVE:
            return {}
        default:
            return state;
    }
}

export default rootReducer;