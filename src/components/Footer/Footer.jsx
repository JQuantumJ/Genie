import React from 'react';
import * as F from './FooterStyle'; 
import LogoImg from '/src/assets/icon/NavFooter/Logo.svg';

const Footer = () => {
  return (
    <F.FooterContainer>
      <F.FooterInner>
        <F.Logo onClick={() => window.location.href = ""}>
          <F.LogoImage src={LogoImg} alt="Footer Logo" />
          <h1>Genie</h1>
        </F.Logo>
        <F.FooterLinks>
          <F.LinkList>
            <li><a href="/">회사소개</a></li>
            <li><a href="/">오시는길</a></li>
            {/* 추가 링크 */}
          </F.LinkList>
          <F.LinkList style={{marginLeft: '4%'}}>
            <li><p style={{fontSize: '1.7vw', color: '#fff'}}>|</p></li>
          </F.LinkList>
          <F.LinkList>
            <li><a href="/"><b>개인정보처리방침</b></a></li>
            <li><a href="/">이용약관</a></li>
            {/* 추가 링크 */}
          </F.LinkList>
        </F.FooterLinks>
        <F.Address>
          서울센터   |   서울시 송파구 가락로16길3-20 진인프라빌딩
          {/* 추가 정보 */}
        </F.Address>
      </F.FooterInner>
    </F.FooterContainer>
  );
};

export default Footer;
