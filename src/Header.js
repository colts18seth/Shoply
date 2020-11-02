import './Header.css';

function Header() {
    return (
        <div className="Header">
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Shoply</span>
                <span className="text-light">Cart</span>
            </nav>
        </div>
    );
}

export default Header;