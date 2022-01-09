import { useParams } from "react-router-dom";

const ProductDetails = () => {
	const { productTitle } = useParams();
	return (
		<div className="product_details">
			<div className="product_details_fixed">
				<h1 className="product_details_heading">Product Details</h1>
				<p className="product_details_title">Product ID: {productTitle}</p>
			</div>
		</div>
	);
};

export default ProductDetails;
