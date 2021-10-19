import React, {useState} from 'react';
import CartItem from './CartItem';
import CartItemsData from '../Data/cartData'; 
import Header from './Header';
import Footer from './Footer';

function CartItemContainer() {
    const [cartItems, setCartItems] = useState(CartItemsData);
    return (
        <>
            <Header/>
            <section id="cart">
                <div className="container">
                    <div className="item-container">
                        <div className="title">My Cart (<span>2</span>)</div>
                        <div className="horizontal-line"></div>
                        <div className="border-shadow">
                            {
                                cartItems.map((item) => {
                                    return (
                                        <CartItem key={item.id} {...item}/>
                                    )
                                })
                            }
                        </div>
                        <div className="cart-btn">
                            <button type="button">Place Order</button>
                        </div>
                    </div>
                    <div className="price-table">
                        <div className="title">price details</div>
                        <div className="horizontal-line"></div>
                        <div className="price-details">
                            <div className="price">
                                <div>Price (<span>2</span> items)</div>
                                <div>₹4000</div>
                            </div>
                            <div className="discount">
                                <div>Discount</div>
                                <div className="number">-₹4000</div>
                            </div>
                            <div className="delivery">
                                <div>Dilevery Charges</div>
                                <div className="text">FREE</div>
                            </div>
                            <div className="horizontal-line"></div>
                        </div>
                        <div className="cart-total">
                            <div className="total-title">Total Amount</div>
                            <div>₹4000</div>
                        </div>
                        <div className="horizontal-line"></div>
                        <div className="greetings">
                            You will save <span>₹4000</span> on this order
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default CartItemContainer;
