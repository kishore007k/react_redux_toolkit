import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../redux/productReducer";

const ProductList = () => {
	const { products } = useSelector((state) => state.product);

	const dispatch = useDispatch();

	const handleFetchGHEvents = () => {
		const res = axios
			.get(
				"https://api.github.com/search/commits?q=kishore007k&page=1&per_page=30&sort=repository"
			)
			.then((res) => console.log(res.data.items))
			.catch((err) => console.log(err));
		return res;
	};

	handleFetchGHEvents();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	return (
		<div className="product-flex">
			<div className="product-list">
				{products.map((product) => {
					return (
						<Link to={`/products/${product.title}`} key={product.id}>
							<ProductCard product={product} />
						</Link>
					);
				})}
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default ProductList;

// https://api.github.com/users/kishore007k
// https://api.github.com/search/users?q=kishore&page=2&per_page=30&order=desc
// https://api.github.com/search/commits?q=kishore007k&page=1&per_page=30&sort=repository
// https://api.github.com/events

// https://www.pluralsight.com/guides/fetching-most-recent-commits-from-all-repos-using-the-github-api
