import React from 'react';
import login from '../images/login1.svg';
import logo from '../images/logo1.svg';
import {Link} from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";

function Login() {
    return (
        <section id="authentication">
			<div className="authentication">
				<div className="authentication-form">
					<div className="logo-image">
						<Link to="/"><img src={logo} alt="logo1" /></Link>
					</div>
					<form>
						<input
							placeholder="username"
							type="text"
						/>
						<input
							placeholder="password"
							type="password"
						/>
						<button type="button" className="btn-red">Log In</button>
					</form>
					<div class="social">
						<FaGoogle className="icon"/>
						<FaFacebookF className="icon"/>
						<FaGithub className="icon"/>
					</div>
					<hr />
					<p className="sign-up-text">Create my account?</p>
					<Link to="/signup"><button type="button" className="btn-black">Sign Up</button></Link>
				</div>
				<div className="authentication-image">
					<img src={login} alt="login" />
				</div>
			</div>
		</section>
    )
}

export default Login;
