import React from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";


function header() {
    return (
        <section id="header">
			<div className="logo">
				<Link to="/"><img src={logo} alt="logo" /></Link>
			</div>
			<div className="search-bar">
				<form className="form">
					<input
						className="form-input"
						name="title"
						type="text"
						placeholder="Search..."
					/>
					<button className="form-btn" type="submit">
						<FiSearch/>
					</button>
				</form>
			</div>
			<div className="nav-btns">
				<Link to="/signup"><button className="signin">Sign Up</button></Link>
				<FaShoppingCart className="fa"/>
				<div className="count">50</div>
			</div>
		</section>
    );
}

export default header
