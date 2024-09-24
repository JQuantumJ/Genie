import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa'; 
import coinHeads from '/src/assets/image/Concept/coinf.svg';  
import coinTails from '/src/assets/image/Concept/coinb.svg';  
import Box1 from '/src/assets/image/Concept/box1.svg';  
import Box2 from '/src/assets/image/Concept/box2.svg';  
import * as C from './ConceptStyle';
import Back from '/src/assets/icon/back.svg';

// 동전이 올라오는 애니메이션
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  max-width: 100%;
  padding: 5%;
  text-align: center;
`;

const CoinBox = styled.div`
  border: 2px solid #333;
  margin: 2% auto;
  padding: 2%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.8;
  span {
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  p {
    font-size: 1.7rem;
  }
`;



const BoxImage = styled.img`
  max-width: 40%;
  cursor: pointer;
`;

const AnimatedCoinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 20px;
  animation: ${slideUp} 0.8s ease-in-out;
  h3{
    font-size: 2rem;
    color: #333;
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
  padding: 3%;
  border-radius: 10px;
  width: 60%;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  max-height: 80vh;
  z-index: 10003;
  line-height: 1.8;
  h2 {
    font-size: 1.7rem;
    margin-bottom: 2%;
  }
  p {
    font-size: 1.5rem;
    margin: 10px 0;
    font-family: arial;
  }
  span {
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  hr {
    margin-bottom: 3%;
    max-width: 100%;
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
`;

const CoinEntanglement = () => {
  const [showCoinModal, setShowCoinModal] = useState(false);  // 동전 상태 모달
  const [coinA, setCoinA] = useState(null); // 동전 A의 상태
  const [coinB, setCoinB] = useState(null); // 동전 B의 상태
  const [boxOpened, setBoxOpened] = useState(false); 


  const checkCoinState = () => {
    const resultA = Math.random() > 0.5 ? '앞면' : '뒷면';
    setCoinA(resultA);
    setCoinB(resultA === '앞면' ? '뒷면' : '앞면');  // 얽힘: A가 앞면이면 B는 뒷면
    setBoxOpened(true); // 박스 열림 상태로 설정
  };

  return (
    <C.Wrapper2>
    <C.ImageWrap>
       <a href="/concept"><img src={Back} alt="Back to main" /></a>
     </C.ImageWrap>
   <C.CatWrapper>
      <h1>양자 얽힘: 두 개의 얽힌 동전</h1>
      <hr />
      <CoinBox>
        <p>두 개의 동전이 특별한 방식으로 얽혀 있습니다.</p>
        <p>한 동전의 상태가 결정되면 다른 동전의 상태도 자동으로 결정됩니다!</p>
        <p>박스를 열어서 동전 A를 확인하세요.</p>
      {boxOpened && (
        <AnimatedCoinContainer>
          <div style={{textAlign: 'center'}}>
            <h3>동전 A</h3>
            <img src={coinA === '앞면' ? coinHeads : coinTails} alt="동전 A" style={{ maxWidth: '50%' }} />
            <p>{coinA}</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <h3>동전 B</h3>
            <img src={coinB === '앞면' ? coinHeads : coinTails} alt="동전 B" style={{ maxWidth: '50%' }} />
            <p>{coinB}</p>
          </div>
        </AnimatedCoinContainer>
      )}
        {/* 닫힌 박스 또는 열린 박스 */}
        <BoxImage 
          src={boxOpened ? Box2 : Box1} 
          alt="박스"
          onClick={checkCoinState}
        />
          <div style={{textAlign: 'center', display: 'flex', marginTop: '1%'}}>
          <C.Button onClick={() => setShowCoinModal(true)}>
            추가 설명 보기
          </C.Button>
        </div>
      </CoinBox>



      {/* 얽힘 상태에 대한 설명 모달 */}
      {showCoinModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseIcon onClick={() => setShowCoinModal(false)} />
            <h2>양자 얽힘 설명</h2>
            <hr />
            <p>
              두 개의 동전이 특별한 방법으로 얽혀 있다고 상상해봅시다.
              이 동전들을 각각 상자에 넣고 지구의 반대편으로 떨어뜨립니다.
              그 후, A 동전의 상자를 열어 동전을 확인했을 때, 앞면이 나왔습니다.
            </p>
            <p>
              이때, 멀리 떨어진 B 동전은 즉각적으로 뒤집혀서 반드시 뒷면이 나옵니다.
              그들은 어떤 방식으로든 얽혀 있어서, A 동전이 앞면이면 B 동전은 뒷면이 될 것이고, 반대로도 성립됩니다.
            </p>
            <p>
              이처럼 양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간
              다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도
              정보가 "순간적으로" 전해지는 것처럼 보입니다.
            </p>
          </ModalContent>
        </ModalOverlay>
      )}
      </C.CatWrapper>
    </C.Wrapper2>
  );
};

export default CoinEntanglement;
