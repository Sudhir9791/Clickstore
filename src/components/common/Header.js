import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { dropdownMenu } from '../../data/headerData';
import commonContext from '../../contexts/common/commonContext';
import cartContext from '../../contexts/cart/cartContext';
import SearchBar from './SearchBar';
import './Header.css';
 
const Header = () => {

    const { formUserInfo, toggleSearch } = useContext(commonContext);
    const { cartItems } = useContext(cartContext); 

    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header" >
                <div className="headcontainer">
                    <div className="navbar">
                        <h2 className="nav_logo">
                            <Link to="/"><img className='logo' src="goku.png"/></Link>
                        </h2>
                        <nav className="nav_actions">
                            <div className="search_action">
                                <span onClick={() => toggleSearch(true)}>
                                    <AiOutlineSearch />
                                </span>
                                <div className="tooltip">Search</div>
                            </div>

                                <Link to="/cart">
                            <div className="cart_action">
                                    <AiOutlineShoppingCart  />
                                    {
                                        cartQuantity > 0 && (
                                            <span className="head_badge">{cartQuantity}</span>
                                        )
                                    }
                                <div className="tooltip">Cart</div>
                            </div>
                                </Link>

                            <div className="user_action">
                                <span>
                                    <AiOutlineUser />
                                </span>
                                <div className="dropdown_menu"><center>

                                    <h4>Hello! {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}</h4>
                                    <p>Access account and manage orders</p>
                                    {
                                        !formUserInfo && (
                                            <button className='products_btn'>
                                                <Link to="/login" style={{textDecoration: 'none'}}>
                                                    <div className='l'>

                                                Login / Signup
                                                    </div>

                                                </Link>
                                            </button>
                                        )
                                    }
                                            </center>
                                    <div className="separator"></div>
                                    <ul  className='hdata' >
                                        {
                                            dropdownMenu.map(item => {
                                                const { id, link, path } = item;
                                                return (
                                                    <li key={id}>
                                                        <Link to={path} style={{textDecoration:'none'}
                                                    
                                                    }>{link}</Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <SearchBar />
        </>
    );
};

export default Header;