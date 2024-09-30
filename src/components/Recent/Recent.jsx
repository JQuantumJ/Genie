import React, { useState } from 'react';
import Article from './Article';
import * as R from './RecentStyle';

const Recent = () => {
    const articles = [
        { title: "‘양자 컴퓨팅·AI’, 데이터와 물리적 보안 강화 기반으로 부상", thumbnail: "https://cdn.gttkorea.com/news/photo/202409/13652_14786_5153.jpg", url: "https://www.gttkorea.com/news/articleView.html?idxno=13652" },
        { title: "KISTI, 유럽 최대 광통신학회서 '양자암호키' 서비스 기술 시연", thumbnail: "https://img.etnews.com/news/article/2024/09/30/news-p.v1.20240930.4bb553c3094f4e18a58b421bbec958bd_P1.jpg", url: "https://www.etnews.com/20240930000115" }, 
        { title: "KT, 양자내성암호(PQC) 솔루션 상용화 나선다", thumbnail: "https://cdn.news.dealsitetv.com/news/photo/202406/117603_104401_2646.jpg", url: "https://news.dealsitetv.com/news/articleView.html?idxno=117603" },
        { title: "IBM, NIST 양자내성암호 표준에 적합한 알고리즘 채택돼", thumbnail: "https://www.hellot.net/data/photos/20240833/art_1723860279271_b728b2.jpg", url: "https://www.hellot.net/news/article.html?no=92634" },
        { title: "[PASCON 2024-영상] 탈레스 “양자 공격 대비 양자 내성 암호(PQC)로 전환 서둘러야”", thumbnail: "https://www.dailysecu.com/news/photo/202409/159539_187007_219.jpg", url: "https://www.dailysecu.com/news/articleView.html?idxno=159539" },
        { title: "AI·양자·바이오…미래 결정할 3대 혁신기술 “한눈에”", thumbnail: "https://image.zdnet.co.kr/2024/09/30/14a1342f7f0d2a1757b21aec62f7b542.jpg", url: "https://zdnet.co.kr/view/?no=20240930151610" }, 
        { title: "[방산보안Q (9)] 심상국 ㈜티엔젠 대표, “유무인 복합체계의 데이터 보호를 위해 데이터 전송부터 저장까지 종단간 암호화가 필요하다”", thumbnail: "https://cdn.news2day.co.kr/data2/content/image/2024/09/30/.cache/512/20240930500040.png", url: "https://www.news2day.co.kr/article/20240930500041" },
        { title: "양자컴퓨팅 시대 머지않아…“준비 없이는 파국”", thumbnail: "https://www.ddaily.co.kr/photos/2024/09/26/2024092610255047013_l.png", url: "https://www.ddaily.co.kr/page/view/2024092611331007258" },
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
