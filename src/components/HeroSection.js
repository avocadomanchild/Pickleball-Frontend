import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useRef } from 'react';


function HeroSection() {
  

  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      {/* <video
        src='/videos/video-3.mp4'
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        onEnded={handleVideoEnded}
      /> */}
      <h1>PLAY TODAY</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
    
        >
          Signin <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
