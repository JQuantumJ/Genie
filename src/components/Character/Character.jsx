// Character.jsx
{/* 캐릭터 소개 페이지*/}
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import message from '/src/assets/image/Character/message.svg';
import flag from '/src/assets/image/Character/flag.svg';
import styled, { keyframes, css } from 'styled-components';
import grad from '/src/assets/image/Character/grad.svg';
import Genie1 from '/src/assets/image/main/Genie1.svg'; 
import Genie2 from '/src/assets/image/main/Genie2.svg'; 
import planet from '/src/assets/image/Character/planet.svg';
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
  top: 30%;
  max-width: 30%;
  left: 36%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${(props) => props.isdisappearing ? css `${disappearAnimation} 0.5s forwards` : 'none'};
  @media (max-width: 700px) {
    position: fixed;
    max-width: 40%;
  }
`;

const AnimatedImage2 = styled.img`
  position: relative;
  margin-top: 10%;
  min-width: 80%;
  max-width: 80%;
  margin-right: 15%;
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
      const [currentImage2, setCurrentImage2] = useState(Genie1);
      const [isWaving2, setIsWaving2] = useState(false);   
      useEffect(() => {
        const startWaveTimer = setTimeout(() => {
          setIsWaving2(true); 
        }, 1000);
    
        const waveInterval = setInterval(() => {
          setCurrentImage2((prevImage) => (prevImage === Genie1 ? Genie2 : Genie1));  
        }, 600); 
    
        return () => {
          clearTimeout(startWaveTimer);
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
        <C.Grid>
        <C.ImageContainer>
          <img src={grad} alt="Gradient Background" />
          <C.TextOverlay>
            <h1>진인프라의</h1>
            <h1>양자 캐릭터</h1>
            <h1>‘지니’</h1>
          </C.TextOverlay>
        </C.ImageContainer>
        <C.RightHalfCircle>
          <C.FlagImage src={flag} alt="Flag"/>
        </C.RightHalfCircle>
        </C.Grid>
        <C.Grid2>
        <C.LeftHalfCircle>
          <C.FlagImage2 src={planet} alt="planet"/>
        </C.LeftHalfCircle>
        <C.TextWrapper>
            <h1>지니</h1>
            <p style={{color: '#0000ff'}}>지니(진인프라의 진+  접사 ‘-이‘)</p> 
            <p>🧬알라딘에 나오는 무엇이든 할 수 있는 캐릭터 지니처럼</p>  
            <p>🔭양자 정보 관련해서는 무엇이든 알려준다는 의미</p>
        </C.TextWrapper>
        </C.Grid2>
        </C.CharacterWrapper>
        <div style={{maxWidth: '50%', display: 'flex', flexDirection: 'column', marginLeft: '32%', marginTop: '10%'}}>
        <C.Message src={message} style={{width: '35%', marginLeft: '40%'}}/>
        <AnimatedImage2
            style={{ marginLeft: '0', marginTop: '3%', marginBottom: '15%'}}
            src={currentImage2}  
            alt="Waving Genie" 
            />
        </div>
    </C.Wrapper>
    </>
  );
}

export default Character;
