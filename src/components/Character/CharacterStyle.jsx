// CharacterStyle.jsx
import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: -5%;
    height: 330vh;
    max-height: 330vh;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;

`

export const CharacterWrapper = styled.div`
  max-width: 100%;
  margin-top: 5%;
  border-radius: 0.7vw;
  position: relative;
`

export const TextWrapper = styled.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 15%;
  margin-bottom: 20%;
  margin-left: 10%;
  border-radius: 0.7vw;
  h1{
    font-size: 4rem;
    margin-bottom: 2%;
  }
  p{
    font-size: 1.9rem;
    margin-bottom: 1.7%;
  }
  @media (max-width: 800px) {
    font-size: 3.3rem;
      h1{
        font-size: 3.1rem;
        margin-bottom: 2%;
      }
      p{
        font-size: 1.5rem;
        margin-bottom: 1.7%;
      }
  }
  @media (max-width: 700px) {
    grid-area: textWrapper;
  }
`

export const RightHalfCircle = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  height: 60vh; 
  background-color: #0B212E;
  border-radius: 1000px 0 0 1000px; 
  right: 0;
  align-items: center;
  top: 0;
  @media (max-width: 800px) {
    min-width: 100%;
    height: 50vh;
  } 
`;

export const FlagImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%; 
  height: auto;
  z-index: 11;
  @media (max-width: 800px) {
    max-width: 60%; 
  }
`;

export const LeftHalfCircle = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  height: 60vh; 
  background-color: #0B212E;
  border-radius:  0 1000px 1000px 0; 
  left: 0;
  align-items: center;
  top: 0;
  @media (max-width: 800px) {
    min-width: 90%;
    height: 50vh;
  } 
`;

export const FlagImage2 = styled.img`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%; 
  height: auto;
  z-index: 11;
  @media (max-width: 800px) {
    max-width: 60%; 
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-top: 0px;
  margin-left: -10px;
  max-width: 80%;
  height: auto;
  overflow: hidden; 
  justify-content: flex-start;
  text-align: left;
  img{
      max-width: 90%;
      margin: 5%;
      height: auto;
  }
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 22%;
  margin-left: 30%;
  width: 70%; 
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  color: #000;
  font-size: 4rem;
  text-align: left; 
  z-index: 10;
  h1 {
    margin-top: 3%;
    width: 90%; 
    text-align: left;
  }
  @media (max-width: 800px) {
    font-size: 3.3rem;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%; 
  display: flex;
`;

export const Grid = styled.div`
  display: grid;
  max-width: 100%;
  min-width: 100%;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2%; 
  margin-top: 10%;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); 
    
  }
`

export const Grid2 = styled.div`
  display: grid;
  max-width: 100%;
  min-width: 100%;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2%; 
  margin-top: 10%;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); 
    
  }
  @media (max-width: 700px) {
    grid-template-areas: 
      "textWrapper"  
      "leftHalfCircle";  
  }
`

export const Message = styled.img`
  width: 35%;
  margin-left: 35%;
  @media (max-width: 800px) {
    min-width: 45%;
    max-width: 45%;
    margin-left: 20%;
  }
`