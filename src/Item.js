
import './Item.css';

function Item({ item }) {
    return (
        <div className="Item">
            <div className="card">
                <img src={item.data.image_url} className="card-img-top" alt={item.data.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.data.name}</h5>
                    <p className="card-text">{item.data.description}</p>
                    <p className="h4">Price: {`$${item.data.price}`}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Item;