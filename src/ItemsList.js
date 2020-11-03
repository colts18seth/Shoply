import Item from './Item';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from './actions';
import './ItemList.css';

function ItemsList() {
    const data = useSelector(state => state.data.products);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCart = (item) => dispatch(add(item));
    const removeFromCart = (item) => dispatch(remove(item));

    return (
        <div className="ItemsList container mt-5">
            <div className="row">
                {data.map(item =>
                    (
                        <div key={uuid()} className="col-4 p-2">
                            <Item item={item} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default ItemsList;