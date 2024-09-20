// Description.jsx
import React, { useState } from 'react';
import * as D from './DescriptionStyle';

const Description = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    return (
      <D.Wrapper>
      <D.ConceptWrapper>
        <h1>양자 활용</h1>
        <hr/>
        <div className="accordion-item">
          <div 
            className={`accordion-title ${activeIndex === 0 ? 'active' : ''}`} 
            onClick={() => toggleAccordion(0)}
          >
            <span>양자 컴퓨터</span>
            <span>{activeIndex === 0 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 0 && (
            <div className="accordion-content">
              <p>양자란, 더 이상 나눌 수 없는 에너지의 최소량의 단위입니다.</p>
              <p>복사 에너지에서 처음 발견하여 '에너지 양자'라고 불렀으며</p>
              <p>그것이 빛으로서 공간을 진행할 경우 '광양자'라고 합니다.</p>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div 
            className={`accordion-title ${activeIndex === 1 ? 'active' : ''}`} 
            onClick={() => toggleAccordion(1)}
          >
            <span>양자 암호통신</span>
            <span>{activeIndex === 1 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="accordion-content">
              <p>입자 및 입자 집단을 다루는 현대 물리학의 기초 이론입니다. </p>
              <p>입자가 가지는 파동과 입자의 이중성, 측정에서의 불확정 관계 따위를 설명합니다. </p>
              <p>1925년 하이젠베르크의 행렬 역학과 슈뢰딩거의 파동 역학이 통합된 이론입니다.</p>
              <p>양자역학은 원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론으로, </p>
              <p>이 입자들은 고전 물리학과는 다르게 파동과 입자 모두의 성질을 가집니다.</p>
              <p>그로 인해 입자의 위치나 운동량을 동시에 정확하게 알 수 없다는 불확정성 원리가 등장합니다.</p>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div 
            className={`accordion-title ${activeIndex === 2 ? 'active' : ''}`} 
            onClick={() => toggleAccordion(2)}
          >
            <span>양자 센서</span>
            <span>{activeIndex === 2 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="accordion-content">
              <h1 style={{marginBottom: '1%', fontSize: '2rem', color: '#eee'}}>"입자의 위치나 운동량을 동시에 정확하게 알 수 없다"</h1>
              <p>하이젠베르크는 방정식들을 연구하는 동안 어떤 특성은 정확하게 측정하는 것이 불가능하다는 사실을 깨달았는데, </p>
              <p>그 이유는 사용하는 실험 장치가 측정하는 원자에 영향을 미치기 때문이었다.</p>
              <p>입자의 위치와 운동량은 동시에 추론할 수 없으며, 주어진 순간의 에너지도 알 수 없었다.</p>
              <p>어떠한 측정이든 어느 정도의 불확정성이 있지만, </p>
              <p>하이젠베르크의 불확정성은 측정 차원의 오류가 아니다.</p>
              <p>사용하는 장비가 아무리 정확해도 운동량과 위치를 동시에 정확히 알 수 없다는 것이다. </p>
              <p>하나의 값을 고정하면 다른 값은 더욱 불확실해진다.</p>
            </div>
          )}
        </div>
      </D.ConceptWrapper>
      </D.Wrapper>
    );
};
  

export default Description;
