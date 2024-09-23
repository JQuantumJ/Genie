import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Catimg from '/src/assets/image/Concept/cat.svg';
import Cat2img from '/src/assets/image/Concept/cat2.svg';
import bunker from '/src/assets/image/Concept/bunker.svg';
import bottle1 from '/src/assets/image/Concept/bottle1.svg';
import bottle2 from '/src/assets/image/Concept/bottle2.svg';
import * as C from './ConceptStyle';
import { FaTimes } from 'react-icons/fa'; 
import styled from 'styled-components';
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
              복사 에너지에서 처음 발견하여 '에너지 양자'라고 불렀으며
              그것이 빛으로서 공간을 진행할 경우 '광양자'라고 합니다.</p>
              <p>양자는 더 이상 나눌 수 없는 에너지의 최소 단위입니다. 
                쉽게 말해, 우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자라고 부릅니다.</p>
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
            <p>슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 에르빈 슈뢰딩거가 제안한 사고 실험입니다.
            이 실험은 양자역학의 중첩(superposition) 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다.
            특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다.</p>
            <a style={{cursor: 'pointer'}} onClick={openModal}>detail ➡️</a>
          </div>
        )}
      </div>
    </C.ConceptWrapper>
    {isModalOpen && (
          <C.Modal>
            <C.ModalContent>
            <FaTimes
                onClick={closeModal} 
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '3rem',
                  cursor: 'pointer',
                }}
              />
      <C.Wrapper2>
        <C.CatWrapper>
          <h1>슈뢰딩거의 고양이</h1>
          <Box>
            <Numbering><img src={bunker} alt="bunker" style={{maxWidth: '90%'}}/> </Numbering>
            <Numbering><img src={bottle1} alt="bottle1" /> <img src={Catimg} alt="cat" /></Numbering>
            <p>고양이 한 마리와 독이 든 병을 벙커 안에 넣고 벙커를 닫습니다.</p>
          </Box>
          <Box>
            <Numbering><img src={bottle1} alt="bottle1" /> <img src={bottle2} alt="bottle2" /></Numbering>
            <p>독이 든 병은 50%의 확률로 깨질 수도, 깨지지 않을 수도 있습니다.</p>
          </Box>

          <Box>
            <Numbering><img src={Catimg} alt="cat" /> <img src={Cat2img} alt="cat2" /></Numbering>
            <p>이에 따라 고양이도 죽을 수도 있고 살아 있을 수도 있습니다.</p>
            <p>이러한 상태를 <span style={{color: '#0000ff'}}>양자 중첩 상태</span>라고 합니다.</p>
          </Box>
          <Box>
            <p style={{padding: '0 2%', marginBottom: '1%'}}>슈뢰딩거의 고양이는 1935년 에르빈 슈뢰딩거가 양자역학의 이상한 특성을 설명하기 위해 제안한 사고 실험입니다.
            <br/><span>이 실험은 고양이를 상자에 넣고, 고양이의 생사 여부가 양자적 현상인 중첩에 의해 결정된다는 개념</span>을 보여줍니다.</p>
            <div style={{textAlign: 'center', display: 'flex', marginTop: '1%'}}>
          <C.Button style={{backgroundColor: '#007bff'}} onClick={toggleModal}>
            {showModal ? '모달 닫기' : '추가 설명 보기'}
          </C.Button>
          </div>
          </Box>
        


          {showModal && (
            <ModalOverlay>
              <ModalContent>
                {/* 우측 상단에 X 아이콘으로 모달 닫기 */}
                <CloseIcon onClick={toggleModal} />
                <h2>추가 설명</h2>
                <hr style={{marginBottom: '3%'}}/>
                <p>이 사고 실험은 양자역학의 중요한 해석 중 하나인 <span style={{fontWeight: 'bold'}}>코펜하겐 해석</span>을 설명하기 위한 것이었습니다.</p>
                <p>양자적 입자들은 측정되기 전까지 여러 상태가 동시에 존재하는데, 이 중첩 상태가 외부 관찰에 의해 무너지면서 하나의 확정된 상태가 된다는 것입니다.</p>
                <p><span>고양이 역시 상자를 열어 관찰하기 전까지는 살아있으면서 동시에 죽어있는 상태로 존재합니다.</span></p>
                <p>이 실험은 양자역학의 관측 문제와 파동 함수의 붕괴라는 개념을 설명하는 데 중요한 역할을 합니다.</p>
                <p>슈뢰딩거는 이 실험을 통해 양자역학의 코펜하겐 해석이 현실에 적용될 때 얼마나 비현실적일 수 있는지를 비판했습니다.
                  실제로 고양이가 <span style={{fontWeight: 'bold'}}>"살아 있으면서 죽어있다"</span>는 개념은 우리의 일상적인 직관과는 맞지 않기 때문에,
                  이 실험은 양자역학의 해석에 대한 논쟁을 불러일으켰습니다.</p>
              </ModalContent>
            </ModalOverlay>
          )}
        </C.CatWrapper>
      </C.Wrapper2>  
            </C.ModalContent>
            </C.Modal>
            )}
    </C.Wrapper>
  );
};

export default Concept;
