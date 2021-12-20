import { useDispatch, useSelector } from "react-redux";
import { fetchGallery } from "../redux/galleryReducer";
import {
	LazyLoadImage,
	trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Layout from "./Layout";

const Gallery = () => {
	const { images, isLoading, error } = useSelector((state) => state.gallery);

	const dispatch = useDispatch();

	const handleGetImages = (e) => {
		e.preventDefault();
		dispatch(fetchGallery());
	};

	const r1 = images !== null && images.slice(0, 12);
	const r2 = images !== null && images.slice(12, 24);
	const r3 = images !== null && images.slice(24, 36);

	return (
		<Layout>
			<div className="imageContainer">
				<h3>Images</h3>
				<button className="getImage" onClick={handleGetImages}>
					Get Images
				</button>
				<div className="gallery">
					{!isLoading && (
						<>
							<div className="photos">
								{r1.map((image) => (
									<LazyLoadImage
										className="gallery__img"
										key={image.id}
										effect="blur"
										src={image.download_url}
										alt={image.author}
									/>
								))}
							</div>
							<div className="photos">
								{r2.map((image) => (
									<LazyLoadImage
										className="gallery__img"
										key={image.id}
										effect="blur"
										src={image.download_url}
										alt={image.author}
									/>
								))}
							</div>
							<div className="photos">
								{r3.map((image) => (
									<LazyLoadImage
										className="gallery__img"
										key={image.id}
										effect="blur"
										src={image.download_url}
										alt={image.author}
									/>
								))}
							</div>
						</>
					)}
				</div>
				{error && <p>{error}</p>}
			</div>
		</Layout>
	);
};

export default trackWindowScroll(Gallery);
