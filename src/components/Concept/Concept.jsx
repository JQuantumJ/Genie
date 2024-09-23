import React, { useState } from 'react';
import * as C from './ConceptStyle';

const Concept = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <C.Wrapper>
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
          <span>양자역학이란 ?</span>
          <span>{activeIndex === 1 ? '▲' : '▼'}</span>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-content">
            <p>입자 및 입자 집단을 다루는 현대 물리학의 기초 이론입니다. 
              입자가 가지는 파동과 입자의 이중성, 측정에서의 불확정 관계 따위를 설명합니다.
              1925년 하이젠베르크의 행렬 역학과 슈뢰딩거의 파동 역학이 통합된 이론입니다.
              양자역학은 원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론으로, 
              이 입자들은 고전 물리학과는 다르게 파동과 입자 모두의 성질을 가집니다.
              그로 인해 입자의 위치나 운동량을 동시에 정확하게 알 수 없다는 불확정성 원리가 등장합니다.</p>
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
            <h1 style={{marginBottom: '1%', color: '#eee'}}>"입자의 위치나 운동량을 동시에 정확하게 알 수 없다"</h1>
            <p>하이젠베르크는 방정식들을 연구하는 동안 어떤 특성은 정확하게 측정하는 것이 불가능하다는 사실을 깨달았는데, 그 이유는 사용하는 실험 장치가 측정하는 원자에 영향을 미치기 때문이었습니다.
            입자의 위치와 운동량은 동시에 추론할 수 없으며, 주어진 순간의 에너지도 알 수 없었습니다.

            어떠한 측정이든 어느 정도의 불확정성이 있지만,
            하이젠베르크의 불확정성은 측정 차원의 오류가 아닙니다.
            사용하는 장비가 아무리 정확해도 운동량과 위치를 동시에 정확히 알 수 없다는 것입니다.
            하나의 값을 고정하면 다른 값은 더욱 불확실해집니다.</p>
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div 
          className={`accordion-title ${activeIndex === 3 ? 'active' : ''}`} 
          onClick={() => toggleAccordion(3)}
        >
          <span>슈뢰딩거의 고양이</span>
          <span>{activeIndex === 3 ? '▲' : '▼'}</span>
        </div>
        {activeIndex === 3 && (
          <div className="accordion-content">
<<<<<<< HEAD
            <p>슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 에르빈 슈뢰딩거가 제안한 사고 실험입니다.
            이 실험은 양자역학의 중첩(superposition) 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다.
            특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다.</p>
            <a href="/cat">detail ➡️</a>
=======
            <p>슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 에르빈 슈뢰딩거가 제안한 사고 실험입니다.</p> 
            <p>이 실험은 양자역학의 중첩(superposition) 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다. </p>
            <p>특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다.</p>
            <a href="/Cat">detail ➡️</a>
>>>>>>> 1e488bee2f1f58a7e7c0c708e83a68b3e4787f87
          </div>
        )}
      </div>
    </C.ConceptWrapper>
    </C.Wrapper>
  );
};

export default Concept;
