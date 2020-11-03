import Item from './Item';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="Cart">
            <div className="row">
                {cart.map(item =>
                    (
                        <div key={uuid()} className="col-4 p-2">
                            <Item item={item} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Cart;