import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Article from './Article';
import * as R from "./RecentStyle";


const Recent = () => {
    const articles = [
        { title: "노르마, 사우디 IT 기업과 1800만 달러 규모 양자 컴퓨터 공급 계약", thumbnail: "https://cdn.itdaily.kr/news/photo/202412/229403_233998_4838.jpg", url: "http://www.itdaily.kr/news/articleView.html?idxno=229403" },
        { title: "한컴위드, 양자보안 기술 적용 '한컴 엑스디비 5.0' 출시", thumbnail: "https://cdn.ngetnews.com/news/photo/202412/515870_80059_848.jpg", url: "https://www.ngetnews.com/news/articleView.html?idxno=515870" },
        { title: "양자 스핀 네마틱 상 존재 최초 관찰···김범준 교수 12월 과기인상", thumbnail: "https://cdn.hellodd.com/news/photo/202412/106255_326904_5924.jpg", url: "https://www.hellodd.com/news/articleView.html?idxno=106255" }, 
        { title: "GIST, IBS ‘양자변환연구단’ 킥오프 심포지엄 개최", thumbnail: "https://wimg.heraldcorp.com/news/cms/2024/12/04/news-p.v1.20241204.eee3eba012264377839e53f0b07ff946_P1.jpg", url: "https://biz.heraldcorp.com/article/10008681" },
        { title: "[인터뷰] 서울시·KIST가 손 잡은 퀀텀캠퍼스 “양자기술 시대, 산업 전문가 키워 대비해야”", thumbnail: "https://biz.chosun.com/resizer/v2/GPZUU3TQZFDT5CTT4QH4LVDY5I.jpg?auth=1af057be87845ccca9647d735171c32d9bdd17c2841e3fa25d793b5d7efee034&width=616", url: "https://biz.chosun.com/science-chosun/technology/2024/12/02/TQFQC34M2FB3HHLPZRAIFKHHJA/" },
        { title: "\"신약 개발 효율 높인다\"…산업부 양자컴퓨팅 활용사업 본격화", thumbnail: "https://img9.yna.co.kr/photo/yna/YH/2024/11/20/PYH2024112011890006500_P4.jpg", url: "https://www.yna.co.kr/view/AKR20241129022900003" },
        { title: "정부, 내년 양자 신규사업 7건에 491억원 풀어", thumbnail: "https://image.zdnet.co.kr/2024/11/28/d85ee2a05716b0d09d9a6182aea743ea-watermark.jpg", url: "https://zdnet.co.kr/view/?no=20241128085823" },
        { title: "말레이시아 정부와 손잡은 SDT, 양자 기술 새시대 연다", thumbnail: "https://cdn.datanet.co.kr/news/photo/202411/198043_121496_852.jpg", url: "https://www.datanet.co.kr/news/articleView.html?idxno=198043" },
        ];

    const event = [
      { title: "제 4회 양자정보과학 겨울학교", thumbnail: "https://qschool.info/wp-content/uploads/2024/12/img_02-2048x1365.png", url: "https://qschool.info/" },
      { title: "2024 제7회 양자정보학술대회", thumbnail: "https://www.osk.or.kr/upload/conference/banner/1733360509_96798600_206878809.png", url: "https://www.osk.or.kr/conference/event/index.php?cfrid=119" },
      { title: "2024년 초격차 스타트업 1000+ 프로그램의 글로벌 브릿지 프로그램 & KIST-참여기업 상생 MOU 행사", thumbnail: "https://qcenter.kr/uploaded/board/seminar/b13d1da865cb99ed7fa1533f58503e7a0.png", url: "https://qcenter.kr/sub/sub06_03.php?boardid=seminar&mode=view&idx=94&sk=&sw=&offset=&category=" },
      { title: "[QisK] 2025 한국양자정보학회 정기학술대회 및 정기총회", thumbnail: "https://qisk.inforang.com/upload/tmp/1732250083_53275900_215561998.jpg", url: "https://www.qisk.or.kr/content/conferences/pre_reg_guide.php?id=40" },
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
