import React from 'react';
import { useParams } from 'react-router-dom';
import * as C from './CompanyStyle';
import banner from '/src/assets/image/Company/banner.svg';

const BusinessDetails = {
  finance: {
    title: '금융 (Finance)',
    intro: '양자 컴퓨팅은 금융 리스크 분석과 포트폴리오 최적화에 사용됩니다.',
    content: [
      { 
        subtitle: '리스크 분석', 
        text: '양자 컴퓨터는 복잡한 금융 상품들의 리스크를 빠르게 분석하며, 양자 알고리즘으로 리스크 예측의 정확성을 높입니다.' 
      },
      { 
        subtitle: '포트폴리오 최적화', 
        text: '투자 포트폴리오의 수익을 극대화하고 리스크를 최소화하기 위해 양자 알고리즘을 사용합니다.' 
      },
      { 
        subtitle: '사례', 
        text: 'Goldman Sachs와 IBM은 포트폴리오 최적화와 옵션 가격 책정에 양자 알고리즘을 활용한 연구를 진행 중입니다.' 
      },
    ],
  },
  chemistry: {
    title: '화학 및 재료 과학 (Chemistry & Material Science)',
    intro: '양자 컴퓨터는 화학 반응 시뮬레이션과 신약 개발에 활용됩니다.',
    content: [
      { 
        subtitle: '신약 개발', 
        text: '단백질과 화합물 간의 상호작용을 정확하게 시뮬레이션하여 신약 개발 시간을 단축합니다.' 
      },
      { 
        subtitle: '화학 반응 시뮬레이션', 
        text: '분자 구조와 화학 반응을 정확하게 예측해 연구 시간을 단축하고 정확도를 높입니다.' 
      },
      { 
        subtitle: '사례', 
        text: 'Pfizer와 IBM은 양자 컴퓨터를 활용한 신약 개발 연구를 진행하고 있습니다.' 
      },
    ],
  },
  logistics: {
    title: '물류 및 최적화 (Logistics & Optimization)',
    intro: '물류 경로 최적화와 공급망 관리를 통해 비용 절감과 효율성을 극대화합니다.',
    content: [
      { 
        subtitle: '물류 최적화', 
        text: '수많은 경로와 제약 조건을 고려해 최적의 운송 경로를 제시합니다.' 
      },
      { 
        subtitle: '공급망 최적화', 
        text: '공급망의 모든 단계를 고려해 효율적인 경로와 재고 관리를 계산합니다.' 
      },
      { 
        subtitle: '사례', 
        text: 'Volkswagen은 양자 컴퓨터로 교통 흐름을 최적화하고, DHL은 배송 경로 최적화를 연구 중입니다.' 
      },
    ],
  },
};

const BusinessDetail = () => {
  const { businessName } = useParams();
  const business = BusinessDetails[businessName];

  if (!business) {
    return <p>존재하지 않는 산업입니다.</p>;
  }

  return (
    <C.Container>
      <C.Header>
        <C.BackgroundImage src={banner} alt="banner image" />
        <C.Title>{business.title}</C.Title>
      </C.Header>
      <C.Div style={{padding: '5% 0'}}>
        <C.Intro>{business.intro}</C.Intro>
        {business.content.map((section, index) => (
        <C.Bubble style={{marginBottom: '2%', alignItems: 'center'}}>
          <C.Section key={index}>
            <C.Subtitle>{section.subtitle}</C.Subtitle>
            <C.Text>{section.text}</C.Text>
          </C.Section>
          </C.Bubble>
        ))}
      </C.Div>
    </C.Container>
  );
};

export default BusinessDetail;
