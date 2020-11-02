import Item from './Item';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import './ItemList.css';

function ItemsList() {
    const data = useSelector(state => state.data);

    return (
        <div className="ItemsList container mt-5">
            <div className="row">
                {data.products.map(item =>
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

export default ItemsList;