import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 
import Catimg from '/src/assets/image/Concept/cat.svg';
import Cat2img from '/src/assets/image/Concept/cat2.svg';
import bunker from '/src/assets/image/Concept/bunker.svg';
import bottle1 from '/src/assets/image/Concept/bottle1.svg';
import bottle2 from '/src/assets/image/Concept/bottle2.svg';
import * as C from './ConceptStyle';
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
      margin-bottom:2%;
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

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  &:hover {
    background-color: #0056b3;
  }
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

const Cat = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

    return (
      <C.Wrapper>
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
          </Box>
          <div style={{textAlign: 'center'}}>
          <Button onClick={toggleModal}>
            {showModal ? '모달 닫기' : '추가 설명 보기'}
          </Button>
          </div>

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
      </C.Wrapper>
    );
};

export default Cat;
