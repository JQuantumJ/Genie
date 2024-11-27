import React from 'react';
import { useNavigate } from 'react-router-dom';
import NIA from '/src/assets/icon/About/nia.svg';
import KQIC from '/src/assets/icon/About/kqic.svg';
import Logo from '/src/assets/icon/About/logo.svg';
import * as A from './AboutStyle';

const About = () => {
  const navigate = useNavigate();

  return (
    <A.Feat>
      <A.DocsContainer>
        <A.DocsHeader>
          <A.DocsHeaderContent>
            <A.DocsLogo src={Logo} alt="CS Logo" />
            <div>
              <A.TitleH1>양자 인턴십 소개</A.TitleH1>
              <A.DescriptionP>
                <h3>양자 인턴십 3기</h3>
              </A.DescriptionP>
            </div>
          </A.DocsHeaderContent>
        </A.DocsHeader>
        <A.MobileMedia>
          <A.DescriptionP>
          국내 양자기술 관련 기업의 인턴 수요 조사를 통해 국내 대학과 연계 매칭으로 신진 유입인력 확보하기 위한 목적.
          </A.DescriptionP>
        </A.MobileMedia>

        <A.GettingStarted>
          <A.HeadingH2>🌟 KQIC 양자기술 인력양성 프로그램</A.HeadingH2>
          <A.DescriptionP>
            미래 양자인재 양성을 위한 인턴십<br/>
            ICT 전공 대학(원)생 대상으로 국내 기업 연계 인턴십 프로그램 운영
          </A.DescriptionP>
        </A.GettingStarted>

        <A.ProductSection>
          <A.HeadingH2>기관 소개</A.HeadingH2>
          <A.ProductGrid>
            <A.ProductCard>
              <h3>KQIC</h3>
              <img src={KQIC} alt="Operating Systems" />
              <p>KQIC는 한국의 주요 양자 정보 기술 연구 및 개발을 담당하는 기관입니다. 이 센터는 양자 컴퓨팅, 양자 암호, 양자 통신 등 다양한 양자 기술 분야에서의 연구와 개발을 촉진하며, 국가적인 양자 정보 과학 기술의 진보를 지원합니다. 양자 기술의 상용화 및 기술 전수를 위한 플랫폼 역할을 하면서 산학연 네트워크를 구축하고 있습니다.</p>
              <A.LinkButton href="https://www.kqic.kr/main/index.html" target="_blank" rel="KQIC" style={{color: '#fff', marginTop: '15px'}}>홈페이지 방문</A.LinkButton>
            </A.ProductCard>
            <A.ProductCard>
              <h3>NIA</h3>
              <img src={NIA} alt="Operating Systems" />
              <p>NIA는 대한민국의 정보화를 총괄하는 정부 기관입니다. 이 기관은 정보화 정책의 수립 및 실행, 정보통신 기술(ICT)의 연구 개발을 지원하고, 디지털 격차 해소 및 정보 접근성 향상을 목표로 활동합니다. 또한, 국민의 정보화 역량 강화 및 디지털 전환을 위한 다양한 프로그램과 서비스를 제공하고 있습니다.</p>
              <A.SecondaryLinkButton href="https://www.nia.or.kr/site/nia_kor/main.do" target="_blank" rel="NIA"  style={{color: '#fff', marginTop: '15px'}}>홈페이지 방문</A.SecondaryLinkButton>
            </A.ProductCard>
          </A.ProductGrid>
        </A.ProductSection>
        <A.ProductSection>
        <A.HeadingH2>지원 자격 & 방법</A.HeadingH2>
        <A.ProductGrid>
            <A.ProductCard>
              <h3>지원 자격</h3>
              <p>1) 대한민국 국적의 만 19세 이상 만 34세 이하 청년</p>
              <p>2) 국내 양자기술 및 ICT 관련학과 전공자</p>
              <p style={{paddingLeft: '12px'}}>※ 물리학, 전기‧전자 공학, 전산‧컴퓨터 공학, 정보‧통신 공학 등</p>
              <p>3) 1일 8시간, 주 5일 전일제 근무가 가능한 자 </p>
              <p>4) 채용일 기준 미취업 상태의 자 </p>
            </A.ProductCard>
            <A.ProductCard>
              <h3>지원 방법</h3>
              <p>양자산업생태계지원센터(KQIC) 홈페이지 참고</p>
              <a href="https://www.kqic.kr/main/educenter.html?sub1=31&menu=28">바로가기</a>
              <hr />
              <h3>수행 직무</h3>
              <p>지원기업 소속 인턴으로서 양자기술 분야 직무 수행 (2지망까지 선택하여 지원) </p>
              <p style={{paddingLeft: '12px'}}>※ 기업별 자세한 직무내용은 첨부의 '참여기업별 직무기술서' 필수 확인</p>
            </A.ProductCard>
          </A.ProductGrid>
        </A.ProductSection>
      </A.DocsContainer>
    </A.Feat>
  );
};

export default About;