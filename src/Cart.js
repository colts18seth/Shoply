import Item from './Item';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, increment, decrement } from './actions';
import './Cart.css';

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCart = (item) => dispatch(add(item));
    const removeFromCart = (item) => dispatch(remove(item));
    const incrementCount = (item) => dispatch(increment(item));
    const decrementCount = (item) => dispatch(decrement(item));

    return (
        <div className="Cart container mt-5">
            <div className="row">
                {/* {cart.map(item =>
                    (
                        <div key={uuid()} className="col-4 p-2">
                            <Item item={item} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} incrementCount={incrementCount} decrementCount={decrementCount} />
                        </div>
                    )
                )} */}
            </div>
        </div>
    );
}

export default Cart;