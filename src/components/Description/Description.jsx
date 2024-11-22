// Description.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as D from './DescriptionStyle';


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
              <div style={{textAlign: 'center', marginTop: '3%'}}>
                <D.Button onClick={e=>navigate('/computing')}> 양자 컴퓨팅과 계산 복잡도 이론</D.Button>
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
        <div className="accordion-item">
          <div 
            className={`accordion-title ${activeIndex === 3 ? 'active' : ''}`} 
            onClick={() => toggleAccordion(3)}
          >
            <span>산업별 양자 기술 활용 사례</span>
            <span>{activeIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 3 && (
            <div className="accordion-content">
              <p><span style={{color: '#B0E3FF'}}>1) 의료</span><br />
              신약 개발 : 분자의 복잡한 상호작용을 분석해 신약 개발 시간 단축<br />
              정밀 진단 : 양자 센서를 활용해 암 조기 진단 및 의료 기기 정밀도 향상.
              </p><hr />
              <p><span style={{color: '#B0E3FF'}}>2) 금융</span><br />
              투자 최적화 : 양자 컴퓨팅으로 금융 시장의 복잡한 데이터를 분석. <br />
              거래 보안 강화 : 양자 암호화로 실시간 거래 보호.
              </p>
              <hr/>
              <p><span style={{color: '#B0E3FF'}}>3) 기후 및 에너지</span><br />
              지속 가능한 에너지 솔루션 : 태양광 및 풍력 발전의 효율성 최적화. <br />
              기후 모델링 : 기후 변화에 대한 정확한 데이터 기반 시뮬레이션.
              </p>
              <hr/>
              <p><span style={{color: '#B0E3FF'}}>4) 물류 및 교통</span><br />
              최적 경로 계산 : 항공, 선박, 트럭등의 물류 네트워크 최적화를 통한 물류 시스템의 효율성 극대화. <br />
              </p>
              <hr/>  
              <p><span style={{color: '#B0E3FF'}}>5) 항공우주</span><br />
              양자 GPS : 전통적인 GPS보다 수십 배 더 정밀한 위치 추적 가능. <br />
              우주 탐사 : 양자 기반의 초정밀 기기와 통신으로 우주선 운행 효율 향상.
              </p>
              <hr/> 
              <div style={{textAlign: 'center'}}>
                <D.Button href="/example" rel="산업활용사례 더보기">
                  산업활용사례 더보기
                </D.Button> 
              </div>         
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div 
            className={`accordion-title ${activeIndex === 4 ? 'active' : ''}`} 
            onClick={() => toggleAccordion(4)}
          >
            <span>미래를 이끌 양자 기술 활용 트랜드</span>
            <span>{activeIndex === 4 ? '▲' : '▼'}</span>
          </div>
          {activeIndex === 4 && (
            <div className="accordion-content">
              <p><span style={{color: '#B0E3FF'}}>1) 양자 인터넷</span><br />
              양자 기술 기반의 초보안 네트워크 : 전 세계 데이터를 안전하게 연결하는 차세대 인터넷 개발
              </p><hr />
              <p><span style={{color: '#B0E3FF'}}>2) 스마트 시티</span><br />
              IoT와 양자의 융합 : 양자 암호화로 스마트 시티의 보안 강화 및 자율주행차와 교통 관리 시스템 최적화
              </p>
              <hr/>
              <p><span style={{color: '#B0E3FF'}}>3) 연구 및 개발</span><br />
              양자 컴퓨팅 교육 확대 : 기업과 학계에서 양자 기술 전문인력 양성. <br />
              양자 클라우드 서비스 : IBM과 Google의 양자 컴퓨팅 클라우드 서비스.
              </p>
              <hr/>          
            </div>
          )}
        </div>
      </D.ConceptWrapper>
      </D.Wrapper>
    );
};
  

export default Description;
