import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as D from './DescriptionStyle'; 
import styled from 'styled-components';

const ResponsiveDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 3%;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;

    & > div {
      max-width: 100%;
    }

    & img {
      max-width: 80%;
    }
  }
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
      font-size: 1.7rem;
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

const Numbering = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  gap: 2%;
  @media(max-width: 900px){
    gap: 1%;
  }
`;


const Computing = () => {
    const navigate = useNavigate();
  return (
    <D.Wrapper2>
     <D.ImageWrap>
        <a href="/description"><img src={Back} alt="Back to main" /></a>
      </D.ImageWrap>
     <D.ComputeWrapper>
      <h1>양자 컴퓨팅과 계산 복잡도 이론</h1>
      <hr />
      <Box>
        <Numbering><img src={bunker} alt="bunker" style={{maxWidth: '80%'}}/> </Numbering>
        <Numbering><img src={bottle1} alt="bottle1" /> <CatImage src={Catimg} alt="cat" /></Numbering>
        <p>고양이 한 마리와 독이 든 병을 벙커 안에 넣고 벙커를 닫습니다.</p>
      </Box>
      <Box>
        <Numbering><img src={bottle1} alt="bottle1" /> <img src={bottle2} alt="bottle2" /></Numbering>
        <p>독이 든 병은 50%의 확률로 깨질 수도, 깨지지 않을 수도 있습니다.</p>
      </Box>
      <Box>
        <Numbering><CatImage src={Catimg} alt="cat" /> <Cat2Image src={Cat2img} alt="cat2"/></Numbering>
        <p style={{marginBottom: '1%'}}>이에 따라 고양이도 죽을 수도 있고 살아 있을 수도 있습니다.</p>
        <p style={{padding: '0 2%', marginTop: '0px'}}>이러한 상태를 <span style={{color: '#0000ff'}}>양자 중첩 상태</span>라고 합니다.</p>
      </Box>
      <Box>
        <p style={{padding: '0 2%', marginBottom: '1%'}}>슈뢰딩거의 고양이는 1935년 에르빈 슈뢰딩거가
          양자역학의 이상한 특성을 설명하기 위해 제안한 사고 실험입니다.</p>
        <p style={{padding: '0 2%', marginTop: '0px'}}><span>이 실험은 고양이를 상자에 넣고, 고양이의 생사 여부가 양자적 현상인 중첩에 의해 결정된다는 개념</span>을 보여줍니다.</p>
        <div style={{textAlign: 'center', display: 'flex', marginTop: '1%'}}>
        </div>
      </Box>
    </D.ComputeWrapper>
    </D.Wrapper2>
  );
};

export default Computing;
