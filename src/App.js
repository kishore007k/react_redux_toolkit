import { Route, Routes } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.css";
import Login from "./components/Login";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard";
import ProductD from "./pages/ProductD";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			{/* Users */}
			<Route path="users" element={<UserList />}>
				<Route path=":userId" element={<UserDetails />} />
			</Route>
			{/* Products */}
			<Route path="products" element={<ProductList />}>
				<Route path=":productTitle" element={<ProductDetails />} />
			</Route>
			<Route path="products/details/:productTitle" element={<ProductD />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default App;
