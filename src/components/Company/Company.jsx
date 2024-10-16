import React, { useRef } from 'react';
import Slider from "react-slick";
import { FaSearch } from 'react-icons/fa'; 
import { useNavigate, Link } from 'react-router-dom';
import bg from '/src/assets/image/Company/background.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as C from './CompanyStyle';
import idq from '/src/assets/image/Company/idq.svg';
import ibm from '/src/assets/image/Company/ibm.svg'
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
  const navigate=useNavigate();
  const storyData = [
    { title: 'IBM', subtitle: 'IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.', imgSrc: ibm, route: 'ibm' },
    { title: 'D-Wave', subtitle: 'D-Wave는 양자 어닐링(annealing) 기반 시스템을 제공하며, 최적화 문제 해결에 특화된 양자 컴퓨터를 개발합니다.', imgSrc: dwave, route: 'dwave' },
    { title: 'Rigetti Computing', subtitle: 'Rigetti Computing은 양자 회로 기반 시스템을 개발하며, 하이브리드 양자-클래식 컴퓨팅을 통해 양자 컴퓨팅을 상용화하려고 합니다.', imgSrc: rigetti, route: 'rigetti' },
    { title: 'Honeywell', subtitle: 'Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.', imgSrc: honeywell, route: 'honeywell' },
    { title: 'Google', subtitle: 'Google Quantum AI는 시너지 효과를 노리며, 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 연구 중입니다.', imgSrc: google, route: 'google' },
    { title: 'Microsoft', subtitle: 'Microsoft는 Azure Quantum 플랫폼을 통해 클라우드 기반 양자 컴퓨팅 서비스와 도구를 제공하며, 트래픽슘 기반의 양자 컴퓨터를 개발 중입니다.', imgSrc: microsoft, route: 'microsoft' },
    { title: 'Intel', subtitle: 'Intel은 양자 컴퓨팅 하드웨어와 소프트웨어 생태계를 구축하고 있으며, 상용화 가능한 양자 프로세서를 개발 중입니다.', imgSrc: intel, route: 'intel' },
    { title: 'Alibaba', subtitle: 'Alibaba는 클라우드 기반의 양자 컴퓨팅 서비스를 제공하며, 양자 암호화 및 인공지능 연구에 집중하고 있습니다.', imgSrc: alibaba, route: 'alibaba' },
    { title: 'JinInfra', subtitle: 'JinInfra는 양자 네트워크 인프라와 보안 솔루션을 개발하여 양자 통신 기술 상용화에 주력하고 있습니다.', imgSrc: jininfra, route: 'jininfra' },
    { title: 'IDQ', subtitle: 'IDQ는 양자 키 분배(QKD) 기반 보안 솔루션을 제공하며, 양자 암호화 및 통신 보안 기술을 연구하고 있습니다.', imgSrc: idq, route: 'idq' },
  ];

  const sliderRef = useRef(null);
  const handleSlideClick = (businessName) => {
    navigate(`/business/${businessName.toLowerCase()}`);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
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
  const handleCardClick = (route) => {
    navigate(`/company/${route}`); 
  };
  return (
    <C.Container>
      <C.Header>
      <C.BackgroundImage src={banner} alt="banner image" />
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
            <C.StoryCard key={index} onClick={() => handleCardClick(story.route)}>
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
        <div onClick={() => handleSlideClick('Finance')}>
          <C.SlideImage src={bg} alt="Finance" />
          <p>금융</p>
        </div>
        <div onClick={() => handleSlideClick('Chemistry')}>
          <C.SlideImage src={bg} alt="Chemistry" />
          <p>화학 및 기타 과학</p>
        </div>
        <div onClick={() => handleSlideClick('Logistics')}>
          <C.SlideImage src={bg} alt="Logistics" />
          <p>물류 및 최적화</p>
        </div>
      </Slider>
    </C.SlideWrapper>
        </C.Container>
  );
};

export default Company;
