import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./redux/galleryReducer";
import counterReducer from "./redux/countReducer";
import userReducer from "./redux/userReducer";

import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		gallery: galleryReducer,
		user: userReducer,
	},
});

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
