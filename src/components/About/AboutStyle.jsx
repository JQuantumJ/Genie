import styled from 'styled-components';

export const Feat = styled.div`
  background: #1c2329;
  max-width: 100%;
  width: 100%;
  min-height: 200vh;
  cursor: text;
  user-select: text;
  padding: 0;
  height: 200vh;
  margin-bottom: -30vh;
`;

export const DocsContainer = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 40px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #1c2329;
  color: #fff;
`;

export const DocsHeader = styled.section`
  display: flex;
  align-items: left;
  margin-bottom: 40px;
  margin-top: 70px;
`;

export const DocsHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const DocsLogo = styled.img`
  width: 70px;
  height: auto;
`;

export const TitleH1 = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`;

export const DescriptionP = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.7;
  h3{
    font-size: 1.5rem;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`;

export const MediaSection = styled.div`
  display: none;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 10px;

  p {
    line-height: 1.6;
    color: #bbb;
    &::selection {
        background-color: #60E6F2;
        color: #000;
    }
  }
`;

export const GettingStarted = styled.section`
  background-color: #1c2329;
  padding: 20px 30px;
  border-radius: 8px;
  border: 1px solid #444;
  margin-bottom: 40px;
`;

export const HeadingH2 = styled.h2`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`;

export const ProductSection = styled.section`
  margin-bottom: 40px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media(max-width: 780px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductCard = styled.div`
  background-color: #1c2329;
  border: 1px solid #444;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  padding: 20px;
  transition: box-shadow 0.3s ease;
  img{
    max-width: 40px;
    width: 40px;
  };
  &:hover {
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    &::selection {
        background-color: #60E6F2;
        color: #000;
    }
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
    line-height: 1.7;
    &::selection {
        background-color: #60E6F2;
        color: #000;
    }
  }
`;

export const MobileMedia = styled(MediaSection)`
  @media (max-width: 768px) {
    display: flex;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      color: #eee;
        &::selection {
            background-color: #60E6F2;
            color: #000;
        }
    }
    h2 {
      font-size: 1.4rem;
        &::selection {
            background-color: #60E6F2;
            color: #000;
        }
    }
    ${ProductGrid} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
