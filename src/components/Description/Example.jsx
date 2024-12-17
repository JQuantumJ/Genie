import React, { useState } from "react";
import * as I from "../Concept/IndustryStyle";
import styled from "styled-components";
import { Link } from "react-router-dom"; 


const TopBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #141a1f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
    @media (max-width: 780px) {
    justify-content: space-between;
    flex-wrap:wrap; /*넘치면 줄바꿈*/
  }
`;


const TopBarItem = styled.button`
  background-color: ${({ $isActive }) => ($isActive ? "#60E6F2" : "transparent")};
  color: ${({ $isActive }) => ($isActive ? "#000" : "#fff")};
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
    @media (max-width: 400px) {
      font-size: 12px; /* 글씨 크기 조정 */
      overflow: hidden; /* 텍스트가 화면 밖으로 넘지 않도록 설정 */
      white-space: normal; /* 줄바꿈 허용 */
      word-wrap: break-word; /* 단어가 화면 너비를 넘을 경우 줄바꿈 */
    }

`;

const MenuToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 20px; 
`;
export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 18px; /* 작은 화면에서 글씨 크기 조정 */
  }
`;

const sections = [
  {
    id: "sum",
    title: "양자 산업 활용",
    subsections: [
      {
        id: "sum1",
        title: "정보통신 분야",
        content:<>양자 암호 기술은 데이터 전송의 보안성을 획기적으로 높입니다. 기존 암호화 방식은 시간이 지남에 따라 해킹 위험이 증가하지만, <br/>양자암호 기술은 도청이나 데이터 변조 시도를 원천적으로 방어할 수 있습니다.</>,
      },
      {
        id: "sum2",
        title: "금융 서비스 분야",
        content: <>은행 간 거래, 온라인 결제 등 금융 거래에서 데이터 보안은 핵심적인 요소입니다.<br/>양자암호는 이를 보다 안전하게 보호할 수 있으며, 해킹 시도를 즉각적으로 감지하여 거래 신뢰성을 높입니다.</>,
      },
      {
        id: "sum3",
        title: "의료 분야",
        content: <>양자암호 기술을 의료 시스템에 도입하면 환자의 진료 기록, 유전자 데이터 등 중요한 정보가 안전하게 보호될 수 있습니다. <br/>특히 양자컴퓨팅 기술을 활용한 신약 개발 및 연구 과정에서도 데이터 보안을 강화할 수 있어, 의료 분야의 혁신을 촉진하는 데 기여할 수 있습니다. </>
      },
      {
        id: "sum4",
        title: "국가 안보와 군사 통신 분야",
        content: <>양자암호 기술은 군사 통신과 정부의 기밀 정보 보호에 있어서 중요한 역할을 합니다. 특히 외부의 해킹이나 스파이 활동을 차단하는 데 매우 효과적입니다. <br/>양자 키 분배(QKD) 방식은 기밀 정보를 안전하게 전달할 수 있는 방법을 제공하며, 도청 시도를 실시간으로 탐지하여 대응할 수 있습니다</>
      },
      {
        id: "sum5",
        title: "사물인터넷 분야",
        content: <>사물인터넷(IoT) 기기가 점점 증가하면서, 기기 간의 통신 보안이 큰 이슈로 떠오르고 있습니다. <br/>양자암호 기술을 IoT 네트워크에 적용하면 기기 간 통신의 무결성을 보장하고, 외부의 해킹 위협을 방지할 수 있습니다.<br/>이를 통해 스마트 홈, 스마트 팩토리와 같은 다양한 분야에서 안전한 IoT 환경이 구축될 수 있습니다.</>
      },
    ],
  },
  {
    id: "it",
    title: "정보통신 분야",
    subsections: [
      {
        id: "qkd",
        title: "양자암호통신",
        content: <>양자암호통신은 양자역학의 원리를 이용하여 도청이 불가능한 통신을 구현합니다. 양자 키 분배(QKD)를 통해 송신자와 수신자 간에 안전한 암호 키를 공유할 수 있습니다.<br/>이 기술은 금융, 국방 등 보안이 중요한 분야에서 활발히 연구되고 있습니다.</>,
        content2:<>한국전자통신연구원(ETRI)은 양자암호통신 기술을 개발하여 상용화에 박차를 가하고 있습니다. <br/>또한, KT는 양자암호통신을 적용한 네트워크를 구축하여 금융기관과 협력하고 있습니다.<br/>
        중국은 세계 최초로 위성 기반의 양자암호통신망을 구축하여 장거리 통신에 성공하였으며, 미국과 유럽은 양자 네트워크 연구에 막대한 투자를 하고 있습니다.</>
      },
      {
        id: "network",
        title: "양자 네트워크",
        content: <>양자 네트워크는 양자 상태를 유지하며 정보를 전달하는 네트워크로, 기존 인터넷보다 높은 보안성을 제공합니다. <br/>양자 중계기와 양자 메모리 등의 기술 개발이 진행 중이며, 장거리 양자 통신을 위한 연구가 활발합니다.</>
      },
      {
        id: "data",
        title: "양자컴퓨팅을 활용한 데이터 처리",
        content: <>양자컴퓨터는 복잡한 계산을 기존 컴퓨터보다 빠르게 처리할 수 있어, 대용량 데이터 분석, 암호 해독 등 정보통신 분야에서의 활용이 기대됩니다. <br/>특히, 최적화 문제나 머신러닝 분야에서의 응용이 주목받고 있습니다.</>
      },
    ],
  },
  {
    id: "eco",
    title: "금융서비스 분야",
    subsections: [
      {
        id: "components",
        title: "양자 암호화 기술 도입",
        content: <>BBVA<br/>스페인의 다국적 금융 그룹인 BBVA는 양자 기술을 금융 서비스에 접목하는 프로젝트에 적극 참여하고 있습니다. 이는 양자 컴퓨터가 금융에서 요구하는 복잡한 연산 등을 효율적으로 해결하는 방안으로 각광받고 있기 때문입니다.</>,
        content2: <>골드만삭스(GOldman Sachs)<br/>글로벌 투자은행인 골드만삭스는 양자 컴퓨팅을 활용하여 금융 모델링과 리스크 관리의 효율성을 높이기 위한 연구를 진행하고 있습니다. 이는 양자 기술을 활용한 금융 서비스의 혁신을 목표로 하고 있습니다.</>
      },

    ],
  },
  {
    id: "med",
    title: "의료",
    subsections: [
      {
        id: "view",
        title: "의료 영상",
        content: <><Link to="/qimage" style={{ textDecoration: 'underline' }}>
        양자 이미징 기술
      </Link>은 포톤의 얽힘 상태를 활용하여 기존보다 선명하고 정확한 의료 영상을 제공합니다.<br/>이를 통해 진단의 정확성을 높이고, 조기 발견이 어려운 질병의 진단에 기여합니다.</>,
      },
      {
        id: "pill",
        title: "약물 개발",
        content: <>양자 컴퓨팅은 복잡한 분자 구조와 상호작용을 모델링하여 새로운 약물 후보 물질을 발견하거나 기존 약물의 효능을 개선하는 데 활용됩니다.<br/>이는 약물 개발 과정을 가속화하고 비용을 절감하는 데 도움이 됩니다. </>,
      },
      {
        id: "bio",
        title: "바이오센서",
        content: "양자 바이오센서는 양자역학적 특성을 이용하여 매우 미세한 농도 변화도 정확하게 감지합니다. 이를 통해 질병의 조기 진단이나 치료 과정의 모니터링에 큰 도움이 됩니다.",
      },
    ],
  },
  {
    id: "gov",
    title: "국가 안보와 군사 통신",
    subsections: [
      {
        id: "components",
        title: "해군 3함대사령부의 양자암호통신망 구축",
        content: <>2021년 1월, KT는 전라남도청과 해군 3함대사령부에 양자암호 비화통신 보안통신망을 구축하였습니다.<br/>이를 통해 군사 통신의 보안성을 강화하고, 도청 및 해킹을 방지하는 데 기여하고 있습니다.</>,
      },
      {
        id: "applications",
        title: "무선 양자암호통신 기술 개발",
        content: <>2023년 10월, KT는 무선 양자암호통신 기술 개발에 속도를 내어 국내 국방 분야를 선점하겠다는 의지를 밝혔습니다.<br/>이를 위해 통신 신호 범위를 현재 2km 수준에서 10km로 5배 늘리고, 외산 의존도가 높은 송·수신기 등의 국산화를 목표로 하고 있습니다.<br/>
        이 기술은 사단 규모의 군부대가 작전을 수행할 때 데이터 손실 없이 소통할 수 있도록 지원합니다.</>
      },
    ],
  },
  {
  id: "iot",
  title: "사물인터넷(IoT)",
  subsections: [
    {
      id: "components",
      title: "양자 암호화 통신을 통한 IoT 보안 강화",
      content: <>양자 암호화 기술은 양자 역학의 원리를 이용하여 도청이 불가능한 통신을 구현합니다. 이를 통해 IoT 기기 간의 데이터 전송 시 보안성을 크게 향상시킬 수 있습니다.<br/>예를 들어, 스마트 홈이나 스마트 시티의 센서 네트워크에서 양자 암호화를 적용하면 외부 공격으로부터 데이터를 안전하게 보호할 수 있습니다</>
    },
    {
      id: "applications",
      title: "양자 센서를 활용한 고정밀 데이터 수집",
      content: <>양자 센서는 기존 센서보다 높은 정밀도와 민감도를 제공합니다. 이를 통해 IoT 시스템에서 환경 변화나 물리적 상태를 더욱 정확하게 감지할 수 있습니다.<br/>예를 들어, 스마트 팜에서는 양자 센서를 활용하여 토양의 미세한 변화나 작물의 상태를 정밀하게 모니터링하여 생산성을 높일 수 있습니다.</>
    },
    {
      id: "applications",
      title: "양자 컴퓨팅을 통한 IoT 데이터 처리 효율 향상",
      content: <>양자 컴퓨팅은 복잡한 연산을 기존 컴퓨터보다 빠르게 처리할 수 있습니다. 이를 통해 IoT 기기에서 수집되는 방대한 데이터를 효율적으로 분석하고 처리할 수 있습니다.<br/>예를 들어, 스마트 시티의 교통 관리 시스템에서 양자 컴퓨팅을 활용하면 실시간 교통 데이터를 빠르게 분석하여 최적의 교통 흐름을 유지할 수 있습니다.</>
    },
    ],
  },
];

const Example = () => {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const currentSection = sections.find((section) => section.id === activeSection);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
        <>
          <I.Container>
            <I.Content>
              <MenuToggle onClick={toggleMenu}></MenuToggle>
      
              {/* TopBar 메뉴 */}
              {isMenuOpen && (
                <TopBarContainer>
                  {sections.map((section) => (
                    <TopBarItem
                      key={section.id}
                      $isActive={activeSection === section.id}
                      onClick={() => setActiveSection(section.id)}
                    >
                      {section.title}
                    </TopBarItem>
                  ))}
                </TopBarContainer>
              )}
      
              {/* Section Title and Content */}
              <I.Title>{currentSection.title}</I.Title>
          
      
              {currentSection.subsections && (
                <I.SubsectionContainer>
                  {currentSection.subsections.map((subsection) => (
                    <div key={subsection.id}>
                      <I.SubsectionTitle>{subsection.title}</I.SubsectionTitle>
                      <I.SubsectionContent>{subsection.content}</I.SubsectionContent>
                      {subsection.content2 && <I.SubsectionContent>{subsection.content2}</I.SubsectionContent>}
                    </div>
                  ))}
                </I.SubsectionContainer>
              )}
            </I.Content>
          </I.Container>
        </>
      );
    }
    
  
  export default Example;
