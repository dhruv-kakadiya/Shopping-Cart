import React from 'react'

function Item({img, name, company, discountedPrice, realPrice}) {
    return (
        <div className="item">
			<div className="item-img">
				<img src={img} alt=""/>
			</div>
			<div className="item-discription">
				<div className="company">{company}</div>
				<div className="item-name">{name}</div>
				<div className="item-price">
                    <span className="discounted-price">₹{discountedPrice}</span>
                    <strike className="real-price">₹{realPrice}</strike> 
                </div>
			</div>
		</div>
    )
}

export default Item;
