import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Article from './Article';
import * as R from "./RecentStyle";


const Recent = () => {
    const articles = [
        { title: "127큐비트 IBM 양자컴퓨터, 연세대서 국내 첫 가동", thumbnail: "https://img.etnews.com/news/article/2024/11/20/news-p.v1.20241120.e311d51dfa2f4a3e9ec7e3abd4487c24_P1.jpg", url: "https://www.etnews.com/20241120000271" },
        { title: "한국 양자기술 기업 SDT, 초전도 양자컴 생산 나서", thumbnail: "https://image.dongascience.com/Photo/2024/11/125a2f11fb9b5e7e689c3553f15a289e.jpg", url: "https://www.dongascience.com/news.php?idx=68541" }, 
        { title: "국가기술표준원, 양자기술 국제표준 선점 전략 청사진 마련", thumbnail: "https://www.boannews.com/media/upFiles2/2024/11/825356645_385.jpg", url: "https://m.boannews.com/html/detail.html?mtype=3&tab_type=6&idx=134347" },
        { title: "키사이트, 구글 퀀텀 AI와 협력해 양자 회로 시뮬레이션 출시", thumbnail: "https://www.hellot.net/data/photos/20241147/art_17321490211573_6be184.jpg", url: "https://www.hellot.net/news/article.html?no=95575" },
        { title: "KT, '하이브리드 양자보안 VPN' 기술 실증…이중보안 구현", thumbnail: "https://image.newsis.com/2024/11/19/NISI20241119_0001706762_web.jpg?rnd=20241119090950", url: "https://www.newsis.com/view/NISX20241119_0002964011" },
        { title: "큐비트 대신 '큐디트'로 구현한 양자컴, 16차원 계산 성공", thumbnail: "https://image.dongascience.com/Photo/2024/11/450054b59fc6e3b494019d3e5272e60f.jpg", url: "https://m.dongascience.com/news.php?idx=68315" },
        { title: "표준硏, 양자 과학기술 연구 'K-퀀텀 국제협력본부' 운영", thumbnail: "https://img2.yna.co.kr/etc/inner/KR/2024/11/18/AKR20241118035500063_01_i_P4.jpg", url: "https://www.yna.co.kr/view/AKR20241118035500063?input=1195m" },
        { title: "서울대, 하이브리드 양자컴퓨팅 센터 (IRC) 개소식 개최", thumbnail: "https://cdn.news.unn.net/news/photo/202411/571300_385789_341.jpg", url: "https://news.unn.net/news/articleView.html?idxno=571300" },
    ];

    const event = [
      { title: "2025년 KAIST-MIT Quantum Winter Camp", thumbnail: "https://quantumschool.kaist.ac.kr/_files/board/20241104//bdbb84d4aaddc3ab3580bb4b3b01b6a0.jpg", url: "https://quantumschool.kaist.ac.kr/notice/view/id/30#u" },
      { title: "2024 DIPS GLOBAL TECH CON(양자기술) 행사", thumbnail: "https://eventusstorage.blob.core.windows.net/evs/Image/2024dips/94529/ProjectInfo/Cover/889059be4f7f43cb83a3c445b4a7b2a4.jpg", url: "https://event-us.kr/2024dips/event/94529" },
      { title: "2024 제6회 양자정보세미나", thumbnail: "https://qcenter.kr/uploaded/summernote/202411/0836bb7fd39848b9d214e91ae04439bc.png", url: "https://qcenter.kr/sub/sub06_03.php?boardid=seminar&mode=view&idx=89&sk=&sw=&offset=&category=" },
      { title: "2024 퀀텀 영상 콘텐츠 공모전", thumbnail: "https://qcenter.kr/uploaded/summernote/202411/e893e963d4cc47d701e1be2f513c4f11.jpg", url: "https://qcenter.kr/sub/sub06_03.php?boardid=seminar&mode=view&idx=84&sk=&sw=&offset=&category=" },
    ];

  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    
  const navigate = useNavigate();
  return (
    <R.Wrapper>
    <R.ConceptWrapper>
    <h1>양자 기술 동향</h1>
        <hr/>
        <div className="accordion-item">
          <div 
            className={`accordion-title ${activeIndex === 0 ? 'active' : ''}`} 
            onClick={() => toggleAccordion(0)}
          >
            <span>글로벌 시장 동향</span>
            <span>{activeIndex === 0 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 0 && (
            <div className="accordion-content">
              <p>2023년 기준, 전 세계 양자기술 시장 규모는 약 20.65억 달러로 추산되며, 연평균 22.7%의 성장률을 보일 것으로 예상됩니다.</p>
              <br/><p><span style={{color: '#B0E3FF'}}>미국</span>에서는 2019년부터 5년간 최대 13억 달러를 양자기술 연구개발에 투자하고 있으며, 국방부와 정보기관, 연구소가 중심이 되어 개발 사업을 본격화하고 있습니다. <br />
              <br/><span style={{color: '#B0E3FF'}}>중국</span>은 세계 최대 규모의 국립양자정보과학연구소를 설립하고, 2018년부터 2022년까지 <br/>약 1천억 위안(약 16.5조 원)을 투자하여 양자통신 분야에서 두각을 나타내고 있습니다. <br/>
              <br/><span style={{color: '#B0E3FF'}}>유럽연합</span>에서는 Quantum Flagship' 프로그램을 통해 양자컴퓨팅, 양자통신 등 양자응용연구와 상용화를 추진하고 있으며, 2028년까지 10억 유로를 투자하여 양자 연구 리더십 유지와 산업 경쟁력 향상을 목표로 하고 있습니다.</p>      
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div 
            className={`accordion-title ${activeIndex === 1 ? 'active' : ''}`} 
            onClick={() => toggleAccordion(1)}
          >
            <span>국내외 정책 동향</span>
            <span>{activeIndex === 1 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="accordion-content">
              <p><span style={{color: '#B0E3FF'}}>국내 정책</span></p>
              <p>한국 정부는 2021년 '양자기술 연구개발 투자전략'을 수립하여 2030년대 양자 기술 4대 강국 진입을 목표로 중장기 비전을 제시하였습니다.</p>
              <br/><p><span style={{color: '#B0E3FF'}}>국외 정책</span></p>
              <p> 미국, 중국, 유럽 등 주요 국가들은 양자 기술의 전략적 중요성을 인식하고 대규모 투자를 진행하고 있습니다.<br/>
              미국은 양자과학기술을 미래 게임체인저로 인식하고, 2019년부터 2022년까지 약 4조 원을 투자하여 양자기술 전략화 경쟁의 주도권 확보에 나서고 있습니다.<br/> 또한, 양자네트워크 전략 비전을 통해 장기 20년간의 양자네트워크 비전을 제시하였습니다.</p>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div 
            className={`accordion-title ${activeIndex === 2 ? 'active' : ''}`} 
            onClick={() => toggleAccordion(2)}
          >
            <span>양자 기술 R&D 동향</span>
            <span>{activeIndex === 2 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="accordion-content">
              <p>양자 기술의 연구개발은 <span style={{color: '#B0E3FF'}}>양자 컴퓨팅, 양자 통신, 양자 센싱</span> 등 다양한 분야에서 활발히 진행되고 있습니다.<br/>
              국내에서는 연세대학교가 127큐비트 성능의 'IBM 퀀텀 시스템 원'을 도입하여 양자 컴퓨팅 연구를 선도하고 있습니다</p> 
              <br/><p>유럽 주요국은 양자 과학기술 분야에서 공동연구 및 인력교류 등 <span style={{color: '#B0E3FF'}}>국가 간 협력사업</span>을 추진하고 있습니다. 이를 통해 양자기술의 발전과 산업화를 촉진하고 있습니다.</p>
              <br/><p>정부는 국내 산·학·연이 해외 우수 연구기관과 협업할 수 있도록 벨기에에 <span style={{color: '#B0E3FF'}}>'한-유럽 양자 과학센터'</span>를 개소하였습니다. 이를 통해 국제 협력을 강화하고 양자 과학기술의 발전을 도모하고 있습니다.</p>     
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div 
            className={`accordion-title ${activeIndex === 3 ? 'active' : ''}`} 
            onClick={() => toggleAccordion(3)}
          >
            <span>양자 기술 산업 생태계</span>
            <span>{activeIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 3 && (
            <div className="accordion-content">
              <p>양자 기술 산업 생태계는 기업, 연구기관, 정부 등이 협력하여 발전하고 있습니다.</p><br/>
              <p>국내에서는  <span style={{color: '#B0E3FF'}}>양자산업생태계지원센터(K-QIC)</span>가 설립되어 양자 기술 사업화 및 혁신기업 육성, 양자 정보통신 테스트베드 기반 시험·검증 등을 지원하고 있습니다. </p>    
              <br/><p> 서울시와 한국과학기술연구원(KIST)은 양자 산업 기반을 구축하기 위해 <span style={{color: '#B0E3FF'}}>'양자기술 산업전문과정'</span>을 개설하여 운영하고 있습니다. 이를 통해 양자 기술의 이해와 활용법을 습득하여 연구개발과 사업화를 활성화하고자 합니다.</p>
              <br/><p>이러한 동향은 양자 기술이 미래 산업의 핵심으로 부상하고 있음을 보여주며, 각국의 적극적인 투자와 연구개발이 지속되고 있습니다.</p>  
            </div>
          )}
        </div>
      <div>
        <h1>양자 기술 관련 뉴스</h1>
        <hr/>
        <Article articles={articles} />
        <a 
          href="https://www.kqic.kr/main/q_info_tech_whitepaper_2023.pdf" 
          download="2023 양자정보기술 백서.pdf" 
        >
          <R.Button>
              2023 양자정보기술 백서 다운로드 하기 📥
          </R.Button>              
        </a>
      </div>
      <div>
        <h1>양자 관련 행사 정보</h1>
        <hr/>
        <Article articles={event} />
      </div>
    </R.ConceptWrapper> 
    </R.Wrapper>
  );
  
};

export default Recent;
