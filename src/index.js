import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userReducer";
import productReducer from "./redux/productReducer";

import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";

const store = configureStore({
	reducer: {
		user: userReducer,
		product: productReducer,
	},
});

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Layout>
				<App />
			</Layout>
		</Router>
	</Provider>,
	document.getElementById("root")
);
