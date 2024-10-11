import styled, { keyframes } from 'styled-components';
import Slider from "react-slick";
import { FaSearch } from 'react-icons/fa'; 
import banner from '/src/assets/image/Company/banner.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Container = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

export const Header = styled.header`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
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
  margin-top:6%;
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
  top: -60px; 
  left: 10%;
  border-radius: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StoryCardText = styled.div`
  padding: 20px 0 10px;
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #0B212E;
    margin: 10px 0 5px 0;
  }

  .subtitle {
    font-size: 1rem;
    color: #0B212E;
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
