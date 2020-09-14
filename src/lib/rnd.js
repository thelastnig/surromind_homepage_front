import ImgRND1 from '../images/rnd1.jpg';
import ImgRND2 from '../images/rnd2.jpg';
import ImgRND3 from '../images/rnd3.jpg';

import XAIImage1 from '../images/XAIImage1.png';
import XAIImage2 from '../images/XAIImage2.png';
import XAIImage3 from '../images/XAIImage3.png';

import AIPlatformImage1 from '../images/AI_Platform1.png';
import AIPlatformImage2 from '../images/AI_Platform2.png';
import AIPlatformImage3 from '../images/AI_Platform3.png';
import AIPlatformImage4 from '../images/AI_Platform4.png';
import AIPlatformImage5 from '../images/AI_Platform5.png';
import AIPlatformImage6 from '../images/AI_Platform6.png';
import AIPlatformImage7 from '../images/AI_Platform7.jpg';

import AutoDLImage1 from '../images/AutoDL1.png';
import AutoDLImage2 from '../images/AutoDL2.png';


const mainRND = [
  {
    id: 'AIPlatform-Surromind',
    type: 'R&D',
    url: '/rnd/content/AIPlatform-Surromind',
    title: 'AI Platform',
    titleS: 'AI Platform',
    subTitle: 'AI Platform detail',
    image: ImgRND1,
    contents_overview: [
      {
        type: 'textNormal',
        desc: `인공지능 플랫폼은, 인공지능 기술을 기반으로 연구개발을 수행하는 데 필요한 인프라와 도구를 제공하고 인공지능 구현 과정을 지원하며, 연구개발 결과가 제품과 서비스로 이어지기까지의 과정의 생산성을 최대화하기 위한 하드웨어/소프트웨어 통합 시스템이다.`
      },
    ],
    contents_detail: [
      {
        type: 'textNormal',
        desc: `인공지능의 수많은 분야 중에서도 최근 머신러닝과 딥러닝 기반의 인공지능의 비중이 크게 증가함에 따라, 대규모 데이터로 학습한 인공지능 프로그램(모델)의 개발 절차를 종합적으로 지원하는 시스템의 수요가 크게 늘고 있다.`
      },
      {
        type: 'imageWithCaption',
        src: AIPlatformImage1
      },
      {
        type: 'imageCaption',
        desc: `그림 1. 인공지능 프로그램의 생애 주기(life cycle)`
      },
      {
        type: 'textNormal',
        desc: `구글의 연구개발진들에 대한 설문에 따르면(참조: https://medium.com/thelaunchpad/the-ml-surprise-f54706361a6c), 사람들의 기대와 달리 머신러닝 모델링에 필요한 자원의 대부분은 인프라 구축과 통합에 집중되어 있으며(그림 3.), 풀고자 하는 응용에 적합한 데이터 확보와 처리가 ‘키 프로세스’로 인식되고 있다. 연구개발자들이 문제의 핵심(KPI 정의, 모델링)에 집중하도록 지원하는 도구가 절실하다. `
      },
      {
        type: 'imageWithCaption',
        src: AIPlatformImage2
      },
      {
        type: 'imageCaption',
        desc: `그림 2 머신러닝 기반 인공지능 개발의 단계별 소요 자원: 비전공자의 기대 vs. 실무자의 실제 사례에 대한 설문 결과는 큰 차이가 있다Expectation vs. Real. 출처: https://medium.com/thelaunchpad/the-ml-surprise-f54706361a6c`
      },
      {
        type: 'textNormal',
        desc: `인공지능 플랫폼은 회사의 인공지능 인프라의 핵심이며, 데이터 과학자, 데이터 분석가, 머신러닝 연구자, 머신러닝 엔지니어 등의 다양한 직군의 연구개발자들(그림 4)의 필수 도구이다.`
      },
      {
        type: 'imageWithCaption',
        src: AIPlatformImage3
      },
      {
        type: 'imageCaption',
        desc: `그림 3. 인공지능 연구개발자 직군 구성도, 출처: Workera – AI Career Path)`
      },
      {
        type: 'textNormal',
        desc: `인공지능 플랫폼은 그림 4와 같이 인공지능 프로그램 주기의 각 단계별로 필수적인 기능을 지원하고, 이러한 기능이 연계되어 자연스런 작업의 흐름(workflow)으로 구성하도록 지원하여야 한다.`
      },
      {
        type: 'imageWithCaption',
        src: AIPlatformImage4
      },
      {
        type: 'imageCaption',
        desc: `그림 4. 인공지능 프로그램 주기별로 인공지능 플랫폼이 지원해야 할 기능`
      },
      {
        type: 'textNormal',
        desc: `인공지능 플랫폼의 그림 5와 같이 각 단계별 기능을 지원하는 S/W 모듈과, 연구개발자의 작업을 지원하는 응용 프로그램 및 서비스로 구성된다.`
      },
      {
        type: 'imageWithCaption',
        src: AIPlatformImage5
      },
      {
        type: 'imageCaption',
        desc: `그림 5. 인공지능 플랫폼의 소프트웨어 구성 예시`
      },
      {
        type: 'textNormal',
        desc: `인공지능 플랫폼의 S/W 환경을 실행하기 위한 H/W 환경은 다수의 계산 자원을 묶은 클러스터(cluster) 형태로 구성한다. 딥러닝 중심의 인공지능 프로그램 개발을 가속화하기 위해서는 GPU 자원을 중심으로 한 클러스터의 구성이 필수적이다. 이러한 GPU Cluster는 로컬에 구성하거나(on-prem) 클라우드 상에 구현하며, 필요시 두 형태를 결합한 하이브리드 형태를 취할 수 있다.`
      },
      {
        type: 'image',
        src: AIPlatformImage6
      },
    ],
    contents_feature: [
      {
        type: 'textNormal',
        desc: `인공지능 플랫폼이 갖추어야 할 주요 특성은 다음과 같다.`
      },
      {
        type: 'textNormal',
        desc: `• DevOps, MLOps: 프로그램의 개발에서 운영까지의 프로세스를 지원하는 기능 지원. 자동화의 수준을 높이고, 개발조직부터 운영조직까지의 협업이 원활하도록 설정. 머신러닝에 특화된 지속적 통합/배포(CI/CD) 연속작업 체계(pipeline)를 지원`
      },
      {
        type: 'textNormal',
        desc: `• AIaaS (AI as a Service): 개발 결과를 어느 환경에도 배포, 서비스하여 고객의 데이터를 연결하고 보호할 수 있어야 한다.`
      },
      {
        type: 'textNormal',
        desc: `• AutoML, 이를 지원하는GUI/UX, XAI`
      },

    ],
  },
  {
    id: 'explainable-artificial-intelligence',
    type: 'R&D',
    url: '/rnd/content/explainable-artificial-intelligence',
    title: 'XAI (Explainable Artificial Intelligence, 설명가능 인공지능)',
    titleS: 'XAI',
    subTitle: 'Explainable Artificial Intelligence',
    image: ImgRND2,
    contents_overview: [
      {
        type: 'textNormal',
        desc: `설명가능한 AI(XAI)는 인공지능 기술(AI) 적용 시 솔루션 결과를 사람이 이해할 수 있도록 하는 방법과 기법을 말한다. 설계자조차 AI가 왜 특정 결정에 도달했는지 설명하지 못하는 머신러닝(machine learning)의 '블랙박스' 개념과 대비된다.`
      },
    ],
    contents_detail: [
      {
        type: 'imageWithCaption',
        src: XAIImage1
      },
      {
        type: 'imageCaption',
        desc: `그림 1. 설명가능 AI (출처: XAI 튜토리얼, AAAI 2020 학술대회)`
      },
      {
        type: 'textNormal',
        desc: `미래의 고객이 차세대 AI 애플리케이션을 이해하고 신뢰하며 효과적으로 관리하려면 설명 가능한 AI가 필수적이다. 특히 설명 가능한 머신러닝 기술이 뒷받침되어야 한다.`
      },
      {
        type: 'textNormal',
        desc: `• 인공지능 기술이 주요 의사결정 과정에 적용되려면 법적인 요구조건과 제한사항을 충족시키는 이유를 제시할 필요가 있다. 인공지능의 공정성과 투명성 확보가 중요하다.`
      },
      {
        type: 'textNormal',
        desc: `• 인공지능 시스템 사용자는 시스템 작동 결과가 정당함이 보장하고, 필요시 인공지능 시스템의 작동 과정을 검증할 수 있는 정보를 제공받기를 원한다. 의료, 보험, 금융, 마케팅, 물류 등의 분야에서 특히 이러한 요구사항이 강하다.`
      },
      {
        type: 'textNormal',
        desc: `• AI 개발자들 역시 AI 모델의 추적 가능성을 필요로 한다. 개발 중인 인공지능 모델이 설명이 가능하고 해석이 가능한 추가의 특성을 갖고 있다면, 모델 개발자는 모델을 검증하고 디버깅을 잘 할 수 있으며, 대상 문제에 대한 보다 상세하고 새로운 통찰력을 얻을 수 있다.`
      },
    ],
    contents_feature: [
      {
        type: 'subTitle',
        desc: `연구개발 주제`
      },
      {
        type: 'textNormal',
        desc: `• 높은 수준의 학습 성능을 유지하면서 설명 가능성이 보다 큰 모델을 생산할 수 있는 기계 학습 기술 제품군 만들기`
      },
      {
        type: 'textNormal',
        desc: `• 심층 설명: 설명 가능한 특징을 학습하기 위한 심층 학습 기법을 수정 연구`
      },
      {
        type: 'textNormal',
        desc: `• 해석 가능한 모형: 보다 체계적이고 해석 가능한 인과적 모형을 학습하는 기법`
      },
      {
        type: 'textNormal',
        desc: `• 모델 유도: 임의의 블랙박스 모델로부터 설명 가능한 모델을 추론하는 기법`
      },
      {
        type: 'textNormal',
        desc: `• AI 제품의 라이프 사이클에서 "설명 가능한 설계 요소"`
      },
      {
        type: 'imageWithCaption',
        src: XAIImage2
      },
      {
        type: 'imageCaption',
        desc: `그림 2. XAI의 발전 방향`
      },
      {
        type: 'imageWithCaption',
        src: XAIImage3
      },
      {
        type: 'imageCaption',
        desc: `그림 3. 가용성을 보장하기 위한 기계 학습 응용 프로그램의 단계별 워크플로우 작업 예제 (출처: XAI 튜토리얼, AAAI 2020 학술대회)`
      },
    ]
  },
  {
    id: `auto-DL`,
    type: 'R&D',
    url: '/rnd/content/auto-DL',
    title: 'Auto DL',
    titleS: 'Auto DL',
    subTitle: 'Auto DL detail',
    image: ImgRND3,
    contents_overview: [
      {
        type: 'textNormal',
        desc: `AutoDL은 딥러닝 모델 학습을 자동화하는 방법론을 말한다. 딥러닝 이외의 알고리즘을 사용하는 전통적인 AutoML의 경우 인공지능보다는 데이터 사이언스 관점에서 제품화되고 있다는 점에서 AutoDL과는 다른 성격을 가진다. AutoDL 방법에 의해 자동화 가능한 작업의 범위는 다양하지만, 궁극적으로는 학습 데이터부터 모델 배포까지의 엔드-투-엔드 파이프라인을 자동으로 구성하고 실행할 수 있어야 한다.`
      },
    ],
    contents_detail: [
      {
        type: 'textNormal',
        desc: `주요 퍼블릭 클라우드의 AI 플랫폼에서 제공하는 AutoDL 기능으로부터 자동화에 필요한 주요 기술 요소와 현재의 AutoDL 기술이 엔드-투-엔드 자동화까지 발전하기 위해 넘어야 할 여러 기술적 허들을 엿볼 수 있다.`
      },
      {
        type: 'imageWithCaption',
        src: AutoDLImage1
      },
      {
        type: 'imageCaption',
        desc: `그림 1. Azure에서 제공하는 AutoML 기능에 대한 설명. https://azure.microsoft.com/en-us/services/machine-learning/automatedml/`
      },
      {
        type: 'image',
        src: AutoDLImage2
      },
      {
        type: 'textNormal',
        desc: `현재 AutoDL 제품들은 완전한 자동화보다는 인간 연구자들의 작업을 편리하게 만드는 방향으로 개발되고 있다. Azure의 경우, 현대적인 딥러닝 워크플로우에 맞춘 개발 환경 또는 GUI 기반의 도구를 제공하고, 연구자들이 편리하게 데이터 탐색과 전처리를 수행할 수 있도록 돕는다. 모델을 정의하고 나면 이를 여러가지 하이퍼파라메터 조합을 사용하여 실험하는 것은 자동으로 이루어진다. 또한, 모델의 출력에 대해 설명하는 등의 모델 분석 기능을 지원한다. 언뜻 보면 AutoDL 제품들이 인간 연구자들을 대체하는 것은 시간 문제인 것 같다.`
      },
      {
        type: 'textNormal',
        desc: `현재 AutoDL 제품들은 완전한 자동화보다는 인간 연구자들의 작업을 편리하게 만드는 방향으로 개발되고 있다. Azure의 경우, 현대적인 딥러닝 워크플로우에 맞춘 개발 환경 또는 GUI 기반의 도구를 제공하고, 연구자들이 편리하게 데이터 탐색과 전처리를 수행할 수 있도록 돕는다. 모델을 정의하고 나면 이를 여러가지 하이퍼파라메터 조합을 사용하여 실험하는 것은 자동으로 이루어진다. 또한, 모델의 출력에 대해 설명하는 등의 모델 분석 기능을 지원한다. 언뜻 보면 AutoDL 제품들이 인간 연구자들을 대체하는 것은 시간 문제인 것 같다.`
      },
      {
        type: 'textNormal',
        desc: ``
      },
      {
        type: 'textNormal',
        desc: ``
      },
    ],
    contents_feature: [
      {
        type: 'textNormal',
        desc: `현재 AutoDL 제품들은 완전한 자동화보다는 인간 연구자들의 작업을 편리하게 만드는 방향으로 개발되고 있다. Azure의 경우, 현대적인 딥러닝 워크플로우에 맞춘 개발 환경 또는 GUI 기반의 도구를 제공하고, 연구자들이 편리하게 데이터 탐색과 전처리를 수행할 수 있도록 돕는다. 모델을 정의하고 나면 이를 여러가지 하이퍼파라메터 조합을 사용하여 실험하는 것은 자동으로 이루어진다. 또한, 모델의 출력에 대해 설명하는 등의 모델 분석 기능을 지원한다. 언뜻 보면 AutoDL 제품들이 인간 연구자들을 대체하는 것은 시간 문제인 것 같다.`
      },
      {
        type: 'textNormal',
        desc: `현재 AutoDL 제품들은 완전한 자동화보다는 인간 연구자들의 작업을 편리하게 만드는 방향으로 개발되고 있다. Azure의 경우, 현대적인 딥러닝 워크플로우에 맞춘 개발 환경 또는 GUI 기반의 도구를 제공하고, 연구자들이 편리하게 데이터 탐색과 전처리를 수행할 수 있도록 돕는다. 모델을 정의하고 나면 이를 여러가지 하이퍼파라메터 조합을 사용하여 실험하는 것은 자동으로 이루어진다. 또한, 모델의 출력에 대해 설명하는 등의 모델 분석 기능을 지원한다. 언뜻 보면 AutoDL 제품들이 인간 연구자들을 대체하는 것은 시간 문제인 것 같다.`
      },
    ]
  },
]

export default mainRND;