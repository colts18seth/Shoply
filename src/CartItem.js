
import './CartItem.css';

function CartItem({ item, cart, removeFromCart, incrementCount, decrementCount }) {
    console.log(item)
    console.log(cart)
    // const itemIndex = cart.indexof( item );

    return (
        <div className="CartItem">
            <div className="card">
                <div className="imgDiv">
                    <img src={item.data.data.image_url} className="card-img-top" alt={item.data.name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.data.data.name.toUpperCase()}</h5>
                    <p className="card-text">{item.data.data.description}</p>
                    <p className="h4">{`$${item.data.data.price}`}</p>
                    <div>
                        <div className="p-3">
                            {item.count === 1 ?
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

export default CartItem;