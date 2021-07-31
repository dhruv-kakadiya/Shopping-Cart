import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";


function Footer() {
    return (
        <section id="footer">
			<div className="container">
				<div className="about">
					<div className="title">About My Self</div>
					<p className="text">
						I'm <span>Dhruv Kakadiya</span>. Currently, I'm pursuing B.Tech
						degree from Indian Institute of Technology (IIT) Jodhpur. I’m a sport programmer and web developer.
						I spend a lot of time doing competitive programming.
					</p>
				</div>
				<div className="submit-mail">
					<div className="title">Stay Connected....</div>
					<form className="form">
						<input
							className="email-input"
							name="email"
							type="text"
							placeholder="Email..."
						/>
						<button className="email-btn" type="submit">Submit</button>
					</form>
					<div className="social">
						<FaLinkedinIn className="icon"/>
                        <FaGithub className="icon"/>
                        <FaInstagram className="icon"/>
						<FaFacebookF className="icon"/>
					</div>
				</div>
			</div>
			<div className="hr"></div>
			<div className="footer">
				Copyright ©2021 All rights reserved | This cart is made with
				<FaHeart className="heart"/> by Dhruv Kakadiya
			</div>
		</section>
    )
}

export default Footer;
