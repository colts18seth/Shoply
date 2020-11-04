
import './Item.css';

function Item({ item, cart, addToCart, removeFromCart, incrementCount, decrementCount }) {

    return (
        <div className="Item">
            <div className="card">
                <div className="imgDiv">
                    <img src={item.data.image_url} className="card-img-top" alt={item.data.name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.data.name.toUpperCase()}</h5>
                    <p className="card-text">{item.data.description}</p>
                    <p className="h4">{`$${item.data.price}`}</p>
                    {!cart.hasOwnProperty(item.data.name) ?
                        <button onClick={() => addToCart(item)} className="btn btn-info">Add to Cart</button> :
                        <div>
                            <div className="p-3">
                                {cart[item.data.name].count === 1 ?
                                    <button className="sm-btn btn-danger px-2">-</button> :
                                    <button onClick={() => decrementCount(item)} className="sm-btn btn-danger px-2">-</button>
                                }
                                <span className="count px-2">{cart[item.data.name].count}</span>
                                <button onClick={() => incrementCount(item)} className="sm-btn btn-success">+</button>
                            </div>
                            <button onClick={() => removeFromCart(item)} className="btn btn-warning">Remove from Cart</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Item;