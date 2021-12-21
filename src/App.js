import { Route, Routes } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.css";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./components/Login";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			{/* Users */}
			<Route
				path="users"
				element={
					<ProtectedRoute>
						<UserList />
					</ProtectedRoute>
				}
			>
				<Route
					path=":userId"
					element={
						<ProtectedRoute>
							<UserDetails />
						</ProtectedRoute>
					}
				/>
			</Route>
			{/* Products */}
			<Route
				path="products"
				element={
					<ProtectedRoute>
						<ProductList />
					</ProtectedRoute>
				}
			>
				<Route
					path=":productId"
					element={
						<ProtectedRoute>
							<ProductDetails />
						</ProtectedRoute>
					}
				/>
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default App;
