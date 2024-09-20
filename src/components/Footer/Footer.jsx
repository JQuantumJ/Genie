import React from 'react';
import * as F from './FooterStyle'; 
import GithubIcon from '/src/assets/icon/NavFooter/github.svg';
import MailIcon from '/src/assets/icon/NavFooter/mail.svg'; 
import Jininfra from '/src/assets/icon/NavFooter/Jininfra.svg';

const Footer = () => {
  return (
    <F.FooterContainer>
      <F.FooterInner>
        <F.CompanyInfo>
        <F.LogoImage onClick={() => window.location.href = "https://jininfra.com/"} src={Jininfra} alt="Footer Logo" />
          <F.Logo >
            <h1>주식회사 진인프라</h1>
          </F.Logo>
          <F.ContactInfo>
            <F.Inline style={{marginBottom: '2%'}}>
              <p>Email</p>
              <a href="mailto:jininfra@jininfra.com">jininfra@jininfra.com</a>
            </F.Inline>
            <F.Inline>
              <p>Call</p>
              <a href="tel:02-330-3900">02-330-3900</a>
            </F.Inline>
            <h3 style={{marginTop: '3%'}}>서울센터 | 서울시 송파구 가락로16길3-20 진인프라빌딩</h3>
          </F.ContactInfo>
        </F.CompanyInfo>

        <F.ContactUs>
          <h2>Contact Us</h2>
          
          <F.ContactTitle>  
          <hr style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}/>
            <h3 style={{marginTop: '6%', marginBottom: '6%'}}>Frontend Developer</h3>
          </F.ContactTitle>
          <F.ContactPerson>
            <F.PersonIcon><p>👤</p></F.PersonIcon>
            <span>Your Name</span>
            <F.IconContainer>
              <a href=""><img src={GithubIcon} alt="Github" /></a>
              <a href=""><img src={MailIcon} alt="Gmail" /></a>
            </F.IconContainer>
          </F.ContactPerson>
          <F.ContactPerson>
            <F.PersonIcon><p>👤</p></F.PersonIcon>
            <span>Your Name</span>
            <F.IconContainer>
              <a href=""><img src={GithubIcon} alt="Github" /></a>
              <a href=""><img src={MailIcon} alt="Gmail" /></a>
            </F.IconContainer>
          </F.ContactPerson>
        </F.ContactUs>
      </F.FooterInner>
      <F.FooterBottom >
        <p style={{textAlign: 'left', marginLeft: '7.5%'}}>© 2024 Genie. All rights reserved.</p>
      </F.FooterBottom>
    </F.FooterContainer>
  );
};
export default Footer;
