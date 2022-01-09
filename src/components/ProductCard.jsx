import { useState } from "react";
import RatingIcon from "../icons/Star";

const ProductCard = ({ product }) => {
	const [fav, setFav] = useState(false);
	const [rating, setRating] = useState(
		product && product.rating.rate ? product.rating.rate : 0
	);

	return (
		<div className="product-card">
			{/* Heart Icon */}
			<div className="product-card-icon">
				{!fav ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						onClick={() => setFav(true)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
						onClick={() => setFav(false)}
					>
						<path
							fillRule="evenodd"
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clipRule="evenodd"
						/>
					</svg>
				)}
			</div>

			{/* Product Image */}
			<div className="product-card-image">
				<img src={product.image} alt="product" />
			</div>

			{/* Product Category */}
			<div className="product-card-category">
				<p>{product.category}</p>
			</div>

			{/* Product Name */}
			<div className="product-card-name">
				<h3>{product.title}</h3>
			</div>

			{/* Product Price & rating */}
			<div className="product-card-price">
				<p>${product.price}</p>
				<div className="product-card-ratings">
					<RatingIcon rating={rating} />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
