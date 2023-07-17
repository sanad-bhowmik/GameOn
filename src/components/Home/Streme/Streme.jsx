import React, { useState } from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import './Streme.css';
import imgone from '../../../assets/images/banner/stremeone.jpg';
import imgtwo from '../../../assets/images/banner/stremetwo.jpg';
import imgthree from '../../../assets/images/banner/stremethree.jpg';

const Streme = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const youtubeVideoId = 'waOr9d2b08s'; // Replace with your YouTube video ID

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      padding: 0,
      maxWidth: '650px',
      maxHeight: '40vh',
      width: '100%',
      height: '100%',
    },
  };

  return (
    <div className='streme text-center pb-14'>
      <h1 className="text-[#75C2F6] text-3xl pt-28">WATCH POPULAR</h1>
      <h1 className="text-7xl mt-4 font-bold text-white font-serif">LIVE STREME</h1>
      <div className='ml-40 gap-5 mt-14 flex'>
        <div className="card h-[600px] w-[700px] relative">
          <img src={imgone} alt="Game 1" className="card-image" />
          <div className="card-overlay">
            <h2 className="card-title text-7xl">RACING GAME</h2>
          </div>
          <button className="btn-top-left" onClick={openModal}>
            <span className="play-btn"></span>
          </button>
        </div>
        <div className=''>
          <div className="card h-[270px] w-[700px] mb-16 relative">
            <img src={imgtwo} alt="Game 1" className="card-image" />
            <div className="card-overlay">
              <h2 className="card-title text-7xl">GOD OF WAR 2</h2>
            </div>
            <button className="btn-bottom-left" onClick={openModal}>
              <span className="play-btn"></span>
            </button>
          </div>
          <div className="card h-[270px] w-[700px] relative">
            <img src={imgthree} alt="Game 1" className="card-image" />
            <div className="card-overlay">
              <h2 className="card-title text-7xl">CALL OF DUTY</h2>
            </div>
            <button className="btn-bottom-left" onClick={openModal}>
              <span className="play-btn"></span>
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="YouTube Video Modal"
      >
        <button className="close-btn" onClick={closeModal}></button>
        <div className="video-container">
          <YouTube videoId={youtubeVideoId} className="youtube-video" />
        </div>
      </Modal>
    </div>
  );
};

export default Streme;
