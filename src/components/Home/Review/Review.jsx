import React from 'react';
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Review = () => {
    return (
        <div className='review bg-fixed flex'>
            <div className='mt-24  ml-36 mb-32'>
                <h1 className='text-6xl font-bold text-white'>GAMON WHERE DIGITAL <br /> WORLDS MEET REAL <br /> INNOVATION</h1>
                <button className="btn btn-info text-white w-64 h-20 text-xl mt-4">VIEW TOURNAMENTS</button>
            </div>
            <div className='hash h-[40vh] w-[40vh] '>
            <div className="wrap animate pop">
      <div className="overlay">
        <div className="overlay-content animate slide-left delay-2">
          <h1 className="animate slide-left pop delay-4">Trees</h1>
          <p className="animate slide-left pop delay-5 kingdom">Kingdom: <em>Plantae</em></p>
        </div>
        <div className="image-content animate slide delay-5"></div>
        <div className="dots animate">
          <div className="dot animate slide-up delay-6"></div>
          <div className="dot animate slide-up delay-7"></div>
          <div className="dot animate slide-up delay-8"></div>
        </div>
      </div>
      <div className="text">
        <p>Trees are woody perennial plants that are a member of the kingdom <em>Plantae</em>. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.</p>
        <p>Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.</p>
        <p>When managed properly, trees are a good source of renewable energy and construction material.</p>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Review;