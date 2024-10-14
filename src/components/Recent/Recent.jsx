import React, { useState } from 'react';
import Article from './Article';
import * as R from './RecentStyle';

const Recent = () => {
    const articles = [
        { title: "불교와 만난 양자역학…“집착·걱정 버리고 현재에 충실하라”", thumbnail: "https://img1.yna.co.kr/etc/inner/KR/2024/10/10/AKR20241010085300005_01_i_P4.jpg", url: "https://www.yna.co.kr/view/AKR20241010085300005?input=1195m" },
        { title: "[임수연의 이과감성] 양자역학과 다중우주론의 온기", thumbnail: "https://image.cine21.com/resize/cine21/movie/2024/0927/16_44_30__66f6625e2ac97[W680-].jpg", url: "http://www.cine21.com/news/view/?mag_id=105904&utm_source=naver&utm_medium=news" },
        { title: "세계 최초 하이브리드 양자 오류정정 기술 개발", thumbnail: "https://image.dongascience.com/Photo/2024/10/b5179352882605f04640c1b8edce03d1.png", url: "https://www.dongascience.com/news.php?idx=67764" },
        { title: "‘양자 컴퓨팅·AI’, 데이터와 물리적 보안 강화 기반으로 부상", thumbnail: "https://cdn.gttkorea.com/news/photo/202409/13652_14786_5153.jpg", url: "https://www.gttkorea.com/news/articleView.html?idxno=13652" },
        { title: "KISTI, 유럽 최대 광통신학회서 '양자암호키' 서비스 기술 시연", thumbnail: "https://img.etnews.com/news/article/2024/09/30/news-p.v1.20240930.4bb553c3094f4e18a58b421bbec958bd_P1.jpg", url: "https://www.etnews.com/20240930000115" }, 
        { title: "KT, 양자내성암호(PQC) 솔루션 상용화 나선다", thumbnail: "https://cdn.news.dealsitetv.com/news/photo/202406/117603_104401_2646.jpg", url: "https://news.dealsitetv.com/news/articleView.html?idxno=117603" },
        { title: "IBM, NIST 양자내성암호 표준에 적합한 알고리즘 채택돼", thumbnail: "https://www.hellot.net/data/photos/20240833/art_1723860279271_b728b2.jpg", url: "https://www.hellot.net/news/article.html?no=92634" },
        { title: "[PASCON 2024-영상] 탈레스 “양자 공격 대비 양자 내성 암호(PQC)로 전환 서둘러야”", thumbnail: "https://www.dailysecu.com/news/photo/202409/159539_187007_219.jpg", url: "https://www.dailysecu.com/news/articleView.html?idxno=159539" },
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
