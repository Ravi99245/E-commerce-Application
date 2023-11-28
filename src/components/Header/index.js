import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-bar">
      <div className="nav-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="header-img"
          alt="website logo"
        />
        <div className="menu-container">
          <ul className="nav-menu">
            <Link to="/" className="link-item">
              <li className="item">Home</li>
            </Link>
            <Link to="/products" className="link-item">
              <li className="item">Products</li>
            </Link>
            <Link to="/cart" className="link-item">
              <li className="item">Cart</li>
            </Link>
          </ul>
          <button className="logout-desktop-btn" type="button">
            Logout
          </button>
          <button className="logout-mobile-button" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              className="log-mobile-out-img"
              alt="nav logout"
            />
          </button>
        </div>
      </div>
      <div className="mobile-menu">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            className="mobile-menu-img"
            alt="nav home"
          />
        </Link>
        <Link to="/products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            className="mobile-menu-img"
            alt="nav products"
          />
        </Link>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            className="mobile-menu-img"
            alt="nav cart"
          />
        </Link>
      </div>
    </nav>
  </>
)

export default Header
