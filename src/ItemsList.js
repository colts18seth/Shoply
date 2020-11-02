import Item from './Item';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from './actions';
import './ItemList.css';

function ItemsList() {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    const addToCart = (item) => dispatch(add(item));
    const removeFromCart = () => dispatch(remove());

    return (
        <div className="ItemsList container mt-5">
            <div className="row">
                {data.products.map(item =>
                    (
                        <div key={uuid()} className="col-4 p-2">
                            <Item item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default ItemsList;