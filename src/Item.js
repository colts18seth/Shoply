
import './Item.css';

function Item({ item, addToCart, removeFromCart }) {
    return (
        <div className="Item">
            <div className="card">
                <img src={item.data.image_url} className="card-img-top" alt={item.data.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.data.name.toUpperCase()}</h5>
                    <p className="card-text">{item.data.description}</p>
                    <p className="h4">{`$${item.data.price}`}</p>
                    <button onClick={() => addToCart(item)} className="btn btn-info">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Item;