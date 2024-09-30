// Quiz.jsx
import React, { useState } from 'react';
import * as Q from './QuizStyle'; // Import the styled components
import Genie1 from '/src/assets/image/Character/sad.svg'; // Genie1 이미지 import
import Genie2 from '/src/assets/image/main/Genie2.svg'; // Genie2 이미지 import

const Quiz = () => {
  const questions = [
    { question: '양자 얽힘 현상은 거리에 상관없이 두 입자가 서로 연결된 상태를 유지하는 것을 의미한다.', correctAnswer: 'O', explanation: '양자 얽힘은 두 입자가 멀리 떨어져 있어도 서로의 상태가 연관된 상태를 유지하는 현상입니다. 한 입자의 상태가 변하면 즉시 다른 입자의 상태도 변합니다.' },
    { question: '불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다', correctAnswer: 'O', explanation: '불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다' },
    { question: '진인프라의 설립일은 2006년 5월 4일이다.', correctAnswer: 'O', explanation: '진인프라의 설립일은 2006년 5월 4일이다.' },
    { question: '양자란 화학 원소로서의 특성을 잃지 않는 범위에서 도달할 수 있는 물질의 기본적인 최소입자이다.', correctAnswer: 'X', explanation: '해당 설명은 "원자"에 대한 설명으로, 양자란 더 이상 나눌 수 없는 에너지의 최소량의 단위이다' },
    { question: '양자 컴퓨터는 모든 문제를 일반 컴퓨터보다 빠르게 해결할 수 있다.', correctAnswer: 'X', explanation: ' 양자 컴퓨터는 특정한 문제, 특히 복잡한 최적화 문제나 암호 해독 등에서 더 뛰어난 성능을 발휘합니다. ' },
    { question: '슈뢰딩거의 고양이 실험에서 고양이는 살았다.', correctAnswer: 'X', explanation: '양자역학의 해석에 따르자면 고양이의 생사 여부를 확인해보기 전까지는 고양이의 상태를 살아있으면서도 동시에 죽어있는 상태라고 규정하기 때문에 정답은 "알 수 없다"이다.' }
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

export default Quiz;
