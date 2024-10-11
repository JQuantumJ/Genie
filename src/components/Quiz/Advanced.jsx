// Quiz.jsx
import React, { useState } from 'react';
import * as Q from './QuizStyle'; 
import { useNavigate } from 'react-router-dom'; 
import Genie1 from '/src/assets/image/Character/sad.svg'; // Genie1 이미지 import
import Genie2 from '/src/assets/image/main/Genie2.svg'; // Genie2 이미지 import

const Advanced = () => {
    const questions = [
      { question: '양자 게이트는 고전적인 논리 게이트와 동일한 방식으로 동작한다', correctAnswer: 'X', explanation: '양자 게이트는 큐비트의 상태를 변화시키는 양자 연산을 수행하며, 고전적인 논리 게이트와는 다른 방식으로 동작합니다.' },
      { question: '양자 컴퓨터는 오류가 발생할 가능성이 고전 컴퓨터보다 높다.', correctAnswer: 'O', explanation: '양자 컴퓨터는 큐비트의 민감한 상태 때문에 오류가 발생할 가능성이 높습니다. 이를 해결하기 위해 오류 정정 기술이 연구되고 있습니다.' },
      { question: '양자 상태의 코히런스(coherence)는 환경과의 상호작용에 의해 손실되며, 이는 양자 디코히런스(decoherence)라고 불린다.', correctAnswer: 'O', explanation: '코히런스는 양자 상태가 다른 상태들과 정렬된 특성을 말합니다.환경과의 상호작용에 의해 이 정렬이 깨지면 디코히런스가 발생하여 양자 상태의 정보를 잃게 됩니다.' },
      { question: '양자 컴퓨터의 성능은 큐비트의 개수에 비례하여 선형적으로 증가한다', correctAnswer: 'X', explanation: '큐비트가 추가될수록 양자 컴퓨터의 성능은 기하급수적으로 증가하며, 선형적으로 증가하는 것이 아닙니다.' },
      { question: '양자 컴퓨터에서 큐비트의 상태를 측정하는 것은 양자 얽힘을 유지한 채로 이루어질 수 있다.', correctAnswer: 'X', explanation: '큐비트의 상태를 측정하면 양자 얽힘 상태가 붕괴됩니다. 얽힌 상태에서는 측정이 이루어지면 더 이상 얽힌 상태를 유지할 수 없습니다. ' },
      { question: '양자 상호작용에서는 양자 터널링 효과를 이용해 에너지 장벽을 넘지 않고도 전자가 이동할 수 있다.', correctAnswer: 'O', explanation: ' 양자 터널링은 고전 물리학적으로 넘을 수 없는 에너지 장벽을 양자역학적으로 입자가 "통과"할 수 있는 현상입니다. 이 현상은 반도체와 같은 분야에서도 중요한 역할을 합니다.' }
    ];
  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [popupExplanation, setPopupExplanation] = useState('');
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    let popupDuration = 1500; 
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setPopupContent('정답입니다!');
      setPopupExplanation('');
    } else {
      setPopupContent('오답입니다!');
      setPopupExplanation(currentQuestion.explanation);
      popupDuration = 3000; 
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizComplete(true);
      }
    }, popupDuration); 
  };

  const navigate = useNavigate();
  return (
    <Q.QuizContainer>
      {quizComplete ? (
        <Q.FinalScoreContainer>
          <h2>퀴즈 완료!</h2>
          <p>총 <span style={{color: '#0015ff'}}>{questions.length}문제</span> 중 <span style={{color: '#0015ff'}}>{score}문제</span> 맞추셨습니다.</p>
          {/* 점수에 따라 이미지를 조건부로 렌더링 */}
          {score < 5 ? (
            <img src={Genie1} alt="Genie1" />
          ) : (
            <img src={Genie2} alt="Genie2" />
          )}
          <Q.Button onClick={() => navigate('/quizmain')}> 처음으로 </Q.Button>
        </Q.FinalScoreContainer>
      ) : (
        <>
          <Q.Question>{questions[currentQuestionIndex].question}</Q.Question>
          <div>
            <Q.AnswerButton onClick={() => handleAnswer('O')}>O</Q.AnswerButton>
            <Q.AnswerButton onClick={() => handleAnswer('X')}>X</Q.AnswerButton>
          </div>
          {showPopup && (
            <Q.Popup>
              <p>{popupContent}</p>
              {popupExplanation && <small>{popupExplanation}</small>}
            </Q.Popup>
          )}
        </>
      )}
    </Q.QuizContainer>
  );
};

export default Advanced;
