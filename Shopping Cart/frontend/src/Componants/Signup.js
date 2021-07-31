import React from 'react';
import login from '../images/login1.svg';
import logo from '../images/logo1.svg';
import {Link} from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";

function Signup() {
    return (
        <section id="authentication">
			<div className="authentication">
				<div className="authentication-form">
					<div className="logo-image">
						<Link><img src={logo} alt="logo" /></Link>
					</div>
					<form>
						<input
							placeholder="email"
							type="text"
						/>
						<input
							placeholder="username"
							type="text"
						/>
						<input
							placeholder="password"
							type="password"
						/>
						<input
							placeholder="confirm password"
							type="password"
						/>
						<button type="button" className="btn-red">Sign Up</button>
					</form>
					<div class="social">
                        <FaGoogle className="icon"/>
						<FaFacebookF className="icon"/>
						<FaGithub className="icon"/>
					</div>
					<hr />
					<p className="sign-up-text">Already have an account?</p>
					<Link to="/login"><button type="button" className="btn-black">Log In</button></Link>
				</div>
				<div className="authentication-image">
					<img src={login} alt="login" />
				</div>
			</div>
		</section>
    )
}

export default Signup
