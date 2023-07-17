import React, { useState, useEffect } from 'react';
import './Carousel.css';
import img1 from '../../../assets/images/carousel/one.jpg';
import img2 from '../../../assets/images/carousel/three.jpg';
import img3 from '../../../assets/images/carousel/two.jpg';

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => {
                const nextSlide = prevSlide === 3 ? 1 : prevSlide + 1;
                return nextSlide;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel w-full h-[700px]">
            <div
                id="slide1"
                className={`carousel-item relative w-full ${activeSlide === 1 ? 'active' : ''
                    }`}
                style={{ backgroundImage: `url(${img1})` }}
            >
                <div className="image-overlay"></div>
                <div className="text-overlay">
                    <h1 className='text-8xl'>THE PREMIRE <br /> MATCHES</h1>
                    <button className="btn btn-info text-white w-64 h-20 text-2xl mt-4">Learn More</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-danger h-36 w-16 text-4xl bg-white text-black">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-danger h-36 w-16 text-4xl bg-white text-black">
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide2"
                className={`carousel-item relative w-full ${activeSlide === 2 ? 'active' : ''
                    }`}
                style={{ backgroundImage: `url(${img2})` }}
            >
                <div className="image-overlay"></div>
                <div className="text-overlay">
                    <h1 className='text-8xl'>THE PREMIRE <br /> MATCHES</h1>
                    <button className="btn btn-info text-white w-64 h-20 text-2xl mt-4">Learn More</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-danger h-36 w-16 text-4xl bg-white text-black">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-danger h-36 w-16 text-4xl bg-white text-black">
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide3"
                className={`carousel-item relative w-full ${activeSlide === 3 ? 'active' : ''
                    }`}
                style={{ backgroundImage: `url(${img3})` }}
            >
                <div className="image-overlay"></div>
                <div className="text-overlay">
                    <h1 className='text-8xl'>THE PREMIRE <br /> MATCHES</h1>
                    <button className="btn btn-info text-white w-64 h-20 text-2xl mt-4">Learn More</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-danger h-36 w-16 text-4xl bg-white text-black">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-danger h-36 w-16 text-4xl bg-white text-black">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
