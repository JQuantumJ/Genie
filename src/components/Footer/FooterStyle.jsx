// FooterStyle.jsx
import styled from 'styled-components';

export const FooterContainer = styled.footer`
max-width: 100%;
position: relative;
margin-top: auto;
background: #292F36;
padding: 5.33333vw 0 10.66667vw 0;
border-radius: 8vw 0 0 0;

@media (min-width: 768px) {
  padding: 3.90625vw 0 7.8125vw 0;
  border-radius: 5.85938vw 0 0 0;
}

@media (min-width: 960px) {
  padding: 3.64583vw 0 4.47917vw 0;
  border-radius: 0 15.10417vw 0 0;
}

@media (min-width: 1920px) {
  padding: 70px 0 86px 0;
  border-radius: 0 290px 0 0;
}
`;

export const FooterInner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 70%;
margin-left: 15%;

@media (min-width: 960px) {
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}
`;

export const Logo = styled.div`
cursor: pointer;
margin-bottom: 5.33333vw;
display: flex;
align-items: center;
gap: 7%;
flex-direction: row;
justify-content: space-between;
h1{
  font-size: 1.5vw;
  color: #fff;
  font-weight: bold;
}
@media (min-width: 768px) {
  margin-bottom: 3.90625vw;
}

@media (min-width: 960px) {
  margin-bottom: 0;
}
`;

export const LogoImage = styled.img`
height: 100%;
`;

export const FooterLinks = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;
gap: 10%;
align-items: center;
@media (min-width: 960px) {
  flex-direction: row;
  justify-content: space-between;
}
`;

export const LinkList = styled.ul`
list-style: none;
display: flex;
align-items: center;
gap: 15%;
color: #fff;

a {
  color: #999;
  font-size: 2vw;
  line-height: 5.86667vw;
  text-decoration: none;
  white-space: nowrap;

  @media (min-width: 960px) {
    color: #fff;
    font-size: 1.14583vw;
    line-height: 1.45833vw;
  }

  @media (min-width: 1920px) {
    font-size: 22px;
    line-height: 28px;
  }
}
`;

export const Address = styled.address`
color: #fff;
opacity: 0.4;
align-items: center;
a {
  color: #fff;
  opacity: 1;
}
`;
