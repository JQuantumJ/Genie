import React, { useState } from 'react';
import Article from './Article';
import * as R from './RecentStyle';

const Recent = () => {
    const articles = [
        { title: "부산시, 포스코와 양자컴퓨팅 기반 미래 혁신소재 협력", thumbnail: "https://img8.yna.co.kr/photo/cms/2023/07/12/81/PCM20230712000081990_P4.jpg", url: "https://www.yna.co.kr/view/AKR20241028017000051?input=1195m" },
        { title: "LGU+, 다계층 양자내성암호 장비 개발", thumbnail: "https://image.newsis.com/2024/10/25/NISI20241025_0001685555_web.jpg?rnd=20241025083746", url: "https://www.newsis.com/view/NISX20241025_0002933627" }, 
        { title: "네덜란드, 12월부터 양자기술 관련 제품 수출통제", thumbnail: "https://img8.yna.co.kr/photo/etc/af/2024/10/12/PAF20241012110701009_P4.jpg", url: "https://www.yna.co.kr/view/AKR20241020055700098?input=1195m" },
        { title: "GIST-IBS, '강력장 양자전기역학 현상' 세계 최초 입증", thumbnail: "https://image.newsis.com/2024/10/21/NISI20241021_0001681737_web.jpg?rnd=20241021141711", url: "https://www.newsis.com/view/NISX20241021_0002927863" },
        { title: "정부, 노벨상 수상자 알랭 아스페 교수와 양자기술 협업 나서", thumbnail: "https://image.newsis.com/2024/10/22/NISI20241022_0001683269_web.jpg?rnd=20241022214821", url: "https://www.newsis.com/view/NISX20241022_0002930122" },
        { title: "SKT, 양자암호 양대 기술 QKD PQC 하나로 묶었다", thumbnail: "https://cdn.digitaltoday.co.kr/news/photo/202410/537045_501813_1137.jpg", url: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=537045" },
        { title: "노르마 “양자 SW-HW 기술 연동해 풀스택 기업 도약”", thumbnail: "https://cdn.enewstoday.co.kr/news/photo/202410/2186172_993108_5327.jpg", url: "https://www.enewstoday.co.kr/news/articleView.html?idxno=2186172" },
        { title: "한국 양자기술 수준 주요국 중 최하위…양자컴은 100점 기준 2.3점", thumbnail: "https://image.dongascience.com/Photo/2024/06/5889cdb1752d35425c5c96fb03f9acb0.jpg", url: "https://m.dongascience.com/news.php?idx=66161" },
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
