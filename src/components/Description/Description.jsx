// Description.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as D from './DescriptionStyle';
import styled from 'styled-components';

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

const Description = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    const navigate = useNavigate();
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
              <p>기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 <span style={{color: '#B0E3FF'}}>큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다.</span></p>
              <br></br> <p>이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데,
              이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다.</p>
              <div style={{textAlign: 'center'}}>
                <MoreButton style={{cursor: 'pointer'}} onClick={e=>navigate('/computing')}> More</MoreButton>
              </div>
              <hr/>
              {/* YouTube video for 양자 컴퓨터 */}
              <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/gjp9301in0U" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
              ></iframe>            
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
              <p>양자암호통신 기술은 통신상의 보안을 자연의 기본원리인 양자역학의 법칙에 의해서 보장하므로 
                도청이나 감청이 절대적으로 불가능한 차세대 통신보안 기술로서 최근 크게 주목받고 있다.</p><br />
              <p>즉, 양자암호통신 기술은 <span style={{color: '#B0E3FF'}}>“양자 복제불가능성”</span>과 같은 양자물리학의 법칙에 기초해서 송신자와 수신자 사이에 암호 키(일회용 난수표)를
              절대적으로 안전하게 실시간으로 분배하는 기술로서 <span style={{color: '#B0E3FF'}}>“양자 키 분배 기술”</span>로도 알려져 있다.</p>
              <br />
              <hr/>
              <h1>양자 암호화의 유형</h1>
              <h2><span style={{ boxShadow: 'inset 0 -20px 0 rgba(90, 158, 207, 0.5)' }}>양자 키 분배(QKD)</span></h2>
              <p>양자 키 분배(Quantum Key Distribution; QKD) 시스템은 보안 데이터를  <span style={{color: '#B0E3FF'}}>직접 암호화하는 것이 아니라, 두 사람이 함께 사용할 비밀 키를 안전하게 공유하는 방법이다.</span></p>
              <p>미세한 자극에도 상태가 변하는 양자의 물리적 특성을 활용해 대칭 암호키를 분배하는 기술이다. 제3자가 해킹할 수 없는 암호화된 비밀키를 만들어 보안이 필요한 송신자와 수신자에게 안전하게 공유한다.</p>
             
              <br></br><h2><span style={{ boxShadow: 'inset 0 -20px 0 rgba(90, 158, 207, 0.5)' }}>양자내성암호(PQC)</span></h2>
              <p>양자내성암호(Post Quantum Cryptography; PQC)는 양자컴퓨터로도 풀어내는 데 수십억 년이 걸리는 <span style={{color: '#B0E3FF'}}>복잡한 수학 알고리즘을 사용하는 암호화 방식이다.</span></p>
              <br />
              <hr/>
              {/* YouTube video for 양자 암호통신 */}
              <iframe
                  width="560" 
                  height="315"  
                  src="https://www.youtube.com/embed/fF1cJ5F7ArI?si=9nIUWin5E9jQ6qRT" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
              ></iframe>            
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
              <p>양자 센서의 기본 원리는  <span style={{color: '#B0E3FF'}}>센서와 탐지 대상 물체 사이의 상호작용을 통해 발생하는 미세한 양자 위상변화(Quantum Phase Accumulation)를 측정하는 것이다.</span>
              이때 중첩, 이중성, 얽힘과 같은 미시 세계의 양자역학적 특성들이 측정 기술로 활용된다.</p><br></br> 
              <p>양자 센싱은 측정 대상과 센서의 종류에 따라 다양하게 분류되며, 일반적으로 큐비트와 같은 양자 시스템을 사용해 시간, 자기장 등의 물리량을 정밀하게 측정한다.</p>
              <hr/>
            {/* YouTube video for 양자 센서 */}
            <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/jS6fiujLTzo?si=JBji-IeWWDn1tFDX"
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
               ></iframe>            
            </div>
          )}
        </div>
      </D.ConceptWrapper>
      </D.Wrapper>
    );
};
  

export default Description;
