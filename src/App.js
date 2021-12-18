import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/countReducer";

const App = () => {
	const { count } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const handleIncrement = (e) => {
		e.preventDefault();
		dispatch(increment());
	};

	const handleDecrement = (e) => {
		e.preventDefault();
		dispatch(decrement());
	};

	return (
		<div className="App">
			<div>
				<h1>React Redux Toolkit</h1>
				<p>This is a boilerplate for a React Redux application.</p>
				<hr />
				<h3>Counter</h3>
				<p>Count: {count}</p>
				<div>
					<button onClick={handleIncrement}>Increment</button>
					<button onClick={handleDecrement}>Decrement</button>
				</div>
			</div>
		</div>
	);
};

export default App;
