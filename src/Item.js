import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item, cart, addToCart, removeFromCart, incrementCount, decrementCount, itemDetails }) {

    return (
        <div className="Item">
            <div className="card">
                {itemDetails &&
                    <div className="imgDiv">
                        <img src={item.data.image_url} className="card-img-top" alt={item.data.name} />
                    </div>
                }
                <div className="card-body">
                    <h5 className="card-title">{item.data.name.toUpperCase()}</h5>
                    {itemDetails &&
                        <p className="card-text">{item.data.description}</p>
                    }
                    <p className="h4">{`$${item.data.price}`}</p>
                    {!itemDetails &&
                        <Link to={`/products/${item.key}`}>
                            <button className="btn btn-sm btn-info mb-2">More Details</button>
                        </Link>
                    }
                    {!cart.hasOwnProperty(item.data.name) ?
                        <button onClick={(e) => addToCart(e, item)} className="btn btn-success">Add to Cart</button> :
                        <div>
                            <div className="p-3">
                                {cart[item.data.name].count === 1 ?
                                    <button className="sm-btn btn-danger px-2">-</button> :
                                    <button onClick={(e) => decrementCount(e, item)} className="sm-btn btn-danger px-2">-</button>
                                }
                                <span className="count px-2">{cart[item.data.name].count}</span>
                                <button onClick={(e) => incrementCount(e, item)} className="sm-btn btn-success">+</button>
                            </div>
                            <button onClick={(e) => removeFromCart(e, item)} className="btn btn-warning">Remove from Cart</button>
                        </div>
                    }
                    {itemDetails &&
                        <Link to="/">
                            <button className="btn btn-info btn-sm mt-2">Back to Store</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default Item;