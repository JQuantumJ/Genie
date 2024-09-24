import styled, { keyframes, css } from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; 
  max-height: 100vh;
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  justify-content: center;
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: ${(props) => props.count * 100}%;  
  transform: translateX(-${(props) => props.currentIndex * 100}%); 
  transition: transform 0.5s ease-in-out;
`;

export const ItemImage = styled.img`
  flex-shrink: 0;  
  width: 100%;  
  height: 90vh;
  object-fit: cover;
`;
export const CarouselWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 70%;
  margin-left: 15%;
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 960px) {
    margin-left: 15%;
    width: 85%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    max-width: 80%; 
    bottom: 10%;
    margin-left: 0;
    position: absolute;
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const ItemTitle = styled.div`
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: bold;
  color: #000;
`;

export const ItemContent = styled.div`
  text-align: center;
  display: ${(props) => (props.isVisible ? 'block' : 'none')}; 
  animation: ${(props) => (props.isVisible ? fadeIn : 'none')} 0.4s ease-in-out;
  font-size: 1.1rem;
  color: #222;

  @media (max-width: 500px) {
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
    animation: ${(props) => (props.isVisible ? fadeIn : 'none')} 0.4s ease-in-out;
    font-size: 1rem;
  }
  @media (min-width: 501px) {
    &::after {
      content: "→";
      margin-top: 3px;
      font-size: 1.1rem;
      color: #0000ff;
      margin-left: 5px;
    }
    &::before {
      content: " "; 
      display: block; 
      margin-bottom: 10px; 
    }
  }
`;
 
export const CarouselItem = styled.div`
  position: absolute; 
  bottom: 0;
  width: 18%;
  transition: transform 0.4s ease-in-out, z-index 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #f0e5de;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 10px;
  padding: 20px;
  z-index: ${(props) => (props.isHovered ? '2' : '1')}; 
  box-shadow: ${(props) => (props.isHovered ? '0 6px 12px rgba(0, 0, 0, 0.2)' : '0 3px 6px rgba(0, 0, 0, 0.08)')};
  transform: ${(props) => (props.isHovered ? 'translateY(0px) scale(1.05)' : 'translateY(0px) scale(1)')};
  background: ${(props) => (props.isHovered ? '#e0d4cc' : '#f0e5de')};
  
  &:hover{
    transition: all 0.3s ease;
  }

  &:hover ${ItemTitle} {
    margin: 2%;
  }

  &:hover ${ItemContent} {
    margin: 2%;
  }
  @media (max-width: 500px) {
    flex-direction: row; 
    width: ${(props) => (props.isHovered ? '95%' : '40%')}; 
    border-top-left-radius: 0px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 10vh;
    padding: 5%;
    transform: ${(props) => (props.isHovered ? 'translateX(0px) scale(1.05)' : 'translateX(0px) scale(1)')};
    margin-left: 0;
    position: relative;
  }
`;


export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
