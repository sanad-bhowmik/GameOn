import React, { useState, useEffect } from 'react';
import './Banner.css';
import imgone from '../../../assets/images/banner/one.jpg';
import imgtwo from '../../../assets/images/banner/two.jpg';
import imgthree from '../../../assets/images/banner/three.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    const originalText = 'There are many';
    const additionalText =
        " variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
    const [displayText, setDisplayText] = useState(originalText + '\n' + additionalText);

    useEffect(() => {
        AOS.init();
    }, []);

    const generateRandomWords = (text) => {
        const words = text.split(' ');
        const randomWords = words.map((word) => {
            if (word === ' ') {
                return ' ';
            } else {
                const randomText = Array.from({ length: word.length }, () =>
                    String.fromCharCode(Math.floor(Math.random() * 26) + 97)
                ).join('');
                return randomText;
            }
        });
        return randomWords.join(' ');
    };

    const handleMouseEnter = () => {
        const words = displayText.split(' ');
        const randomWords = words.map((word) => generateRandomWords(word));
        setDisplayText(randomWords.join(' '));
    };

    const handleMouseLeave = () => {
        setDisplayText(originalText + '\n' + additionalText);
    };

    return (
        <div className="banner text-center mt-2 pb-14">
            <h1 className="text-[#75C2F6] text-3xl pt-28">WELCOME TO THE BEST</h1>
            <h1 className="text-7xl mt-4 font-bold text-white font-serif">GAMING & ESPORTS</h1>
            <div className="card-container flex justify-center mt-10 mb-10">
                <div className="card" data-aos="fade-up" data-aos-delay="0">
                    <img src={imgone} alt="Game 1" className="card-image" />
                    <div className="card-overlay">
                        <h2 className="card-title text-7xl">GAMING STUDIO</h2>
                    </div>
                </div>
                <div className="card" data-aos="fade-up" data-aos-delay="300">
                    <img src={imgtwo} alt="Game 2" className="card-image" />
                    <div className="card-overlay">
                        <h2 className="card-title text-7xl">GAMING STUDIO</h2>
                    </div>
                </div>
                <div className="card" data-aos="fade-up" data-aos-delay="600">
                    <img src={imgthree} alt="Game 3" className="card-image" />
                    <div className="card-overlay">
                        <h2 className="card-title text-7xl">GAMING STUDIO</h2>
                    </div>
                </div>
            </div>
            <div>
                <p
                    className="text-2xl mb-10 font-mono text-center pl-64 pr-64 mt-24"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {displayText}
                </p>
                <button className="button">ABOUT US</button>
            </div>
        </div>
    );
};

export default Banner;
