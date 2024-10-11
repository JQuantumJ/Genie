// Quiz.jsx
import React, { useState } from 'react';
import * as Q from './QuizStyle'; 
import { useNavigate } from 'react-router-dom'; 
import Genie1 from '/src/assets/image/Character/sad.svg'; // Genie1 이미지 import
import Genie2 from '/src/assets/image/main/Genie2.svg'; // Genie2 이미지 import

const Medium = () => {
  const questions = [
    { question: '양자 얽힘 상태에 있는 두 입자는 한 입자의 상태가 바뀌면 즉시 다른 입자의 상태도 바뀐다.', correctAnswer: 'O', explanation: '양자 얽힘은 두 입자가 서로 먼 거리에 떨어져 있어도 서로 연결된 상태를 유지하는 현상입니다. 한 입자의 상태가 변화하면 즉시 다른 입자의 상태도 바뀝니다. ' },
    { question: '불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 있다는 이론이다', correctAnswer: 'X', explanation: '불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 없다는 원리입니다. 위치를 정확히 알수록 속도에 대한 정보는 불확실해집니다.' },
    { question: '양자 상태는 외부 관측이 이루어지면 즉시 붕괴된다.', correctAnswer: 'O', explanation: '양자 상태는 관측에 의해 결정됩니다. 관측이 이루어지면 입자의 상태가 고정되어 양자 중첩 상태는 붕괴됩니다.' },
    { question: '양자 터널링은 입자가 에너지를 충분히 갖고 있을 때만 장벽을 통과할 수 있는 현상이다.', correctAnswer: 'X', explanation: '양자 터널링은 입자가 에너지 장벽을 넘을 수 없을 때도 통과하는 현상입니다. 이는 고전적인 물리학으로 설명할 수 없는 양자적 현상입니다.' },
    { question: '양자 얽힘을 이용하면 정보를 빛의 속도보다 빠르게 전달할 수 있다', correctAnswer: 'X', explanation: '양자 얽힘은 입자의 상태 변화를 즉시 반영하지만, 이를 통해 실제 정보를 빛의 속도보다 빠르게 전달할 수는 없습니다.' },
    { question: '양자역학에서 파동함수는 입자의 위치를 정확히 예측해준다', correctAnswer: 'X', explanation: '파동함수는 입자의 위치를 정확히 예측하는 것이 아니라, 입자가 특정 위치에 있을 확률을 나타냅니다.' }
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
          {score < 4 ? (
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

export default Medium;
