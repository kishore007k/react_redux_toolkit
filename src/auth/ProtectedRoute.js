import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const token = localStorage.getItem("token");
	const location = useLocation();

	return token ? (
		children
	) : (
		<Navigate replace to={{ pathname: "/login", state: { from: location } }} />
	);
};

export default ProtectedRoute;
