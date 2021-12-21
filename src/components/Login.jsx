import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/userReducer";

const Login = () => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const lData = {
		username,
		password,
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = async () => {
		await dispatch(loginUser(lData));
		navigate("/");
	};

	return (
		<>
			<div className="login-form">
				<div class="control">
					<h1>Sign In</h1>
				</div>
				<div className="input">
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Enter your username..."
						aria-required="true"
						required
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<span className="label">User Name</span>
				</div>

				<div className="input">
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Enter your password..."
						aria-required="true"
						required
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<span className="label">Password</span>
				</div>

				<button onClick={handleLogin} className="login-btn">
					Login
				</button>
			</div>
		</>
	);
};

export default Login;
