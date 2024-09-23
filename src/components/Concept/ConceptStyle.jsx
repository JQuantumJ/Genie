import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 250vh;
    max-height: 250vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
    @media(max-width: 600px){
      height: 110vh;
      max-height: 110vh; 
    }
`

export const Wrapper2 = styled.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
    @media(max-width: 600px){
      height: 250vh;
      max-height: 250vh; 
    }
`

export const CatWrapper = styled.div`
  max-width: 100%;
  margin-top: 10%;
  border-radius: 0.7vw;
  position: relative;
  margin-bottom: 30%;
   p{
    font-size: 2rem;
    margin-top: 2%;
   }
   h1{
    margin-left: 5%;
    font-size: 2.2rem;
      @media(max-width: 900px){
        margin-top: 15%;
        font-size: 1.9rem;
      }
      @media(max-width: 900px){
        margin-top: 18%;
      }
   }
`

export const ConceptWrapper = styled.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;


  h1 {
    text-align: left;
    color: #000;
    font-size: 2.8rem;
  }

  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
  }

  .accordion-item {
    border: 1px solid #007bff;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #333;
  }

  .accordion-title {
    padding-top: 2%;
    padding-bottom: 1.5%;
    letter-spacing: 2px;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    font-size: 2rem;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid #007bff;
    @media (max-width: 900px) {
      padding-top: 3.5%;
      padding-bottom: 2.3%;
      padding-left: 4.5%;
      padding-right: 4.5%;
    }
      
  }

  .accordion-title.active {
    background-color: #004085;
  }

  .accordion-title span:last-child {
    font-size: 1rem;
  }

  .accordion-content {
    padding: 3%;
    background-color: #444;
    letter-spacing: 1.4px;
    color: #eee;
    font-size: 1.5rem;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    h1{
      font-size: 1.7rem;
       @media (max-width: 900px) {
          font-size: 1.2rem;
       }
    }
    p{
       @media (max-width: 900px) {
          font-size: 1rem;
          margin-bottom: 1%;
       }
    }
    a{
      color: #007bff;
      font-size: 1.7rem;
      padding-left: 5%;
    }
      @media (max-width: 900px) {
        padding: 5%;
      }
  }
  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 3%;
    font-size: 1.2rem;
    line-height: 1.7;
    a{
      color: #007bff;
      font-size: 1.6rem;
      padding-left: 40%;
    }
  }
  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;
    font-size: 1rem;
  }
`;



export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalContent = styled.div`
  background-color: #eee;
  padding: 20px;
  border-radius: 8px;
  width: 85%;
  max-width: 85%;
  height: 90vh;  /* 모달 자체 높이를 90vh로 설정 */
  position: relative;
  overflow-y: auto; /* 스크롤을 허용하여 내용이 다 보이도록 설정 */
  max-height: 90vh; /* 모달의 최대 높이를 90vh로 설정 */

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const Button = styled.button`
padding: 10px 20px;
margin: 20px auto; 
font-size: 1rem;
display: block; 
cursor: pointer;
background-color: #007bff; !important;
color: white;
border: none;
border-radius: 5px;
text-align: center;

&:hover {
  background-color: #0056b3; !important;
}
`;