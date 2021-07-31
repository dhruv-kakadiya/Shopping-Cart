import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import ItemsContainer from './ItemsContainer';

function ItemInfo() {
    return (
        <>
            <Header/>
            <section id="item-page">
                <div className="container">
                    <div className="images-container">
                        <div className="images">
                            <div className="small-images">
                                <img
                                    className="active"
                                    src="https://rukminim1.flixcart.com/image/880/1056/klscivk0/t-shirt/s/d/t/xl-cv-ts140-vero-lie-original-imagytvhebtzzspy.jpeg?q=50"
                                    alt=""
                                />
                                <img
                                    src="https://rukminim1.flixcart.com/image/880/1056/klscivk0/t-shirt/s/d/t/xl-cv-ts140-vero-lie-original-imagytvhebtzzspy.jpeg?q=50"
                                    alt=""
                                />
                                <img
                                    src="https://rukminim1.flixcart.com/image/880/1056/klscivk0/t-shirt/s/d/t/xl-cv-ts140-vero-lie-original-imagytvhebtzzspy.jpeg?q=50"
                                    alt=""
                                />
                                <img
                                    src="https://rukminim1.flixcart.com/image/880/1056/klscivk0/t-shirt/s/d/t/xl-cv-ts140-vero-lie-original-imagytvhebtzzspy.jpeg?q=50"
                                    alt=""
                                />
                            </div>
                            <div className="large-image">
                                <img
                                    src="https://rukminim1.flixcart.com/image/880/1056/klscivk0/t-shirt/s/d/t/xl-cv-ts140-vero-lie-original-imagytvhebtzzspy.jpeg?q=50"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="cart-btn">
                            <button type="button">
                                <FaShoppingCart/> Add To Cart
                            </button>
                        </div>
                    </div>
                    <div className="information-container">
                        <div className="company">ZARA</div>
                        <div className="item-name">Mens' T-shirt</div>
                        <div className="item-price">
                            <span className="discounted-price">₹4000</span>
                            <strike className="real-price">₹4000</strike>
                            <span className="warning">Hurray, only a few left!</span>
                        </div>
                        <div className="stars">
                            <div className="number">4.5</div>
                            <FaStar/>
                        </div>
                        <div className="offers-container">
                            <div className="title">Available Offer</div>
                            <div className="offers">
                                <div className="offer">
                                    <MdLocalOffer className="i"/>
                                    <div>
                                        <span>Bank Offer</span> 10% off on XXX Bank Cards, up to ₹300.
                                        On orders of ₹1750 and above.
                                    </div>
                                </div>
                                <div className="offer">
                                    <MdLocalOffer className="i"/>
                                    <div>
                                        <span>Bank Offer</span> 5% Unlimited Cashback on XXX Bank
                                        Credit Card.
                                    </div>
                                </div>
                                <div className="offer">
                                    <MdLocalOffer className="i"/>
                                    <div><span>Special Price</span> Get extra 20% off.</div>
                                </div>
                                <div className="offer">
                                    <MdLocalOffer className="i"/>
                                    <div>
                                        <span>Bank Offer</span> 5% off upto ₹25 on any prepaid
                                        instrument.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ItemsContainer/>
                <div className="margin"></div>
            </section>
            <Footer/>
        </>
    )
}

export default ItemInfo;
