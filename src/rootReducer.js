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
            let name = action.item.data.name;
            return {
                ...state, cart: { ...state.cart, [name]: { ...action.item } }
            }
        case REMOVE:
            if (state.cart.hasOwnProperty(action.item.data.name)) {
                console.log("included")
                delete state.cart[action.item.data.name];
            }
            return { ...state, cart: { ...state.cart } }
        default:
            return state;
    }
}

export default rootReducer;