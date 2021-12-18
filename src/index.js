import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./redux/galleryReducer";
import counterReducer from "./redux/countReducer";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		gallery: galleryReducer,
	},
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
