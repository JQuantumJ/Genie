import React, { useState } from 'react';
import * as C from './ConceptStyle'; // 스타일 파일 연결

const Concept = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <C.ConceptWrapper>
      <h1>양자 개념</h1>
      <hr/>
      <div className="accordion-item">
        <div 
          className={`accordion-title ${activeIndex === 0 ? 'active' : ''}`} 
          onClick={() => toggleAccordion(0)}
        >
          <span>양자란 ?</span>
          <span>{activeIndex === 0 ? '▲' : '▼'}</span>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content">
            <p>더 이상 나눌 수 없는 에너지의 최소량의 단위.</p>
            <p>복사 에너지에서 처음 발견하여 '에너지 양자'라고 불렀으며</p>
            <p>그것이 빛으로서 공간을 진행할 경우 '광양자'라고 한다.</p>
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div 
          className={`accordion-title ${activeIndex === 1 ? 'active' : ''}`} 
          onClick={() => toggleAccordion(1)}
        >
          <span>양자역학이란 ?</span>
          <span>{activeIndex === 1 ? '▲' : '▼'}</span>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-content">
            <p>입자 및 입자 집단을 다루는 현대 물리학의 기초 이론. </p>
            <p>입자가 가지는 파동과 입자의 이중성, 측정에서의 불확정 관계 따위를 설명한다. </p>
            <p>1925년 하이젠베르크의 행렬 역학과 슈뢰딩거의 파동 역학이 통합된 이론이다.</p>
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div 
          className={`accordion-title ${activeIndex === 2 ? 'active' : ''}`} 
          onClick={() => toggleAccordion(2)}
        >
          <span>불확정성의 원리</span>
          <span>{activeIndex === 2 ? '▲' : '▼'}</span>
        </div>
        {activeIndex === 2 && (
          <div className="accordion-content">
            <p>그것이 빛으로서 공간을 진행할 경우 '광양자'라고 한다.</p>
          </div>
        )}
      </div>
    </C.ConceptWrapper>
  );
};

export default Concept;
