// Character.jsx
{/* 캐릭터 소개 페이지*/}
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '/src/assets/image/main/image1.svg';
import image2 from '/src/assets/image/main/image2.svg';
import image3 from '/src/assets/image/main/image3.svg';
import arrowleft from '/src/assets/image/main/arrowleft.svg';
import arrowright from '/src/assets/image/main/arrowright.svg';
import Genie1 from '/src/assets/image/main/Genie1.svg'; 
import Genie2 from '/src/assets/image/main/Genie2.svg'; 
import styled, { keyframes, css } from 'styled-components';
import * as C from './CharacterStyle';
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
  animation: ${(props) => props.isdisappearing ? css `${disappearAnimation} 0.5s forwards` : 'none'};
`;

const AnimatedText = styled.h1`
  position: absolute;
  bottom: 25%;
  max-width: 30%;
  font-size: 2.5vw;
  left: 48%;
  z-index: 10000;
  transition: opacity 0.3s ease-out;
  animation: ${(props) => props.isdisappearing ? css `${disappearAnimation} 0.3s forwards` : 'none'};
`;


const Character = () => {
    const [currentImage, setCurrentImage] = useState(Genie1); 
    const [isdisappearing, setIsdisappearing] = useState(false); 
    const [isImageVisible, setIsImageVisible] = useState(true);
    const [isWaving, setIsWaving] = useState(false);  
    useEffect(() => {
        const startWaveTimer = setTimeout(() => {
          setIsWaving(true); 
        }, 1000);
    
        const waveInterval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage === Genie1 ? Genie2 : Genie1));  
        }, 600); 
    
        const stopWaveTimer = setTimeout(() => {
          setIsdisappearing(true);
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
  return (
    <>
    <C.Wrapper>
        <C.CharacterWrapper>
        {isImageVisible && (
        <>
            <AnimatedImage 
            src={currentImage}  
            alt="Waving Genie" 
            isdisappearing={isdisappearing} 
            />
            </>
        )}
            <p>지니(진인프라의 진+  접사 ‘-이‘)</p> 
            <p>알라딘에 나오는 무엇이든 할 수 있는 캐릭터 지니처럼</p>  
            <p>양자 정보 관련해서는 무엇이든 알려준다는 의미의 작명</p>
        </C.CharacterWrapper>
    </C.Wrapper>
    </>
  );
}

export default Character;
