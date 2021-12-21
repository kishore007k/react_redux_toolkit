import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<div className="App">
			<nav>
				<div className="navbar">
					<div className="navbar-brand">
						<Link to="/">React-Redux</Link>
					</div>
					<div className="navbar-menu">
						<Link to="/">Dashboard</Link>
						<Link to="users">Users</Link>
						<Link to="products">Products</Link>
					</div>
					<div className="navbar-end">
						{token ? (
							<button onClick={handleLogout}>Logout</button>
						) : (
							<button
								onClick={() => {
									navigate("/login");
								}}
							>
								Login
							</button>
						)}
					</div>
				</div>
			</nav>

			<Header />

			<main className="container">{children}</main>

			<footer>
				<p className="footer-text">
					React Redux Toolkit is a boilerplate for a React Redux application.
				</p>
			</footer>
		</div>
	);
};

export default Layout;
