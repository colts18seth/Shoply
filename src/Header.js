import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <nav className="navbar navbar-dark bg-dark">
                <NavLink exact to='/'>
                    <span className="navbar-brand mb-0 h1">Shoply</span>
                </NavLink>
                <NavLink exact to='/cart'>
                    <span className="text-light">Cart</span>
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;