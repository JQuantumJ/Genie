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
              <p>기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 <span style={{color: '#B0E3FF'}}>큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다.</span></p>
              <br></br> <p>이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데,
              이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다.</p>         
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
              <p>기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 <span style={{color: '#B0E3FF'}}>큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다.</span></p>
              <br></br> <p>이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데,
              이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다.</p>        
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
              <p>기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 <span style={{color: '#B0E3FF'}}>큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다.</span></p>
              <br></br> <p>이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데,
              이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다.</p>      
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
              <p>기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 <span style={{color: '#B0E3FF'}}>큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다.</span></p>
              <br></br> <p>이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데,
              이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다.</p>      
            </div>
          )}
        </div>
      <div>
        <h1>양자 기술 관련 뉴스</h1>
        <hr/>
        <Article articles={articles} />
        <a 
          href="https://www.kqic.kr/main/q_info_tech_whitepaper_2023.pdf" // Replace with the actual path to your document
          download="2023 양자정보기술 백서.pdf" // Specify the name for the downloaded file
        >
          <R.Button>
              2023 양자정보기술 백서 다운로드 하기 ↗
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
