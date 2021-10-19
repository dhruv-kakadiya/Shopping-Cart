import React from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function CartItem({img, name, discountedPrice, realPrice}) {
    return (
        <>
            <div className="cart-item">
                <div className="item-img">
                    <img src={img} alt={name} />
                </div>
                <div className="item-discription">
                    <div className="item-name">{name}</div>
                    <div className="item-price">
                        <span className="discounted-price">₹{discountedPrice}</span>
                        <strike className="real-price">₹{realPrice}</strike>
                    </div>
                    <button type="button" className="remove-btn">remove</button>
                </div>
                <div className="item-counter">
                    <FaChevronUp/>
                    <div className="item-count">2</div>
                    <FaChevronDown/>
                </div>
            </div>
            <div className="horizontal-line"></div>
        </>
    )
}

export default CartItem;
