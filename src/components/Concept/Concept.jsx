import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Ball from '/src/assets/image/Concept/ball.svg';
import Ball2 from '/src/assets/image/Concept/ball2.svg';
import Quantum2 from '/src/assets/image/Concept/quantum2.svg';
import * as C from './ConceptStyle';
import styled, { keyframes } from 'styled-components';
const CenteredDiv = styled.div`
  text-align: center;
  height: 50vh;
  @media (max-width: 700px) {
    height: 20vh; 
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const RotatingImage = styled.img`
  max-width: 33%;
  animation: ${rotate} 8s linear infinite;
`;

const MoreButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;


const Concept = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
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
            <p style={{marginBottom: '2%'}}>양자란, 더 이상 나눌 수 없는 에너지의 최소량의 단위입니다.
              쉽게 말해, <span style={{color: '#B0E3FF'}}>우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자</span>라고 부릅니다.
              처음으로 양자는 빛에서 발견되었으며, 
              이 작은 에너지가 어떻게 움직이는지 연구하는 것이 바로 양자 물리학, 양자 역학의 시작입니다.</p>
              <CenteredDiv>
                <RotatingImage style={{maxWidth: '33%'}} src={Quantum2} />
              </CenteredDiv>
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
              양자역학은 <span style={{color: '#B0E3FF'}}>원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론</span>으로, 
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
            <hr style={{border: 'none', borderTop: '0.5px solid #ddd'}}/>
            <p>하이젠베르크는 방정식들을 연구하는 동안 어떤 특성은 정확하게 측정하는 것이 불가능하다는 사실을 깨달았는데, 그 이유는 사용하는 실험 장치가 측정하는 원자에 영향을 미치기 때문이었습니다.
            입자의 위치와 운동량은 동시에 추론할 수 없으며, 주어진 순간의 에너지도 알 수 없었습니다.
            하이젠베르크라는 물리학자는 실험을 통해, 우리가 아무리 정밀한 장비를 사용하더라도 입자의 위치를 알면 그 입자의 속도를 정확히 알 수 없고, 반대로 속도를 알면 위치를 정확히 알 수 없다는 것을 발견했습니다.
            이는 마치 <span style={{color: '#B0E3FF'}}>우리가 축구공을 발로 찬 후에 그 공의 정확한 위치와 속도를 동시에 파악하기 어려운 것</span>과 비슷합니다.
            특히, 측정 차원의 오류가 아니라, 사용하는 장비가 아무리 정확해도 운동량과 위치를 동시에 정확히 알 수 없습니다.
            오히려 하나의 값을 고정하면 다른 값은 더욱 불확실해집니다.</p>
            <div style={{marginLeft: '1%', height: '30vh', marginTop: '2%', alignItems: 'center', display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', gap: '10%'}}>
              <img style={{maxWidth: '20%'}} src={Ball2} />
                <img style={{maxWidth: '15%'}} src={Ball} />
              </div>
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
            <p>슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 <span style={{color: '#B0E3FF'}}>에르빈 슈뢰딩거</span>가 제안한 사고 실험입니다.
            이 실험은 양자역학의 중첩 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다.
            특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다.</p>
            <div style={{textAlign: 'center'}}><MoreButton style={{cursor: 'pointer'}} onClick={e=>navigate('/cat')}> More</MoreButton></div>
          </div>
        )}
      </div>
    </C.ConceptWrapper>
    </C.Wrapper>
  );
};

export default Concept;
