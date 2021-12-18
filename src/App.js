import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/countReducer";
import { fetchGallery } from "./redux/galleryReducer";

const App = () => {
	const { count } = useSelector((state) => state.counter);
	const { images, isLoading, error } = useSelector((state) => state.gallery);
	const dispatch = useDispatch();

	const handleIncrement = (e) => {
		e.preventDefault();
		dispatch(increment());
	};

	const handleDecrement = (e) => {
		e.preventDefault();
		dispatch(decrement());
	};

	const handleGetImages = (e) => {
		e.preventDefault();
		dispatch(fetchGallery());
	};

	return (
		<div className="App">
			<div className="top">
				<h1>React Redux Toolkit</h1>
				<p>This is a boilerplate for a React Redux application.</p>
				<hr />
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
			</div>

			<div className="imageContainer">
				<h3>Images</h3>
				<div className="gallery">
					{!isLoading &&
						images.map((image) => (
							<img
								key={image.id}
								className="gallery__img"
								src={image.download_url}
								alt={image.author}
								width={image.width}
								height={image.height}
							/>
						))}
				</div>
				<button className="getImage" onClick={handleGetImages}>
					Get Images
				</button>
				{error && <p>{error}</p>}
			</div>
		</div>
	);
};

export default App;
