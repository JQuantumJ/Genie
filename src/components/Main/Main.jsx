import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '/src/assets/image/main/image4.svg';
import image2 from '/src/assets/image/main/image2.svg';
import image3 from '/src/assets/image/main/image3.svg';
import arrowleft from '/src/assets/image/main/arrowleft.svg';
import arrowright from '/src/assets/image/main/arrowright.svg';
import * as M from './MainStyle';
import Genie1 from '/src/assets/image/main/Genie1.svg'; 
import Genie2 from '/src/assets/image/main/Genie2.svg'; 
import styled, { keyframes, css } from 'styled-components';
const disappearAnimation = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`;


const AnimatedImage = styled.img`
  position: fixed;
  top: 23%;
  max-width: 30%;
  left: 36%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${(props) => props.isDisappearing ? css `${disappearAnimation} 0.5s forwards` : 'none'};
`;


const Main = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const images = [image1, image2, image3];
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isWaving, setIsWaving] = useState(false);  
  const [currentImage, setCurrentImage] = useState(Genie1); 
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [isDisappearing, setIsDisappearing] = useState(false); 
  const [clickedIndex, setClickedIndex] = useState(null);
  const navigate = useNavigate();
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleClick = (index, link) => {
    if (clickedIndex === index) {
      navigate(link);  
    } else {
      setClickedIndex(index);  
    }
  };
  useEffect(() => {
    if (clickedIndex !== null) {
      const resetClick = setTimeout(() => {
        setClickedIndex(null);
      }, 4000);  

      return () => clearTimeout(resetClick);
    }
  }, [clickedIndex]);

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  useEffect(() => {
    const startWaveTimer = setTimeout(() => {
      setIsWaving(true); 
    }, 1000);

    const waveInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === Genie1 ? Genie2 : Genie1));  
    }, 600); 

    const stopWaveTimer = setTimeout(() => {
      setIsDisappearing(true);
      setTimeout(() => {
        setIsImageVisible(false);  
      }, 1000);  
      clearInterval(waveInterval); 
    }, 3000);  

    return () => {
      clearTimeout(startWaveTimer);
      clearTimeout(stopWaveTimer);
      clearInterval(waveInterval);
    };
  }, []);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (window.innerWidth <= 500) { 
      const interval = setInterval(() => {
        goToNext();
      }, 3000);
  
      return () => {
        clearInterval(interval); 
      };
    }
  }, [currentIndex]);
  

  return (
    <>
    <M.SliderContainer onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
      <img 
        src={arrowleft} 
        alt="Previous" 
        onClick={goToPrevious} 
        onMouseEnter={() => setIsArrowHovered(true)} 
        onMouseLeave={() => setIsArrowHovered(false)} 
        style={{ 
          cursor: 'pointer', 
          position: 'absolute', 
          top: '50%',
          left: '2.5vw',
          zIndex: 1000, 
          transform: `translateY(-50%) scale(${isArrowHovered ? 1.1 : 1})`, 
          opacity: showArrows ? 0.4 : 0, 
          transition: 'opacity 1s ease-in-out, transform 0.3s ease-in-out', 
          transitionDelay: showArrows ? '0.1s' : '0s',
          display: window.innerWidth <= 500 ? 'none' : 'block'
        }} 
      />

      <img 
        src={arrowright} 
        alt="Next" 
        onClick={goToNext} 
        onMouseEnter={() => setIsArrowHovered(true)} 
        onMouseLeave={() => setIsArrowHovered(false)}
        style={{ 
          cursor: 'pointer', 
          position: 'absolute', 
          top: '50%', 
          right: '2.5vw', 
          zIndex: 1000, 
          transform: `translateY(-50%) scale(${isArrowHovered ? 1.1 : 1})`, 
          opacity: showArrows ? 0.4 : 0, 
          transition: 'opacity 1s ease-in-out, transform 0.3s ease-in-out', 
          transitionDelay: showArrows ? '0.1s' : '0s',
          display: window.innerWidth <= 500 ? 'none' : 'block' 
        }} 
      />
      <M.ImageContainer currentIndex={currentIndex} count={images.length}>
        {images.map((image, index) => (
          <M.ItemImage key={index} src={image} alt={`Slide ${index}`} style={{borderBottomLeftRadius: '20vw'}}/>
        ))}
      </M.ImageContainer>

      <M.CarouselWrapper>
        <div style={{width: '100%'}}>
        <M.CarouselItem
            onClick={() => handleClick(0, '/concept')}
            style={{ backgroundColor: '#F1F5F9' }}
            isHovered={hoveredIndex === 0 || clickedIndex === 0}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            isClicked={clickedIndex === 0} 
          >
          <M.ItemTitle>양자 개념</M.ItemTitle>
          <M.ItemContent onClick={e=> navigate('/concept')} isVisible={hoveredIndex === 0}>
            양자란 무엇일까요? 쉽게 알아봅시다!!<p></p>
          </M.ItemContent>
        </M.CarouselItem>
        </div>
        <div style={{width: '100%'}}>
        <M.CarouselItem
          onClick={() => handleClick(1,'/description')}
          style={{backgroundColor: '#D0E7FE'}}
          isHovered={hoveredIndex === 1 || clickedIndex === 1}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          isClicked={clickedIndex === 1} 
        >
          <M.ItemTitle>활용 분야</M.ItemTitle>
          <M.ItemContent onClick={e=> navigate('/description')} isVisible={hoveredIndex === 1}>
            양자 컴퓨터, 양자 암호 통신 등 양자 기술이 활용되고 있는 분야에 대해 알아봅시다.<p></p>
          </M.ItemContent>
        </M.CarouselItem>
        </div>
        <div style={{width: '100%'}}>
        <M.CarouselItem
          onClick={() => handleClick(2, '/')}
          style={{backgroundColor: '#A5D2FF'}}
          isHovered={hoveredIndex === 2 || clickedIndex === 2}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          isClicked={clickedIndex === 2} 
        >
          <M.ItemTitle>최근 동향</M.ItemTitle>
          <M.ItemContent onClick={e=> navigate('/recent')} isVisible={hoveredIndex === 2}>
            양자 기술의 최근 동향에 대해 알아봅시다.<p></p>
          </M.ItemContent>
        </M.CarouselItem>
        </div>
        <div style={{width: '100%'}}>
        <M.CarouselItem
          onClick={() => handleClick(3, '/')}
          style={{backgroundColor: '#7EAFE0'}}
          isHovered={hoveredIndex === 3 || clickedIndex === 3}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          isClicked={clickedIndex === 3} 
        >
          <M.ItemTitle>주요 기업</M.ItemTitle>
          <M.ItemContent onClick={e=> navigate('/company')} isVisible={hoveredIndex === 3}>
            양자 기술의 발전을 이끌고 있는 국내, 해외 주요 기업들을 모아봤어요.<p></p>
          </M.ItemContent>
        </M.CarouselItem>
        </div>
        <div style={{width: '100%'}}>
        <M.CarouselItem
          onClick={() => handleClick(4, '/quiz')}
          style={{backgroundColor: '#E2E0FF'}}
          isHovered={hoveredIndex === 4 || clickedIndex === 4}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          isClicked={clickedIndex === 4} 
        >
          <M.ItemTitle>양자 퀴즈</M.ItemTitle>
          <M.ItemContent onClick={e=> navigate('/quizmain')} isVisible={hoveredIndex === 4}>
            간단한 양자 개념을 확인하는 Quiz Quiz!!<p></p>
          </M.ItemContent>
        </M.CarouselItem>
        </div>
      </M.CarouselWrapper>
    </M.SliderContainer>
    </>
  );
};

export default Main;
