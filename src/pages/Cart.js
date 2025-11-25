import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCartX } from 'react-icons/bs';
import { calculateTotal, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import './cart.css';
import Header from '../components/common/Header';

const Cart = () => {

    useDocTitle('Cart');

    const { cartItems } = useContext(cartContext);

    const cartQuantity = cartItems.length;

    // total original price
    const cartTotal = cartItems.map(item => {
        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = calculateTotal(cartTotal);
    const displayCartTotal = displayMoney(calculateCartTotal);


    // total discount
    const cartDiscount = cartItems.map(item => {
        return (item.originalPrice - item.finalPrice) * item.quantity;
    });

    const calculateCartDiscount = calculateTotal(cartDiscount);
    const displayCartDiscount = displayMoney(calculateCartDiscount);


    // final total amount
    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = displayMoney(totalAmount);


    return (
        <>
        <Header/>
            <section id="cart" className="cartsection">
                <div className="cart_container">
                    {
                        cartQuantity === 0 ? (
                            <div className="empty_cart_wrapper">
                                <div className="empty_cart_img"><BsCartX /></div>
                                <h2>Your Cart is Empty</h2>
                                <Link to="/all-products" className="cart_btn">Start Shopping</Link>
                            </div>
                        ) : (
                            <div className="cart_wrapper">
                                <div className="cart_left_col">
                                    {cartItems.map(item => <CartItem key={item.id} {...item} />)}
                                </div>

                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3 className='order'>
                                            Order Summary &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                                <span>Original Price</span>
                                                <b>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount">
                                                <span>Discount</span>
                                                <b>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery">
                                                <span>Delivery</span>
                                                <b>Free</b>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="total_price">
                                                <b><small>Total Price</small></b>
                                                <b>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                        <Link to="/payment">
                                        <button type="button" className="checkout_btn">Checkout</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;