import React, { useState } from 'react';
import Article from './Article';
import * as R from './RecentStyle';

const Recent = () => {
    const articles = [
        { title: "SKT, 양자암호 양대 기술 QKD PQC 하나로 묶었다", thumbnail: "https://cdn.digitaltoday.co.kr/news/photo/202410/537045_501813_1137.jpg", url: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=537045" },
        { title: "노르마 “양자 SW-HW 기술 연동해 풀스택 기업 도약”", thumbnail: "https://cdn.enewstoday.co.kr/news/photo/202410/2186172_993108_5327.jpg", url: "https://www.enewstoday.co.kr/news/articleView.html?idxno=2186172" },
        { title: "한국 양자기술 수준 주요국 중 최하위…양자컴은 100점 기준 2.3점", thumbnail: "https://image.dongascience.com/Photo/2024/06/5889cdb1752d35425c5c96fb03f9acb0.jpg", url: "https://m.dongascience.com/news.php?idx=66161" },
        { title: "정부, 양자산업 주도할 국무총리급 거버넌스 만든다", thumbnail: "https://image.zdnet.co.kr/2024/10/11/dadff46fd0a6b54d8c820aeafd8a5db1.jpg", url: "https://zdnet.co.kr/view/?no=20241011235409" }, 
        { title: "세계 최초 하이브리드 양자 오류정정 기술 개발", thumbnail: "https://image.dongascience.com/Photo/2024/10/b5179352882605f04640c1b8edce03d1.png", url: "https://www.dongascience.com/news.php?idx=67764" },
        { title: "불교와 만난 양자역학…“집착·걱정 버리고 현재에 충실하라”", thumbnail: "https://img1.yna.co.kr/etc/inner/KR/2024/10/10/AKR20241010085300005_01_i_P4.jpg", url: "https://www.yna.co.kr/view/AKR20241010085300005?input=1195m" },
        { title: "[임수연의 이과감성] 양자역학과 다중우주론의 온기", thumbnail: "https://image.cine21.com/resize/cine21/movie/2024/0927/16_44_30__66f6625e2ac97[W680-].jpg", url: "http://www.cine21.com/news/view/?mag_id=105904&utm_source=naver&utm_medium=news" },
        { title: "‘양자 컴퓨팅·AI’, 데이터와 물리적 보안 강화 기반으로 부상", thumbnail: "https://cdn.gttkorea.com/news/photo/202409/13652_14786_5153.jpg", url: "https://www.gttkorea.com/news/articleView.html?idxno=13652" },
       
        
    ];

  return (
    <R.Wrapper>
    <R.ConceptWrapper>
    <div>
      <h1>양자 기술 관련 뉴스</h1>
      <Article articles={articles} />
    </div>
    </R.ConceptWrapper> 
    </R.Wrapper>
  );
};

export default Recent;
