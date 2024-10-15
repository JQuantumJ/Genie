import styled from 'styled-components';

export const Wrapper = styled.div`

    margin-top: -5%;

    padding-top: 5%;
    background-color: #eee;
`;

export const ConceptWrapper = styled.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;
  p{
    font-size: 2rem;
    margin-top: 2%;
   }

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
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    font-size: 2rem;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid #007bff;
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
    font-size: 1.9rem;
    color: #eee;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    max-height: 330px;  /* Fixed height for content */
    overflow-y: auto;  /* Scroll if content exceeds height */
      p{
       @media (max-width: 900px) {
          font-size: 1.67rem;
          margin-bottom: 1%;
       }
    }
       h2{
        margin-top:10px;
        font-size:2rem;
        }
      h1{
        color:#eee;
        }
    
    }

  

  /* Flexbox to center the video */
  iframe {
    display: block;
    margin-left: 30%;
  }

  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 2%;
    font-size: 1.2rem;
    line-height: 1.7;
  }

  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;

    iframe{
    width:200px;
    height:200px;
    margin-left: 12%;}
  
    .accordion-content {
      font-size:1.3rem;
      padding:4%;
      }
     a{
      color: #007bff;
      font-size: 1.7rem;
      padding-left: 40%;
  }
`;
export const Wrapper2 = styled.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: 20%;
    padding-top: 5%;
    background-color: #eee;

`

export const ComputeWrapper = styled.div`
  max-width: 90%;
  margin-left: 5%;
  margin-top: 10%;
  border-radius: 0.7vw;
  position: relative;
  margin-bottom: 30%;
   p{
    font-size: 2rem;
    margin-top: 2%;
   }
   h1{
    margin-left: 2%;
    font-size: 2.6rem;
      @media(max-width: 900px){
        margin-top: 15%;
        font-size: 1.9rem;
      }
      @media(max-width: 900px){
        margin-top: 18%;
      }
   }
  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
    max-width: 97%;
  }
`