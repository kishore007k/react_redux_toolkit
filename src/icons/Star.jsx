import ReactStars from "react-rating-stars-component";

const RatingIcon = (rating) => {
	return (
		<div className="cursor-pointer">
			<ReactStars
				count={5}
				edit={false}
				size={25}
				isHalf={true}
				value={rating.rating}
			/>
		</div>
	);
};

export default RatingIcon;
