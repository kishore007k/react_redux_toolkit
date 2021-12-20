import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/countReducer";
import Layout from "./Layout";

const Counter = () => {
	const dispatch = useDispatch();
	const { count } = useSelector((state) => state.counter);

	const handleIncrement = (e) => {
		e.preventDefault();
		dispatch(increment());
	};

	const handleDecrement = (e) => {
		e.preventDefault();
		dispatch(decrement());
	};

	return (
		<Layout>
			<div className="counter">
				<div className="counter_title">
					<h3>Counter</h3>
					<p>Count: {count}</p>
				</div>
				<div className="counter_btn">
					<button onClick={handleIncrement}>Increment</button>
					<button onClick={handleDecrement}>Decrement</button>
				</div>
			</div>
		</Layout>
	);
};

export default Counter;
