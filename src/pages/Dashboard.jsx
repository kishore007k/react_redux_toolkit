import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../redux/productReducer";

const Dashboard = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.product);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	return (
		<div className="product-list-grid">
			{products.map((product) => (
				<button
					key={product.id}
					onClick={() =>
						navigate(`/products/details/${product.title}`, {
							state: product,
						})
					}
				>
					<ProductCard product={product} />
				</button>
			))}
		</div>
	);
};

export default Dashboard;
