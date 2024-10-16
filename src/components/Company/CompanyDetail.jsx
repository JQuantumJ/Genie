import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as C from './CompanyStyle';
import idq from '/src/assets/image/Company/idq.svg';
import ibm from '/src/assets/image/Company/ibm.svg';
import dwave from '/src/assets/image/Company/dwave.svg';
import banner from '/src/assets/image/Company/banner.svg';
import rigetti from '/src/assets/image/Company/rigetti.svg';
import honeywell from '/src/assets/image/Company/honeywell.svg';
import google from '/src/assets/image/Company/google.svg';
import microsoft from '/src/assets/image/Company/microsoft.svg';
import jininfra from '/src/assets/image/Company/jininfra.svg';
import intel from '/src/assets/image/Company/intel.svg';
import alibaba from '/src/assets/image/Company/alibaba.svg';
import Jenie1 from '/src/assets/image/Company/Jenie1.svg';
import Jenie2 from '/src/assets/image/Company/Jenie2.svg';

const companyDetails = {
  ibm: {
    title: 'IBM',
    description: 'IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.',
    content: 'IBM은 2016년 IBM Quantum Experience를 통해 양자 컴퓨팅을 대중에게 공개했습니다. Qiskit이라는 오픈 소스 프레임워크를 제공하며, 연구자와 학생들이 양자 알고리즘을 쉽게 개발하고 테스트할 수 있는 환경을 제공합니다. IBM은 1,000 큐비트 이상의 양자 컴퓨터를 2029년까지 구현하는 것을 목표로 하며, 화학 시뮬레이션, 금융 리스크 분석, 물질 개발, 공급망 최적화 등 다양한 분야에서 양자 컴퓨팅의 응용을 확대하고 있습니다. IBM은 슈퍼컴퓨터와 양자 컴퓨터를 결합한 하이브리드 컴퓨팅 모델도 연구 중입니다.',
    businessTitle: '양자 컴퓨팅 사업',
    business: 'IBM은 IBM Quantum Experience를 통해 누구나 양자 컴퓨터에 접근할 수 있는 클라우드 기반의 플랫폼을 제공하고 있습니다. 연구자, 학생, 기업 고객은 Qiskit 오픈 소스 프레임워크를 사용해 양자 알고리즘을 개발할 수 있습니다. 또한, 양자 컴퓨터와 기존 컴퓨터의 결합을 통한 **하이브리드 컴퓨팅 모델** 개발에 주력하고 있습니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'IBM은 세계 최초로 양자 컴퓨터를 클라우드에 공개했으며, 127 큐비트 시스템(IBM Eagle)을 발표했습니다. IBM의 로드맵에 따르면, 2029년까지 1,000 큐비트 이상의 양자 컴퓨터를 구축할 예정입니다. 이들은 **화학 시뮬레이션, 공급망 최적화, 금융 리스크 관리**와 같은 문제에 양자 컴퓨팅을 적용하고 있으며, 주요 고객으로는 금융 기관과 제약 회사가 있습니다.',
    imgSrc: ibm,
  },
  idq: {
    title: 'IDQ',
    description: 'IDQ는 양자 키 분배(QKD) 기술을 통해 통신 보안을 강화하는 양자 암호화 솔루션을 제공합니다.',
    content: 'IDQ는 양자 기술을 활용한 보안 솔루션을 선도하는 기업으로, 금융 및 국방과 같은 민감한 산업에서 안전한 통신을 보장하는 기술을 제공합니다. 특히 양자 키 분배(QKD) 시스템은 도청을 탐지할 수 있는 능력을 갖추고 있어 최고 수준의 보안을 제공합니다. 유럽연합(EU)의 양자 통신 인프라 구축 프로젝트에 참여하고 있으며, 글로벌 표준을 수립하는 데 기여하고 있습니다.',
    businessTitle: '양자 암호화 및 통신 보안 사업',
    business: 'IDQ는 **양자 키 분배(QKD)** 기술을 개발해 보안 통신 솔루션을 제공하는 선도 기업입니다. QKD는 도청을 감지하고 공격으로부터 네트워크를 보호하는 데 사용됩니다. 금융 기관, 국방, 통신 등 민감한 분야에서 양자 보안을 제공합니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'IDQ는 유럽 연합의 양자 통신 인프라 구축 프로젝트에 적극 참여하고 있으며, 다양한 파트너와 협력해 양자 암호화 표준을 개발하고 있습니다. 스위스와 싱가포르 등 여러 국가의 정부와 협력해 양자 통신망 구축에 기여하고 있습니다.',
    imgSrc: idq,
  },
  dwave: {
    title: 'D-Wave',
    description: 'D-Wave는 양자 어닐링 기술을 활용한 최적화 문제 해결에 특화된 양자 컴퓨터를 제공합니다.',
    content: 'D-Wave는 세계 최초로 상용 양자 컴퓨터를 개발한 기업으로, 주로 최적화 문제를 해결하는 데 강점을 가지고 있습니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 금융, 물류, 인공지능(AI) 등의 분야에서 복잡한 문제를 해결합니다. 양자 어닐링은 최적화 문제를 매우 효율적으로 해결하는 기술로, 특히 재무 포트폴리오 최적화와 물류 경로 최적화에 활용됩니다.',
    businessTitle: '최적화 문제 해결',
    business: 'D-Wave는 양자 어닐링(annealing) 기술을 사용하여 최적화 문제를 해결합니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 물류 최적화, AI 훈련 가속화, 재무 포트폴리오 구성 등의 분야에서 활용됩니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'D-Wave는 최초의 상용 양자 컴퓨터를 도입한 기업으로, 고객에게 클라우드를 통한 원격 접근 서비스를 제공합니다. 양자 어닐링을 통한 **최적화 솔루션**은 특히 물류와 인공지능 분야에서 강력한 성과를 내고 있습니다.',
    imgSrc: dwave,
  },
  rigetti: {
    title: 'Rigetti Computing',
    description: 'Rigetti는 양자-클래식 하이브리드 컴퓨팅 시스템을 제공하며, 양자 컴퓨팅의 상용화를 목표로 합니다.',
    content: 'Rigetti는 Quantum Cloud Services(QCS)를 통해 클라우드 기반의 양자 컴퓨팅을 제공하며, 양자 회로와 기존 컴퓨팅 자원을 결합한 하이브리드 솔루션을 개발 중입니다. 이 회사는 특히 의료와 금융 산업에서 양자 컴퓨팅의 응용 가능성을 연구하며, 신약 개발 및 기후 변화 모델링에 집중하고 있습니다.',
    businessTitle: '양자-클래식 하이브리드 컴퓨팅',
    business: 'Rigetti는 주요 대학 및 연구 기관과 협력하여 양자 알고리즘을 개발하며, 연구자들이 쉽게 양자 컴퓨팅에 접근할 수 있도록 클라우드 플랫폼을 제공합니다. 또한 Quantum Cloud Services(QCS)를 통해 클라우드 기반 양자 컴퓨팅 환경을 제공합니다. 양자와 기존 컴퓨터를 결합한 하이브리드 솔루션을 개발해 더 빠른 문제 해결을 가능하게 합니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'Rigetti는 신약 개발, 금융 모델링, 기후 변화 연구 등 다양한 응용 분야에 양자 컴퓨팅을 도입하고 있습니다. 이 회사는 양자 컴퓨터와 기존 서버 간의 원활한 통합을 목표로 연구를 진행하고 있으며, 빠른 계산이 요구되는 환경에서 강점을 발휘하고 있습니다.',
    imgSrc: rigetti,
  },
  honeywell: {
    title: 'Honeywell',
    description: 'Honeywell은 이온 트랩 기술을 활용한 정밀한 양자 컴퓨팅을 제공합니다.',
    content: 'Honeywell의 양자 컴퓨터는 이온 트랩 기술을 기반으로 매우 높은 정밀도를 자랑합니다. 이 회사는 Cambridge Quantum과의 합병을 통해 소프트웨어와 하드웨어 개발 능력을 더욱 강화했으며, 공급망 최적화와 화학 물질 분석과 같은 분야에 양자 컴퓨팅을 활용하고 있습니다.',
    businessTitle: '이온 트랩 양자 컴퓨터',
    business: ' Honeywell은 **이온 트랩 기술**을 이용한 양자 컴퓨터를 개발합니다. 이온 트랩은 높은 정확도와 정밀한 제어를 제공하며, 물류 및 화학 분야에서 활용되고 있습니다. 또한 제조, 물류 및 화학 산업에 양자 컴퓨팅 솔루션을 제공합니다. 특히 정밀한 양자 계산 능력을 활용해 화학 반응을 시뮬레이션하고 산업 공정을 최적화하는 데 주력하고 있습니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'Honeywell은 2021년 Cambridge Quantum과 합병하여 양자 컴퓨팅 소프트웨어 개발을 강화했습니다. 이 회사의 양자 컴퓨터는 **화학 시뮬레이션, 최적화 문제 해결**에 특화되어 있으며, 특히 화학 반응 시뮬레이션에서 탁월한 성능을 보여주고 있습니다.',
    imgSrc: honeywell,
  },
  google: {
    title: 'Google',
    description: 'Google Quantum AI는 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 합니다.',
    content: 'Google은 2019년에 양자 우월성(Quantum Supremacy)을 발표하며 양자 컴퓨팅이 기존 컴퓨터보다 더 복잡한 문제를 해결할 수 있음을 증명했습니다. Google의 연구는 주로 인공지능(AI), 화학 및 물리학 분야에 중점을 두고 있으며, 양자 알고리즘을 통해 새로운 연구 방향을 제시하고 있습니다.',
    businessTitle: '양자 우월성 달성 및 인공지능 연구',
    business: 'Google은 2019년에 양자 우월성(Quantum Supremacy)을 선언하며, 기존 컴퓨터로는 해결하기 어려운 문제를 양자 컴퓨터로 처리하는 데 성공했습니다. Google의 연구는 인공지능과 양자 알고리즘 개발에 중점을 두고 있습니다. 머신러닝 및 데이터 분석 분야에서 양자 컴퓨팅을 적극 활용하고 있으며, AI 모델의 학습 속도를 높이기 위한 연구를 지속하고 있습니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'Google은 화학, 물리학 분야에 양자 컴퓨팅을 활용하며, 머신러닝 모델의 훈련 속도를 가속화하기 위해 연구를 진행 중입니다. 또한, Google은 양자 컴퓨팅과 인공지능의 결합을 통해 새로운 데이터 분석 기술을 개발하고 있습니다.',
    imgSrc: google,
  },
  microsoft: {
    title: 'Microsoft',
    description: 'Microsoft는 Azure Quantum 플랫폼을 통해 다양한 양자 하드웨어와 소프트웨어를 제공합니다.',
    content: 'Microsoft는 토폴로지 큐비트 개발에 주력하며, Azure Quantum 플랫폼을 통해 여러 양자 하드웨어와 소프트웨어 생태계를 지원합니다. 이 플랫폼은 연구자들이 양자 컴퓨팅을 쉽게 활용할 수 있도록 설계되었습니다.',
    businessTitle: '양자 클라우드 서비스',
    business: 'Microsoft는 Azure Quantum을 통해 다양한 양자 하드웨어와 소프트웨어를 지원합니다. Microsoft는 토폴로지 큐비트를 연구하며, 이를 통해 안정적이고 확장 가능한 양자 컴퓨팅 환경을 개발하고 있습니다. 암호화와 최적화 문제를 해결하기 위해 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구에도 기여하고 있습니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'Microsoft는 암호화 및 최적화 문제 해결에 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구를 지원하기 위한 도구도 개발 중입니다. 주요 고객들은 클라우드를 통해 양자 컴퓨터에 접근해 다양한 연구를 수행하고 있습니다.',
    imgSrc: microsoft,
  },
  intel: {
    title: 'Intel',
    description: 'Intel은 양자 프로세서 개발과 하드웨어 소프트웨어 생태계 구축에 집중하고 있습니다.',
    content: 'Intel은 고성능 양자 프로세서를 개발 중이며, Quantum SDK를 통해 양자 알고리즘 개발을 지원합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터 간의 협업을 통해 더욱 강력한 컴퓨팅 성능을 구현하려고 합니다.',
    businessTitle: '양자 프로세서 개발',
    business: 'Intel은 고성능 큐비트 프로세서를 개발하며, Quantum SDK를 통해 연구자들에게 양자 알고리즘 개발 환경을 제공합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터를 결합한 하이브리드 컴퓨팅 시스템 개발을 목표로 하고 있습니다. 그뿐 아니라, 반도체 기술과 양자 컴퓨팅을 결합해 상용화 가능한 솔루션을 개발하며, 다양한 산업 응용을 위해 파트너들과 협력하고 있습니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'Intel은 다양한 산업에서 상용화 가능한 양자 컴퓨터를 구축하는 데 중점을 두고 있으며, 반도체 기술과 양자 프로세서를 결합해 성능을 극대화하고 있습니다.',
    imgSrc: intel,
  },
  alibaba: {
    title: 'Alibaba',
    description: 'Alibaba는 클라우드와 양자 컴퓨팅을 결합해 보안 솔루션을 개발합니다.',
    content: 'Alibaba는 양자 연구소(AQML)를 설립하고 양자 컴퓨팅과 인공지능(AI)을 결합한 연구를 수행 중입니다. 이 회사는 특히 데이터 보안을 강화하기 위해 양자 암호화 기술을 연구하고 있습니다.',
    businessTitle: '양자 클라우드와 암호화 연구',
    business: 'Alibaba는 **AQML(Alibaba Quantum Laboratory)**을 통해 양자 컴퓨팅과 인공지능을 결합한 연구를 수행하고 있습니다. 양자 컴퓨팅은 보안 기술에 사용되어 데이터 보호를 강화합니다. 또한 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, AI와 결합된 양자 알고리즘 개발에 주력하고 있습니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'Alibaba는 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, 양자 암호화 솔루션을 개발해 보안을 강화하고 있습니다.',
    imgSrc: alibaba,
  },
  jininfra: {
    title: 'JinInfra',
    description: 'JinInfra는 양자 네트워크 인프라를 개발하며 보안 솔루션을 제공합니다.',
    content: 'JinInfra는 양자 키 분배(QKD)를 기반으로 한 보안 네트워크 구축을 목표로 하고 있으며, 정부 및 기업과 협력해 차세대 통신 인프라를 개발합니다.',
    businessTitle: '양자 통신 인프라 개발',
    business: 'JinInfra는 양자 키 분배(QKD)를 사용해 안전한 통신망을 구축합니다. 이 회사는 정부 및 기업과 협력해 차세대 통신 인프라를 개발하고 있습니다. 양자 통신 기술을 상용화하기 위해 노력하며, 보안이 중요한 분야에 최적화된 통신망을 구축하고 있습니다.',
    businessTitle2: '성과 및 연구 방향',
    business2: 'JinInfra는 양자 통신망 구축 프로젝트를 주도하며, 보안이 중요한 분야에 최적화된 양자 솔루션을 제공합니다. 이 회사는 양자 암호화 기술을 통해 네트워크 보안을 강화하는 데 중점을 두고 있습니다.',
    imgSrc: jininfra,
  },
};


const CompanyDetail = () => {
  const { companyName } = useParams();
  const company = companyDetails[companyName.toLowerCase()]; 

  const [isSpeaking, setIsSpeaking] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpeaking((prev) => !prev);
    }, 500); 

    return () => clearInterval(interval); 
  }, []);

  if (!company) {
    return <p>존재하지 않는 기업입니다.</p>;
  }

  return (
    <C.Container>
      <C.Header>
        <C.BackgroundImage src={banner} alt="banner image" />
        <C.Title>{company.title}</C.Title>
      </C.Header>
      
      <C.CharacterContainer>
        <C.CharacterImage 
          src={isSpeaking ? Jenie2 : Jenie1} 
          alt={`${company.title} speaking`} 
        />
        <C.SpeechBubble>
          <C.SpeechText>{company.description}</C.SpeechText>
          <C.SpeechContent>{company.content}</C.SpeechContent>
        </C.SpeechBubble>
      </C.CharacterContainer>
      <C.Bubble style={{marginBottom: '15px'}}>
        <h1>{company.businessTitle}</h1>
        <p>{company.business}</p>
        </C.Bubble>
        <C.Bubble>
        <h1>{company.businessTitle2}</h1>
        <p>{company.business2}</p>
      </C.Bubble>
      <div style={{height: '70px'}}></div>
    </C.Container>
  );
};

export default CompanyDetail;
