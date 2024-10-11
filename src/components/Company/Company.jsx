import React, { useRef } from 'react';
import Slider from "react-slick";
import { FaSearch } from 'react-icons/fa'; 
import bg from '/src/assets/image/Company/background.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as C from './CompanyStyle';
import idq from '/src/assets/image/Company/idq.svg';
import ibm from '/src/assets/image/Company/ibm.svg';
import dwave from '/src/assets/image/Company/dwave.svg';
import banner from '/src/assets/image/Company/banner.svg';
import rigetti from '/src/assets/image/Company/rigetti.svg';
import honeywell from '/src/assets/image/Company/honeywell.svg';
import google from '/src/assets/image/Company/google.svg';
import microsoft from '/src/assets/image/Company/microsoft.svg';
import jininfra from '/src/assets/image/Company/jininfra.svg';
import intel from '/src/assets/image/Company/intel.svg';
import alibaba from '/src/assets/image/Company/alibaba.svg';
const Company = () => {
  const storyData = [
    { title: 'IBM', subtitle: '주요 사업 간단 설명', imgSrc: ibm },
    { title: 'D-Wave', subtitle: '주요 사업 간단 설명', imgSrc: dwave },
    { title: 'Rigetti Computing', subtitle: '주요 사업 간단 설명', imgSrc: rigetti },
    { title: 'Honeywell', subtitle: '주요 사업 간단 설명', imgSrc: honeywell },
    { title: 'Google', subtitle: '주요 사업 간단 설명', imgSrc: google },
    { title: 'Microsoft', subtitle: '주요 사업 간단 설명', imgSrc: microsoft },
    { title: 'Intel', subtitle: '주요 사업 간단 설명', imgSrc: intel },
    { title: 'Alibaba', subtitle: '주요 사업 간단 설명', imgSrc: alibaba },
    { title: 'JinInfra', subtitle: '주요 사업 간단 설명', imgSrc: jininfra },
    { title: 'IDQ', subtitle: '주요 사업 간단 설명', imgSrc: idq },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: '30px',
  };
  

  const pauseSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const playSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <C.Container>
      <C.Header>
        <C.Title>양자 관련 주요 기업들</C.Title>
        <C.SearchIcon>
          <FaSearch style={{margin: '0 auto'}} size={24} /> 
        </C.SearchIcon>
      </C.Header>


      <C.SectionTitle style={{marginTop: '5%'}}>주요 기업들</C.SectionTitle>

      <C.PopularStoryWrapper>
        <C.PopularStorySlider
          onMouseEnter={pauseSlider}  
          onMouseLeave={playSlider} 
        >
          {storyData.map((story, index) => (
            <C.StoryCard key={index}>
              <C.CardImage src={story.imgSrc} alt={story.title} />
              <C.StoryCardText>
                <p className="title">{story.title}</p>
                <p className="subtitle">{story.subtitle}</p>
              </C.StoryCardText>
            </C.StoryCard>
          ))}
          {storyData.map((story, index) => (
            <C.StoryCard key={index + storyData.length}>
              <C.CardImage src={story.imgSrc} alt={story.title} />
              <C.StoryCardText>
                <p className="title">{story.title}</p>
                <p className="subtitle">{story.subtitle}</p>
              </C.StoryCardText>
            </C.StoryCard>
          ))}
        </C.PopularStorySlider>
      </C.PopularStoryWrapper>

      <div style={{padding: '50px 0'}}>
        <C.SectionTitle>About</C.SectionTitle>
        <C.ArticleCard>
          <C.ArticleImage src={banner} alt="Nusantara Image" />
          <C.ArticleContent>
            <C.ArticleTitle>About Jininfra</C.ArticleTitle>
            <C.ArticleMeta>
              <span>by Sudarmo</span>
              <span>28 January</span>
            </C.ArticleMeta>
            <C.ArticleDescription>
              설명 설명
            </C.ArticleDescription>
          </C.ArticleContent>
        </C.ArticleCard>
      </div>
      <C.SectionTitle>사업 소개</C.SectionTitle>
      <C.SlideWrapper>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <C.SlideImage src={bg} alt="slide 1" />
            <p>Story of 3</p>
          </div>
          <div>
            <C.SlideImage src={bg} alt="slide 2" />
            <p>Story of 3</p>
          </div>
          <div>
            <C.SlideImage src={bg} alt="slide 3" />
            <p>Story of 3</p>
          </div>
        </Slider>
      </C.SlideWrapper>
    </C.Container>
  );
};

export default Company;
