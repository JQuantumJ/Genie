import React from 'react';
import styled from 'styled-components';
import person1 from '/src/assets/image/Concept/person1.svg';
import person2 from '/src/assets/image/Concept/person2.svg';
import person3 from '/src/assets/image/Concept/person3.svg';
import person4 from '/src/assets/image/Concept/person4.svg';
import person5 from '/src/assets/image/Concept/person5.svg';
const timelineData = [
  {
    year: 1900,
    event: '막스 플랑크, 양자역학의 기초 확립',
    details: `
      막스 플랑크는 에너지의 불연속성을 제안하며 양자 이론의 기초를 마련했습니다. 
      이 발견은 고전 물리학으로 설명할 수 없었던 현상을 해결하는 데 중요한 역할을 했습니다. 
      특히 흑체 복사 문제를 설명하기 위해 에너지가 일정한 양자 단위로 방출되고 흡수된다는 이론을 도입했습니다.
    `,
    image: person1,
  },
  {
    year: 1925,
    event: '하이젠베르크, 양자역학 수학적 공식화',
    details: `
      하이젠베르크는 행렬 역학을 도입하여 양자역학의 수학적 기반을 확립했습니다. 
      이 공식화는 이후 슈뢰딩거의 파동역학과 통합되어 현대 양자역학의 토대를 이뤘습니다. 
      또한, 불확정성 원리를 제안하며 입자 위치와 운동량의 정확한 측정이 동시에 불가능함을 설명했습니다.
    `,
    image: person2,
  },
  {
    year: 1981,
    event: '리처드 파인만, 양자 컴퓨팅 개념 제안',
    details: `
      리처드 파인만은 양자 시스템을 시뮬레이션하기 위해 기존의 고전 컴퓨터로는 한계가 있음을 지적했습니다. 
      그는 양자 물리학의 법칙에 따라 동작하는 컴퓨터, 즉 양자 컴퓨터의 필요성을 제안하며, 
      양자 알고리즘 개발의 새로운 장을 열었습니다.
    `,
    image: person3,
  },
  {
    year: 1994,
    event: '피터 쇼어, 쇼어 알고리즘 발표',
    details: `
      피터 쇼어는 양자 컴퓨터가 고전 컴퓨터보다 효율적으로 소인수분해를 수행할 수 있음을 보여주는 쇼어 알고리즘을 개발했습니다. 
      이 알고리즘은 현대 암호 체계를 위협하며 양자 암호학과 양자 내성 암호학의 연구를 촉진하는 계기가 되었습니다.
    `,
    image: person4,
  },
  {
    year: 2019,
    event: '구글, 양자 우월성 선언',
    details: `
      구글은 양자 컴퓨터로 고전 컴퓨터가 수만 년이 걸릴 문제를 200초 만에 해결했다고 발표하며 양자 우월성을 선언했습니다. 
      이 사건은 양자 컴퓨팅이 실제로 강력한 계산 능력을 가질 수 있음을 보여주는 중요한 이정표로 평가됩니다.
    `,
    image: person5,
  },
];

const concepts = [
  {
    title: '양자 우월성',
    description: `
      양자 우월성은 양자 컴퓨터가 고전 컴퓨터로는 현실적인 시간 내에 풀 수 없는 문제를 해결할 수 있는 능력을 나타냅니다.
      2019년 구글이 이를 선언하며 양자 컴퓨팅의 실질적 가능성을 입증했습니다.
    `,
  },
  {
    title: '양자 컴퓨팅',
    description: `
      양자 컴퓨팅은 양자역학의 원리를 기반으로 동작하는 컴퓨터 기술입니다.
      고전 컴퓨터가 이진법으로 계산하는 것과 달리, 양자 컴퓨터는 큐비트를 활용하여 병렬 연산을 수행할 수 있습니다.
    `,
  },
  {
    title: '쇼어 알고리즘',
    description: `
      쇼어 알고리즘은 양자 컴퓨터를 이용해 고전 컴퓨터보다 빠르게 소인수분해를 수행할 수 있는 알고리즘입니다.
      이 알고리즘은 현대 암호 체계를 위협하며 양자 암호학 연구를 촉진했습니다.
    `,
  },
  {
    title: '양자역학',
    description: `
      양자역학은 미시 세계의 입자와 파동의 행동을 설명하는 물리학의 한 분야입니다.
      에너지의 불연속성, 입자-파동 이중성, 불확정성 원리 등이 핵심 개념에 포함됩니다.
    `,
  },
];

const ConceptsSection = styled.div`
  margin: 50px 0;
  padding: 40px;
  cursor: text;
  user-select: text;
  background-color: #292f36;
  border-radius: 6px;
  color: #fff;
@media (max-width: 780px) {
  padding: 20px 12px;
  background-color: transparent;
  border-radius: 0px;
  border-top: 1px solid #aaa; 
  border-bottom: 1px solid #aaa;
}
`;

const ConceptTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #60e6f2;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 1.7rem;
  }
`;

const ConceptItem = styled.div`
  margin-bottom: 30px;
  user-select: text;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ConceptName = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #fff;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 1.45rem;
  }
`;

const ConceptDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ccc;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #1c2329;
  color: #ffffff;
  min-height: 140vh;
  height: auto;
  margin-bottom: -30vh;
`;

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  padding-top: 7%;
  max-width: 70%;
  margin-left: 15%;
  padding-bottom: 33vh;
  @media(max-width: 780px){
    max-width: 100%;
    margin-left: 0;
    padding-top: 20%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #60e6f2;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 2rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  cursor: text;
  user-select: text;
  position: relative;
  margin: 20px 0;
  padding: 0 20px;

  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #333;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding-left: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Year = styled.h2`
  font-size: 1.65rem;
  font-weight: bold;
  color: #60e6f2;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`;

const Event = styled.h3`
  font-size: 1.55rem;
  color: #ddd;
  margin-bottom: 10px;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`;

const Details = styled.p`
  font-size: 1.4rem;
  color: #ccc;
  letter-spacing: 1px;
  line-height: 1.6;
  margin-bottom: 20px;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 1.27rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Circle = styled.div`
  position: absolute;
  left: 10px;
  top: 0;
  width: 20px;
  height: 20px;
  background: #4caf50;
  border-radius: 50%;
  border: 4px solid #1c2329;
  box-shadow: 0 0 0 2px #60e6f2;
`;

const QuantumTimeline = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <Title>Quantum Technology Timeline</Title>
        <Timeline>
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <Circle />
              <Year>{item.year}</Year>
              <Event>{item.event}</Event>
              <Image src={item.image} alt={`${item.year} event`} />
              <Details>{item.details}</Details>
            </TimelineItem>
          ))}
        </Timeline>
        <ConceptsSection>
          <ConceptTitle>양자 개념 정리</ConceptTitle>
          {concepts.map((concept, index) => (
            <ConceptItem key={index}>
              <ConceptName>{concept.title}</ConceptName>
              <ConceptDescription>{concept.description}</ConceptDescription>
            </ConceptItem>
          ))}
        </ConceptsSection>
      </PageWrapper>
    </Wrapper>
  );
};

export default QuantumTimeline;
