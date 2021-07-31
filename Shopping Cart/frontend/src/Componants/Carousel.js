import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import slidesData from '../Data/slides-data';
import Slide from './Slide';


function Carousel() {
	const [slides, setSlides] = useState(slidesData);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = slides.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, slides]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	const increaseIndex = () => {
		setIndex((prevIndex) => {
			return prevIndex + 1;
		})
	}

	const decreaseIndex = () => {
		setIndex((prevIndex) => {
			return prevIndex - 1;
		})
	}
	
    return (
        <section id="carousel">
			<div className="left"><FiChevronLeft onClick={decreaseIndex}/></div>
			<div className="slides">
				{
					slides.map((slide, slideIndex) => {
						let position = "nextSlide";
						if(slideIndex === index) {
							position = "activeSlide";
						} else if(slideIndex === index - 1 || (index === 0 && slideIndex === slides.length - 1)) {
							position = "lastSlide";
						} 

						return (
							<Slide key={slide.id} {...slide} position={position}/>
						);
					})
				}
			</div>
			<div className="right"><FiChevronRight onClick={increaseIndex}/></div>
		</section>
    );
}

export default Carousel;
