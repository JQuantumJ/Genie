import React, { useState } from 'react';
import image1 from '/src/assets/image/main/image1.svg';
import image2 from '/src/assets/image/main/image2.svg';
import image3 from '/src/assets/image/main/image3.svg';
import arrowleft from '/src/assets/image/main/arrowleft.svg';
import arrowright from '/src/assets/image/main/arrowright.svg';
import * as M from './MainStyle';

const Main = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const images = [image1, image2, image3];

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

  return (
    <M.SliderContainer onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
      <img 
        src={arrowleft} 
        alt="Previous" 
        onClick={goToPrevious} 
        style={{ 
          cursor: 'pointer', 
          position: 'absolute', 
          top: '50%', 
          left: '32px', 
          zIndex: 1000, 
          transform: 'translateY(-50%)', 
          opacity: showArrows ? 1 : 0, 
          transition: 'opacity 1s ease-in-out', 
          transitionDelay: showArrows ? '0.1s' : '0s' 
        }} 
      />
      <img 
        src={arrowright} 
        alt="Next" 
        onClick={goToNext} 
        style={{ 
          cursor: 'pointer', 
          position: 'absolute', 
          top: '50%', 
          right: '32px', 
          zIndex: 1000, 
          transform: 'translateY(-50%)', 
          opacity: showArrows ? 1 : 0, 
          transition: 'opacity 1s ease-in-out', 
          transitionDelay: showArrows ? '0.1s' : '0s' 
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
          style={{backgroundColor: '#F1F5F9'}}
          isHovered={hoveredIndex === 0}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <M.ItemTitle>양자 개념</M.ItemTitle>
          <M.ItemContent isVisible={hoveredIndex === 0}>
            양자란 무엇일까요? 쉽게 알아봅시다!!
          </M.ItemContent>
        </M.CarouselItem>
        </div>
        <div style={{width: '100%'}}>
        <M.CarouselItem
          style={{backgroundColor: '#D0E7FE'}}
          isHovered={hoveredIndex === 1}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <M.ItemTitle>양자 활용 분야</M.ItemTitle>
          <M.ItemContent isVisible={hoveredIndex === 1}>
            양자 컴퓨터, 양자 암호 통신 등 양자 기술이 활용되고 있는 분야에 대해 알아봅시다.
          </M.ItemContent>
        </M.CarouselItem>
        </div>
        <div style={{width: '100%'}}>
        <M.CarouselItem
          style={{backgroundColor: '#A5D2FF'}}
          isHovered={hoveredIndex === 2}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <M.ItemTitle>최근 동향</M.ItemTitle>
          <M.ItemContent isVisible={hoveredIndex === 2}>
            양자 기술의 최근 동향에 대해 알아봅시다.
          </M.ItemContent>
        </M.CarouselItem>
        </div>
        <div style={{width: '100%'}}>
        <M.CarouselItem
          style={{backgroundColor: '#7EAFE0'}}
          isHovered={hoveredIndex === 3}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <M.ItemTitle>주요 기업</M.ItemTitle>
          <M.ItemContent isVisible={hoveredIndex === 3}>
            양자 기술의 발전을 이끌고 있는 국내, 해외 주요 기업들을 모아봤어요.
          </M.ItemContent>
        </M.CarouselItem>
        </div>
        <div style={{width: '100%'}}>
        <M.CarouselItem
          style={{backgroundColor: '#E2E0FF'}}
          isHovered={hoveredIndex === 4}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <M.ItemTitle>양자 퀴즈</M.ItemTitle>
          <M.ItemContent isVisible={hoveredIndex === 4}>
            간단한 양자 개념을 확인하는 Quiz Quiz!!
          </M.ItemContent>
        </M.CarouselItem>
        </div>
      </M.CarouselWrapper>
    </M.SliderContainer>
  );
};

export default Main;
