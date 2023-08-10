import React, { useState } from 'react';

const Banner = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleIndicatorClick = index => {
		setActiveIndex(index);
	};

	return (
		<div id="banner">
			<div id="carouselExample" className="carousel slide">
				<div className="carousel-inner">
					<div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
						<img
							src={'../img/banner1.png'}
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
						<img
							src={'../img/banner2.png'}
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
						<img
							src={'../img/banner3.png'}
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="carousel-indicators">
				<button
					type="button"
					onClick={() => handleIndicatorClick(0)}
					className={`rounded-circle btn-banner ${
						activeIndex === 0 ? 'active' : ''
					}`}
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					onClick={() => handleIndicatorClick(1)}
					className={`rounded-circle btn-banner ${
						activeIndex === 1 ? 'active' : ''
					}`}
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					onClick={() => handleIndicatorClick(2)}
					className={`rounded-circle btn-banner ${
						activeIndex === 2 ? 'active' : ''
					}`}
					aria-label="Slide 3"
				></button>
			</div>
		</div>
	);
};

export default Banner;
