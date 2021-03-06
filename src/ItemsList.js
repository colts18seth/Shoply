import Item from './Item';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, increment, decrement } from './actions';
import './ItemList.css';

function ItemsList() {
    const data = useSelector(state => state.data.products);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCart = (e, item) => {
        e.stopPropagation();
        dispatch(add(item));
    }
    const removeFromCart = (e, item) => {
        e.stopPropagation();
        dispatch(remove(item));
    }
    const incrementCount = (e, item) => {
        e.stopPropagation();
        dispatch(increment(item));
    }
    const decrementCount = (e, item) => {
        e.stopPropagation();
        dispatch(decrement(item));
    }

    return (
        <div className="ItemsList container mt-5">
            <div className="row">
                {data.map(item =>
                    (
                        <div key={uuid()} className="col-4 p-2">
                            <Item item={item} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} incrementCount={incrementCount} decrementCount={decrementCount} itemDetails={false} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default ItemsList;