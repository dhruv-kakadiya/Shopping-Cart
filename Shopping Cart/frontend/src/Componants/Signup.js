import React, {useState} from 'react';
import login from '../images/login1.svg';
import logo from '../images/logo1.svg';
import {Link, useHistory} from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import axios from 'axios';
import {useGlobalContext} from '../Context/Context';

const initialState = {
	email: "",
	userName: "",
	password: "",
	confirmPassword: "",
};

const BaseURL = "http://127.0.0.1:8000/accounts/";

function Signup() {
	const [info, setInfo] = useState(initialState);
	const {setUserInfo} = useGlobalContext();
	let history = useHistory();

	const handleChange = (event) => {
		event.preventDefault();
		setInfo((prevInfo) => {
			return {
				...prevInfo,
				[event.target.name]: event.target.value,
			};
		})
	}

	const handleClick = (event) => {
		event.preventDefault();
		setInfo((prevInfo) => {
			return {
				...prevInfo,
			}
		});

		axios.post(BaseURL + "signup/", {
			username: info.userName,
			email: info.email,
			password: info.password,
		})
		.then((res) => {
			console.log(res.data);
			setUserInfo({
				type: "LOGIN",
				payload: res.data,
			});
			history.push("/");
		})
		.catch((err) => {
			console.log(err.response.data);
		});
	}

    return (
        <section id="authentication">
			<div className="authentication">
				<div className="authentication-form">
					<div className="logo-image">
						<Link><img src={logo} alt="logo" /></Link>
					</div>
					<form>
						<input
							placeholder="Email"
							type="text"
							name="email"
							value={info.email}
							onChange={handleChange}
						/>
						<input
							placeholder="Username"
							type="text"
							name="userName"
							value={info.userName}
							onChange={handleChange}
						/>
						<input
							placeholder="Password"
							type="password"
							name="password"
							value={info.password}
							onChange={handleChange}
						/>
						<input
							placeholder="Confirm Password"
							type="password"
							name="confirmPassword"
							value={info.confirmPassword}
							onChange={handleChange}
						/>
						<button type="button" className="btn-red" onClick={handleClick}>Sign Up</button>
					</form>
					<div className="social">
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
