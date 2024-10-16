import React from 'react';
import * as D from './DescriptionStyle'; 
import Back from '/src/assets/icon/back.svg';
import styled from 'styled-components';
const Box = styled.div`
  border: 2px solid #333;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;
  margin-bottom:50px;

  p {
      font-size: 1.7rem;
      margin-bottom:20px;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  @media(max-width: 900px){
    h2{
      font-size: 1.4rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 1.4rem;
      margin: 10px 0;
    }
  }
`;


const Computing = () => {
    return (
        <D.Wrapper2>
        <D.ImageWrap>
            <a href="/description"><img src={Back} alt="Back to main" /></a>
        </D.ImageWrap>
        <D.ComputeWrapper>
        <h1>양자 컴퓨팅과 계산 복잡도 이론</h1>
        <hr />
        <h2>(1)BPQ(Bounded-Error Quantum Polynomial Time)</h2>
        <Box>
            <p><span>양자 컴퓨터가 효율적으로 풀 수 있는 문제군을 <span style={{color: '#0489B1'}}>BQP</span>라 한다.</span><br></br> 여기서 효율적이란, '정해진 오차범위 내에서 다항 시간 안에' 푼다는 뜻이다. 양자 컴퓨터는 확률적 알고리즘을 실행할 뿐이므로 양자 컴퓨터에 대한 BQP는 기존 컴퓨터에 대한 BPP에 대응한다. <span>BPP는 오차 확률을 1/4로 제한하며 다항 시간에 풀 수 있는 문제의 집합으로 정의된다.</span> 양자 컴퓨터가 문제를 "푼다"는 것은 모든 예제에 대해 높은 확률로 올바른 결과가 나온다는 뜻이다. 그 결과가 다항 시간에 나왔다면 그 문제는 BQP에 속한다.
            <br></br>이는 고전적 컴퓨터의 P(Polynomial Time) 클래스와 NP(Nondeterministic Polynomial Time) 클래스에 대응됩니다.</p>
            <p>BQP에 속하는 대표적인 문제로는 <span>Shor의 소인수분해 알고리즘</span>과 <span>Grover의 검색 알고리즘</span>이 있습니다. <br />Shor의 알고리즘은 고전적인 알고리즘보다 훨씬 효율적으로 큰 수를 소인수분해할 수 있으며, <br />Grover의 알고리즘은 비정렬 데이터베이스에서 특정 항목을 검색하는 데 있어 고전적인 알고리즘의 제곱근 시간만큼 소요됩니다.</p>
        </Box>
        <h2>(2)QMA(Quantum Merlin-Arthur)</h2>
        <Box>
            <p><span>QMA는 <span style={{color: '#0489B1'}}>양자 컴퓨터의 비판자 증명 시스템</span>에 해당합니다.</span> QMA 클래스는 고전적인 복잡도 이론의 NP 클래스와 유사하지만, 차이점은  <span style={{color: '#0489B1'}}>증명(proof)이 양자 상태로 제공</span>된다는 것입니다. 구체적으로, QMA는 검증자가 다항 시간 내에 주어진 양자 증명을 확인할 수 있는 문제들을 포함합니다.
            <br></br>이는 고전적 컴퓨터의 P(Polynomial Time) 클래스와 NP(Nondeterministic Polynomial Time) 클래스에 대응됩니다.</p>
            <p>QMA 클래스에 속하는 문제들은 일반적으로 <span>QMA-완전(Quantum Merlin-Arthur-comlete)</span>문제로 분류됩니다. 이는 이러한 문제들이 QMA 내의 모든 문제를 다항식 시간 내에 변환할 수 있을 만큼 복잡하다는 것을 의미합니다. 다표적인 예로는 <span>양자 회로의 3-SAT 문제</span>등 이 있습니다. QMA 클래스의 문제들은 고전적인 컴퓨터로는 해결하기 어려운 문제들이 많으며, 이는 양자 컴퓨팅이 해결할 수 있는 문제의 범위를 확장하는 데 핵심 역할을 합니다.</p>
        </Box>
        </D.ComputeWrapper>
        </D.Wrapper2>
    );
};

export default Computing;
