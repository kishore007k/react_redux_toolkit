import { Route, Routes } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.css";
import ProtectedRoute from "./auth/ProtectedRoute";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
import User from "./components/User";

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				exact
				element={
					<ProtectedRoute>
						<Counter />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/gallery"
				element={
					<ProtectedRoute>
						<Gallery />
					</ProtectedRoute>
				}
			/>
			<Route path="/login" element={<User />} />
		</Routes>
	);
};

export default App;
