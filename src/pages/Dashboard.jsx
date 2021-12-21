import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../redux/productReducer";
import { getAllUsers } from "../redux/userReducer";

const Dashboard = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.product);
	const { users } = useSelector((state) => state.user);

	console.log({ products, users });

	useEffect(() => {
		dispatch(getAllProducts());
		dispatch(getAllUsers());
	}, [dispatch]);

	return (
		<div className="product-list">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Dashboard;
