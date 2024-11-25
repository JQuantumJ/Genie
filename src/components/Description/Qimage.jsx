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
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }

  p {
      margin-top: 5px;
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


const Qimage = () => {
    return (
        <D.Wrapper2>
        <D.ImageWrap>
            <a href="/example"><img src={Back} /></a>
        </D.ImageWrap>
        <D.ComputeWrapper>
        <h1>양자 이미징</h1>
        <hr />
        <h2 style={{fontWeight:'400', marginBottom:'2%'}}><span>양자 이미징 기술(Quantum Imaging)</span>이란 양자 역학의 원리를 활용하여 기존 이미징 기술의 한계를 뛰어넘는 방식으로 이미지를 획득하는 기술입니다.<br/>양자 이미징은 특히 <span>얽힘(entanglement), 단일광자(single-photon), 양자 간섭(quantum interference)</span>과 같은 양자 현상을 이용합니다.</h2>
       
        <h3>1) 양자 이미징 기술의 특징 </h3>
        <Box>
            <p>고감도 : 단일광자 수준의 민감도로 이미지를 생성할 수 있어, 매우 약한 빛에서도 고품질의 이미지를 획득할 수 있습니다. <br/> 고해상도 : 양자광원의 특성을 활용해 기존 광학계에서의 회절 한계(Diffraction Limit)를 뛰어넘는 이미징이 가능하며, 더 정밀한 세부 정보를 담을 수 있습니다. 
            <br/>낮은 광량 요구 : 얽힘 상태의 광자를 활용해, 낮은 광량으로도 고품질 이미지를 생성할 수 있어 생체 조직이나 민감한 물질의 손상을 줄이는 데 유리합니다. <br/>비파괴 측정 : 양자 이미징 기술은 물체와 직접 상호작용하지 않고도 이미지를 얻을 수 있어, 섬세한 물체를 손상시키지 않고 관찰할 수 있습니다.</p>
        </Box>
        <h3>2) 대표적인 양자 이미징 기술</h3>
        <Box>
            <p><span style={{color: '#0489B1'}}>고스트 이미징(Ghost Imaging)</span>
            <br/>얽힘 광자를 이용하여 대상 물체와 직접 상호작용하지 않고 이미지를 얻는 기술입니다. 하나의 광자는 물체를 관통하지 않고도, 얽힘 상태에 있는 다른 광자의 정보를 통해 이미지를 생성합니다.</p>
            <p><span style={{color: '#0489B1'}}>양자 라이다(Quantum LiDAR)</span>
            <br/>빛의 반사 시간을 이용해 거리와 이미지를 측정하는 기술로, 양자 기술을 적용하여 더 정밀한 측정이 가능합니다.</p>
            <p><span style={{color: '#0489B1'}}>양자 광학 현미경(Quantum Optical Microscopy)</span>
            <br/>얽힘 광자와 단일광자를 이용해 기존 현미경보다 더 높은 해상도로 이미지를 획득합니다.</p>
        </Box>
        <h3>3) 현재 연구 진척도</h3>
        <Box>
            <p> - 얽힘 광자와 단일광자를 활용한 기초 연구가 활발히 진행 중입니다."고스트 이미징" 등 원리를 기반으로 한 실험에서 상당한 성공을 거두었으며, 양자 광원 및 센서 기술이 발전하고 있습니다.</p>
            <p> - MIT, NASA 등 주요 연구 기관은 양자 이미징 기술의 성능을 증명하는 시범 연구를 수행하고 있습니다.광학 정밀도를 높이기 위해 양자 센서와의 결합이 연구되고 있습니다.</p>
            <p> - 양자 이미징 기술을 국방, 의료 분야에서 시범적으로 도입. 일부 고급 의료 장비와 산업 검사 장비에 제한적으로 적용되고 있습니다.</p>
        </Box>
        </D.ComputeWrapper>
        </D.Wrapper2>
    );
};

export default Qimage;
