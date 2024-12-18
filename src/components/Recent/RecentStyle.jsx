import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: -7%;
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
      font-family: 'Arial', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0px;
       @media (max-width: 900px) {
          font-size: 1.4rem;
          margin-bottom: 1%;
       }
    }

  h1 {
    margin-top:5%;
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
      font-family: 'Arial', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0px;
       @media (max-width: 900px) {
          font-size: 1.4rem;
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
      h1{
      margin-top: 16%;
      } 
      padding: 4%;
     font-size: 1rem;
    }
}
`;


export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  
  gap: 20px;  
  margin-top: 3%;
  margin-bottom: 1%;
  padding: 2%;


  @media (max-width: 700px) {
    grid-template-columns: 1fr; 
  }
`;

export const GalleryItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);  
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;  
    border-bottom: 2px solid #007bff;
    @media (max-width: 700px) {
        display: flex;
      } 
  }

  h3 {
    padding: 15px;
    font-size: 1.6rem;
    color: #333;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #5caafe;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  margin-left: 2%;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  &:hover {
    background-color: #2b89ec;
  }
    @media (max-width: 700px) {
        display: flex;
      } 

`;


