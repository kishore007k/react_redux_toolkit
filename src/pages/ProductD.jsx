import { useLocation, useParams } from "react-router-dom";

const ProductD = () => {
	const { productTitle } = useParams();
	const location = useLocation();
	const product = location.state;
	return (
		<div className="">
			<div className="">
				<h1 className="product_details_heading">Product Details</h1>
				<p className="product_details_title">Product ID: {productTitle}</p>
			</div>

			<div>
				<img src={product.image} alt={product.title} />
				<p>{product.description}</p>
				<div>
					<h4>{product.price}</h4>
				</div>
			</div>
		</div>
	);
};

export default ProductD;
