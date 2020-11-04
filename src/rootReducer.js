import jsonData from './data.json';
import { ADD, INCREMENT, DECREMENT, REMOVE } from './actionTypes';

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
            let name = action.item.data.name;
            return {
                ...state, cart: { ...state.cart, [name]: { ...action.item, count: 1 } }
            }
        case REMOVE:
            if (state.cart.hasOwnProperty(action.item.data.name)) {
                delete state.cart[action.item.data.name];
            }
            return { ...state, cart: { ...state.cart } }
        case INCREMENT:
            state.cart[action.item.data.name].count += 1;
            return { ...state, cart: { ...state.cart } }
        case DECREMENT:
            state.cart[action.item.data.name].count -= 1;
            return { ...state, cart: { ...state.cart } }
        default:
            return state;
    }
}

export default rootReducer;