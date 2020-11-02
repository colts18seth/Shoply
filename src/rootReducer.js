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
            return { ...state, cart: { ...state.cart, ...action.item } }
        case REMOVE:
            let newState = state.cart.filter(item => action.key !== item.key);
            return { ...state, cart: { newState } }
        default:
            return state;
    }
}

export default rootReducer;