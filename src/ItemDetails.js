import Item from './Item';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, increment, decrement } from './actions';

function ItemDetails() {
    const { id } = useParams();
    const data = useSelector(state => state.data.products);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const item = data.filter(item => item.key === id);

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
        <div className="col-6 p-2 m-auto">
            <Item item={item[0]} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} incrementCount={incrementCount} decrementCount={decrementCount} itemDetails={true} />
        </div >
    );
}

export default ItemDetails;