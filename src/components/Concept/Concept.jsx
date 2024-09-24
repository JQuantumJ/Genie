import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Ball from '/src/assets/image/Concept/ball.svg';
import Ball2 from '/src/assets/image/Concept/ball2.svg';
import Catimg from '/src/assets/image/Concept/cat.svg';
import Cat2img from '/src/assets/image/Concept/cat2.svg';
import Quantum2 from '/src/assets/image/Concept/quantum2.svg';
import * as C from './ConceptStyle';
import styled, { keyframes } from 'styled-components';
const Numbering = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  gap: 2%;
`;
const BallBox = styled.div`
  margin-left: 1%;
  height: 30vh;
  margin-top: 2%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10%;
  height: 50vh;
  @media (max-width: 700px) {
    height: 25vh; 
  }
  img:nth-child(1) {
    max-width: 20%;
    @media (max-width: 700px) {
      max-width: 30%;
    }
  }

  img:nth-child(2) {
    max-width: 15%;
    @media (max-width: 700px) {
      max-width: 25%;
    }
  }
`;

const CenteredDiv = styled.div`
  text-align: center;
  height: 48vh;
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
                <RotatingImage style={{maxWidth: '30%'}} src={Quantum2} />
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
            <p>
            하이젠베르크라는 물리학자는 실험을 통해, 우리가 아무리 정밀한 장비를 사용하더라도 입자의 위치를 알면 그 입자의 속도를 정확히 알 수 없고, 반대로 속도를 알면 위치를 정확히 알 수 없다는 것을 발견했습니다.
            이는 마치 <span style={{color: '#B0E3FF'}}>우리가 축구공을 발로 찬 후에 그 공의 정확한 위치와 속도를 동시에 파악하기 어려운 것</span>과 비슷합니다.
            특히, 측정 차원의 오류가 아니라, 사용하는 장비가 아무리 정확해도 운동량과 위치를 동시에 정확히 알 수 없습니다.
            오히려 하나의 값을 고정하면 다른 값은 더욱 불확실해집니다.</p>
            <BallBox>
              <img src={Ball2} />
                <img src={Ball} />
              </BallBox>
          </div>
        )}
      </div>
              {/* 파동-입자 이중성 */}
              <div className="accordion-item">
          <div className={`accordion-title ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
            <span>파동-입자 이중성</span>
            <span>{activeIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 3 && (
            <div className="accordion-content">
              <p>
                양자역학의 중요한 개념 중 하나는 <span style={{ color: '#B0E3FF' }}>파동-입자 이중성</span>입니다. 이는 빛과 물질이 파동과 입자 두 가지 성질을 동시에 가진다는 것입니다.
                예를 들어, 전자는 파동처럼 간섭 패턴을 만들 수 있지만, 입자처럼 공간에서 특정 위치에 있을 수 있습니다.
              </p>
              파동-입자 이중성은 물질과 빛이 파동과 입자의 성질을 동시에 가진다는 개념입니다.
              <p>빛과 그림자</p>
              빛을 생각해보세요. 빛은 우리가 매일 접하는 것인데, 고전적인 관점에서 보면 빛은 파동처럼 퍼지며, 
              렌즈를 통과해 굴절되고 반사되기도 합니다. 예를 들어, 햇빛이 창문을 통해 들어올 때, 
              그 빛은 창문에서 굴절되고 반사되어 방 안에 퍼집니다. 이때 빛은 파동처럼 행동합니다.
              그러나 빛을 어두운 방에서 레이저 포인터로 쏘면 
              그 레이저 포인터는 특정한 지점에만 빛이 도달하는 것을 볼 수 있습니다. 
              이때 빛은 마치 총알처럼 특정한 점에 도달하는 "입자"처럼 행동합니다.
              이처럼, 빛은 파동처럼 창문에서 굴절되고 퍼질 수 있지만, 특정 조건에서는 입자처럼 특정한 지점에 정확히 도달하는 두 가지 성질을 동시에 가집니다.
            </div>
          )}
        </div>

        {/* 양자 얽힘 */}
        <div className="accordion-item">
          <div className={`accordion-title ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleAccordion(4)}>
            <span>양자 얽힘</span>
            <span>{activeIndex === 4 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 4 && (
            <div className="accordion-content">
              <p>
                양자 얽힘은 <span style={{ color: '#B0E3FF' }}>두 개 이상의 입자가 서로 강하게 연결되어 있는 상태</span>를 말합니다. 
                얽힌 입자들은 멀리 떨어져 있어도 얽혀 있어, 서로의 상태에 영향을 미칠 수 있습니다.
              </p>
              <p>두 개의 얽힌 동전
              두 개의 동전이 특별한 방법으로 얽혀 있다고 상상해봅시다. 
              이 동전들을 각각 상자에 넣고 지구의 반대편으로 떨어뜨립니다. 그 후, 당신이 A 동전의 상자를 열어 동전을 던졌을 때, 
              앞면이 나왔습니다. 신기하게도, 멀리 떨어진 B 동전은 즉각적으로 뒤집혀서 반드시 뒷면이 나오는 현상을 보여줍니다. 
              그들은 어떤 방식으로든 얽혀 있어서, A 동전이 앞면이면 B 동전은 뒷면이 될 것이고, 반대로도 성립됩니다.
              이처럼 양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 
              한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 
              얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.</p>
            </div>
          )}
        </div>
      <div className="accordion-item">
        <div 
          className={`accordion-title ${activeIndex === 5 ? 'active' : ''}`} 
          onClick={() => toggleAccordion(5)}
        >
          <span>양자 중첩(슈뢰딩거의 고양이)</span>
          <span>{activeIndex === 5 ? '▲' : '▼'}</span>
        </div>
        {activeIndex === 5 && (
          <div className="accordion-content">
            <p>슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 <span style={{color: '#B0E3FF'}}>에르빈 슈뢰딩거</span>가 제안한 사고 실험입니다.
            이 실험은 양자역학의 중첩 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다.
            특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다.</p>
            <div style={{textAlign: 'center'}}><MoreButton style={{cursor: 'pointer'}} onClick={e=>navigate('/cat')}> More</MoreButton></div>
          </div>
        )}
      </div>
              {/* 파동 함수 붕괴 */}
              <div className="accordion-item">
          <div className={`accordion-title ${activeIndex === 6 ? 'active' : ''}`} onClick={() => toggleAccordion(6)}>
            <span>파동 함수 붕괴</span>
            <span>{activeIndex === 6 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 6 && (
            <div className="accordion-content">
             <h1 style={{marginBottom: '1%', color: '#eee'}}>중첩 상태가 관측되었을 때, 그 상태가 하나로 확정되는 과정</h1>
              <hr style={{border: 'none', borderTop: '0.5px solid #ddd'}}/>
              <p>
                양자 물체는 여러 상태가 동시에 존재할 수 있는데, 
                이 상태를 기술하는 것이 <span style={{ color: '#B0E3FF' }}>파동 함수</span>입니다. 
                여러 상태가 있더라도 외부에서 관측을 하면 파동 함수가 붕괴하면서 입자는 하나의 확정된 상태로 변화합니다.
                파동 함수 붕괴는 양자 중첩 상태에 있는 입자가 관측되었을 때 하나의 확정된 상태로 변하는 과정입니다. 
                양자 시스템은 여러 상태(중첩 상태)로 존재할 수 있지만, 누군가 그 시스템을 관측하는 순간, 
                그 시스템은 중첩된 여러 상태 중 하나로 결정됩니다. 
                이를 파동 함수가 붕괴했다고 표현합니다.
              </p>
              <Numbering><img src={Catimg} alt="cat" /> <img src={Cat2img} alt="cat2" style={{maxWidth: '200px', marginBottom: '-47px'}}/></Numbering>
              <p>파동 함수 붕괴는 슈뢰딩거의 고양이에서 상자를 열고 난 후에 발생하는 과정으로 이해할 수 있습니다.</p>
            </div>
          )}
        </div>

    </C.ConceptWrapper>
    </C.Wrapper>
  );
};

export default Concept;
