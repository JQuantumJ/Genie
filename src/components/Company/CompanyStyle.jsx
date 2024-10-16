import styled, { keyframes } from 'styled-components';
import Slider from "react-slick";
import { FaSearch } from 'react-icons/fa'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Container = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

export const Header = styled.header`
  position: relative;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
`;

export const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 9rem;
  right: 3rem;
  z-index: 10000;
  background-color: #f5e0da;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  align-items: center;
  border-radius: 50%;
  @media(max-width: 800px){
    width: 4.5rem;
    height: 4.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #0B212E;
  margin: 20px;
  padding: 0 50px;
  @media(max-width: 780px){
    margin-top: 5%;
  }
`;

export const PopularStoryWrapper = styled.div`
  width: 100%;
  overflow: visible;
  padding: 0 50px;
  margin-top: 5%;
  margin-bottom: 3%;
  @media(max-width: 780px){
    margin-top: 12%;
    padding: 0 30px;
  }
`;

export const SlideWrapper = styled.div`
  padding-left: 5%;
  margin-bottom: 6%;
  .slick-prev, .slick-next {
    z-index: 1;
  }

  .slick-dots li button:before {
    color: #0B212E;
  }

  .slick-dots li.slick-active button:before {
    color: #0B212E;
  }
`;

export const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

export const SlideImage = styled.img`
  height: 25vh;
  width: 97%;
  object-fit: cover;
  margin-bottom: 1%;
`;

export const PopularStorySlider = styled.div`
  display: flex;
  animation: ${scroll} 15s linear infinite;
`;

export const StoryCard = styled.div`
  width: 25%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 3%;
  padding-top: 120px;
  padding-bottom: 12px;
  position: relative;
  margin-right: 30px; 
  flex-shrink: 0;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  @media(max-width: 780px){
    width: 50%;
    padding-top: 80px;
    padding-bottom: 1px;
  }
  &:hover {
    transform: scale(1.06); 
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;
export const CardImage = styled.img`
  width: 80%;
  height: 180px;
  object-fit: cover;
  position: absolute; 
  top: -50px; 
  left: 10%;
  border-radius: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media(max-width: 780px){
    max-height: 150px;
  }
`;

export const StoryCardText = styled.div`
  padding: 20px 0 10px;
  line-height: 1.7;
  .title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #0B212E;
    margin: 10px 0 5px 0;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #000;
    max-width: 93%;
    margin: 0 auto;
  }
  @media(max-width: 780px){
    line-height: 1.6;
    .title {
      font-size: 1.3rem;
    }
    .subtitle {
      font-size: 1.1rem;
    }
}
`;

export const ArticleCard = styled.div`
  padding: 20px;
  max-width: 90%;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ArticleContent = styled.div`
  padding: 15px 0;
`;

export const ArticleTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7d7d7d;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const ArticleDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #4a4a4a;
`;



export const CharacterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding: 10% 0;
`;

export const CharacterImage = styled.img`
  width: 250px;
  height: auto;
`;

export const SpeechBubble = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 3%;
  margin-left: 20px;
  position: relative;
  max-width: 450px;
  font-size: 16px;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent white transparent transparent;
  }
`;

export const SpeechText = styled.p`
  line-height: 1.7;
`;

export const SpeechContent = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.7;
  color: #444;
`;

export const Bubble = styled.div`
  background-color: rgba(256, 256, 256, 0.5);
  border-radius: 5px;
  padding: 3%;
  margin: 0 auto;
  position: relative;
  max-width: 700px;
  font-size: 13px;
  line-height: 1.7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h1{
    color: #292f36;
    font-size: 1.7rem;
    line-height: 1.8;
    margin-bottom: 2px;
  }

  p{
    color: #666;
     font-size: 1.3rem;
  }
`;