import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Quantum from '/src/assets/image/Concept/quantum.svg';
import Quantum2 from '/src/assets/image/Concept/quantum2.svg';
import * as C from './ConceptStyle';
import { FaTimes } from 'react-icons/fa'; 
import styled, { keyframes } from 'styled-components';

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
const Box = styled.div`
  border: 2px solid #333;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.8;
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  p {
      font-size: 1.5rem;
  }
  @media(max-width: 900px){
    h2{
      font-size: 1.2rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 1rem;
      margin: 10px 0;
    }
  }
`;

const Numbering = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;



const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10003;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 5%;
  border-radius: 10px;
  width: 60%;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  max-height: 80vh;
  z-index: 10003;
  line-height: 1.8;
  h2{
    font-size: 1.5rem;
    margin-bottom:2%;
  }
  p {
    font-size: 1.2rem;
    margin: 10px 0;
    font-family: arial;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  @media(max-width: 900px){
    width: 90%;
    max-width: 90%;
    p {
      font-size: 1rem;
    }
  }
`;


const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 30px;
  right: 33px;
  cursor: pointer;
  font-size: 2.5rem;
  color: #000000;

  &:hover {
    color: #e00000;
  }
  @media(max-width: 900px){
    top: 15px;
    right: 15px;
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
    // 모달 열기 함수
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // 모달 닫기 함수
    const closeModal = () => {
      setIsModalOpen(false);
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
              쉽게 말해, 우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자라고 부릅니다.
              처음으로 양자는 빛에서 발견되었으며, 
              이 작은 에너지가 어떻게 움직이는지 연구하는 것이 바로 양자 물리학, 양자 역학의 시작입니다.</p>
              <div style={{textAlign: 'center', height: '50vh'}}>
                <RotatingImage style={{maxWidth: '33%'}} src={Quantum2} />
              </div>
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
            <p>하이젠베르크는 방정식들을 연구하는 동안 어떤 특성은 정확하게 측정하는 것이 불가능하다는 사실을 깨달았는데, 그 이유는 사용하는 실험 장치가 측정하는 원자에 영향을 미치기 때문이었습니다.
            입자의 위치와 운동량은 동시에 추론할 수 없으며, 주어진 순간의 에너지도 알 수 없었습니다.
            하이젠베르크라는 물리학자는 실험을 통해, 우리가 아무리 정밀한 장비를 사용하더라도 입자의 위치를 알면 그 입자의 속도를 정확히 알 수 없고, 반대로 속도를 알면 위치를 정확히 알 수 없다는 것을 발견했습니다.
            이는 마치 <span style={{color: '#B0E3FF'}}>우리가 축구공을 발로 찬 후에 그 공의 정확한 위치와 속도를 동시에 파악하기 어려운 것</span>과 비슷합니다.
            특히, 측정 차원의 오류가 아니라, 사용하는 장비가 아무리 정확해도 운동량과 위치를 동시에 정확히 알 수 없습니다.
            오히려 하나의 값을 고정하면 다른 값은 더욱 불확실해집니다.</p>
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
            <p>슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 에르빈 슈뢰딩거가 제안한 사고 실험입니다.
            이 실험은 양자역학의 중첩(superposition) 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다.
            특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다.</p>
            <a style={{cursor: 'pointer'}} onClick={e=>navigate('/cat')}>detail ➡️</a>
          </div>
        )}
      </div>
    </C.ConceptWrapper>
    </C.Wrapper>
  );
};

export default Concept;
