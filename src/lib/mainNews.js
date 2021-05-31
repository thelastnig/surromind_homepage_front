import newsImgDefault from '../images/default.jpg';
import newsImgDefaultThumb from '../images/default_thumb.jpg';

import news_08_25_1 from '../images/news_08_25_1.png';
import news_08_25_1_main from '../images/news_08_25_1_main.jpg';
import news_08_25_1_list from '../images/news_08_25_1_list.jpg';

import news_08_03_1_main from '../images/news_08_03_1_main.png';
import news_08_03_1_list from '../images/news_08_03_1_list.png';

import news_07_15_1_main from '../images/news_07_15_1_main.png';
import news_07_15_1_list from '../images/news_07_15_1_list.png';

import news_07_10_1 from '../images/news_07_10_1.jpg';
import news_07_10_1_main from '../images/news_07_10_1_main.jpg';
import news_07_10_1_list from '../images/news_07_10_1_list.jpg';

import news_07_01_1 from '../images/news_07_01_1.png';
import news_07_01_2 from '../images/news_07_01_2.png';
import news_07_01_3 from '../images/news_07_01_3.png';
import news_07_01_2_main from '../images/news_07_01_2_main.jpg';
import news_07_01_2_list from '../images/news_07_01_2_list.jpg';

import news_17_08_01_1 from '../images/news_17_08_01_1.jpg';
import news_17_08_01_2 from '../images/news_17_08_01_2.jpg';
import news_17_08_01_1_main from '../images/news_17_08_01_1_main.jpg';
import news_17_08_01_1_list from '../images/news_17_08_01_1_list.jpg';


import news_2020_assembling_AI_robot_challenge_runner_up from '../images/news_2020-assembling-AI-robot-challenge-runner-up.jpg';
import news_2020_assembling_AI_robot_challenge_runner_up_main from '../images/news_2020-assembling-AI-robot-challenge-runner-up_main.jpg';
import news_2020_assembling_AI_robot_challenge_runner_up_list from '../images/news_2020-assembling-AI-robot-challenge-runner-up_list.jpg';

import news_AI_testbed_Korea_surromind_win from '../images/news_AI-testbed-Korea-surromind-win.jpg';
import news_AI_testbed_Korea_surromind_win_main from '../images/news_AI-testbed-Korea-surromind-win_main.jpg';
import news_AI_testbed_Korea_surromind_win_list from '../images/news_AI-testbed-Korea-surromind-win_list.jpg';

import news_ICRA_2021_research_paper_published from '../images/news_ICRA-2021-research-paper-published.jpg';
import news_ICRA_2021_research_paper_published_main from '../images/news_ICRA-2021-research-paper-published_main.jpg';
import news_ICRA_2021_research_paper_published_list from '../images/news_ICRA-2021-research-paper-published_list.jpg';

import news_2021AIvoucher_support_project_information_main from '../images/news_2021AIvoucher-support-project-information_main.jpg';
import news_2021AIvoucher_support_project_information_list from '../images/news_2021AIvoucher-support-project-information_list.jpg';

import news_ybm_net_surromind_ai_mou_main from '../images/news_ybm-net-surromind-ai-mou_main.jpg';
import news_ybm_net_surromind_ai_mou_list from '../images/news_ybm-net-surromind-ai-mou_list.jpg';


const mainNews = [
  {
    id: 'ICRA-2021-research-paper-published',
    url: '/surromindnews/article/ICRA-2021-research-paper-published',
    type: 'NEWS',
    date: '2021.05.27',
    title: 'ICRA 2021 논문 게재',
    image: news_ICRA_2021_research_paper_published_main,
    imageS: news_ICRA_2021_research_paper_published_list,
    contents: {
      title: `ICRA 2021에 연구논문 발표`,
      contentsList: [
        {
          type: 'normal',
          desc: `써로마인드와 서울대학교의 공동연구가 로보틱스 분야 최고 권위 학회인 ICRA 2021에 게재 승인되었습니다.`,
        },
        {
          type: 'normal',
          desc: `연구진은 “Multimodal Anomaly Detection based on Deep Auto-Encoder for Object Slip Perception of Mobile Manipulation Robots"라는 제목의 논문에서 다중센서 데이터로 학습된 이상탐지를 이용한 모바일 로봇의 물체 파지 실패 판별 기술을 새롭게 제안했습니다.`,
        },
        {
          type: 'normal',
          desc: `제안된 기술은 환경 변화와 잡음이 심한 실세계 환경에서 로봇이 작업 실패를 보다 높은 확률로 탐지할 수 있도록 돕는 원천기술이며, 로봇 외에도 동적 환경에서의 안정적인 이상탐지가 필요한 산업 및 서비스 분야에서 핵심적으로 활용될 수 있습니다.`,
        },
        {
          type: 'normal',
          desc: `위 논문은 6월에 온라인으로 열릴 ICRA (International Conference on Robotics and Automation)에서 발표될 예정입니다.`,
        },
        {
          type: 'image',
          src: news_ICRA_2021_research_paper_published
        },
      ]
    },
    keywords: ['ICRA2021', '로보틱스', '논문발표'],
  },
  {
    id: '2021AIvoucher-support-project-information',
    url: '/surromindnews/article/2021AIvoucher-support-project-information',
    type: 'NEWS',
    date: '2021.05.01',
    title: ' 2021년 AI 바우처 선정',
    image: news_2021AIvoucher_support_project_information_main,
    imageS: news_2021AIvoucher_support_project_information_list,
    contents: {
      title: `2021년 AI 바우처 지원사업 선정`,
      contentsList: [
        {
          type: 'normal',
          desc: `써로마인드가 과학기술정보통신부 산하 정보통신산업진흥원(NIPA)이 주관하는 '2021 AI 바우처 지원사업'에 2020년에 이어 올해도 최종 선정되었습니다. 10:1의 높은 경쟁률을 보인 올해 사업에서 써로마인드는 '캐필러리 제조 공정 혁신을 위한 AI Vision 검사 기술 개발'과 '인공지능 대면적 미세입자 자동분석 전자현미경'을 주제로 한 2건의 사업을 수주하였습니다.`,
        },
        {
          type: 'normal',
          desc: `AI 바우처 지원 사업은 AI 기술을 도입하려는 중소·벤처, 중견 기업을 대상으로 AI 솔루션이나 서비스 활용을 지원하기 위한 목적으로 2020년 새롭게 추진된 사업으로, 공급 기업에는 자사의 경쟁력 있는 AI 기술을 알리고 새로운 시장을 확대할 기회를 제공하며, 수요 기업은 그간 높은 가격으로 도입이 망설여졌던 AI 솔루션, 서비스를 저렴한 비용으로 쓸 수가 있는 기회입니다. 이번 바우처 지원을 통해 AI 솔루션을 공급하는 써로마인드는 자사가 구축한 AI 플랫폼을 기반으로 수요기업에 선정된 ㈜페코텍과 ㈜코셈에 인공지능 솔루션을 공급하게 되며, 선정된 수요기업은 이를 통해서 인공지능 기술의 도입을 통한 제조 공정의 혁신을 도모할 수 있게 되었습니다.`,
        },
        {
          type: 'normal',
          desc: `본 사업을 통해 수요기업과 공급기업 모두 산업 경쟁력을 높일 수 있으며, 인공지능을 사업에 활용하고자 하는 기업은 매년 상/하반기 ‘AI 바우처 지원사업’ 공고가 있으니, 공고  확인 후에 많은 지원바랍니다.`,
        },
      ]
    },
    keywords: ['2021', 'AI바우처지원사원', 'NIPA'],
  },
  {
    id: '2020-assembling-AI-robot-challenge-runner-up',
    url: '/surromindnews/article/2020-assembling-AI-robot-challenge-runner-up',
    type: 'NEWS',
    date: '2021.03.12',
    title: '조립로봇 챌린지 수상',
    image: news_2020_assembling_AI_robot_challenge_runner_up_main,
    imageS: news_2020_assembling_AI_robot_challenge_runner_up_list,
    contents: {
      title: `2020 물품조립 AI-로봇 챌린지 준우승`,
      contentsList: [
        {
          type: 'normal',
          desc: `써로마인드가 정보통신기획평가원과 한국산업기술평가관리원이 공동 주관한 '2020 물품조립 AI-로봇 챌린지'에서 준우승을 수상하였습니다.`,
        },
        {
          type: 'normal',
          desc: `지난 2021년 3월 12일 코엑스 3층 컨퍼런스룸에서 열린 '2020 물품조립 AI·로봇 챌린지’는 AI를 활용해 매뉴얼을 습득한 로봇이 이케아 의자를 조립하는 것을 겨루는 행사로, AI와 로봇에 각각 일가견이 있는 두 곳이 한 팀을 이뤘고, 총 4개 팀이 경연을 펼쳤습니다. 경연에 참여한 4개 팀은 한국생산기술연구원·한양대 컨소시엄, 써로마인드·고려대 컨소시엄, 한국전자기술연구원·한국생산기술연구원 컨소시엄, 광주과학기술원·서울대 컨소시엄이었습니다.`,
        },
        {
          type: 'normal',
          desc: `경연에 앞서 10~11일 이틀간 로봇을 설치하고 시운전을 진행하였고, 행사는 코로나19로 대회 참가자, 심사위원, 관계자 등 필수 인원만 참석한 가운데 열렸습니다. 오전에는 지정과제를, 오후에는 자유과제를 놓고 대결을 펼쳤으며, 지정과제는 AI를 활용해 이케아의 스테판 의자를 조립하는 걸로 승자를 가렸습니다.`,
        },
        {
          type: 'normal',
          desc: `로봇이 이 과제를 수행하기 위해선 AI부문(기호, 그림, 지시어 등 객체인식)과 AI·로봇부문(3D시뮬레이션을 통한 조립작성 생성, 로봇 작업계획), 로봇 부문(조립기술) 등의 기술을 파악해야 합니다. 각 팀의 로봇들은 격자 모양의 펜스안에 들어가 작업을 수행하였으며, 최종적으로 써로마인드-고려대학교의 컨소시엄은 유니버설 로봇의 로봇팔을 이용해 경연에 참여, AI부문 준우승을 차지하였으며, 지능정보산업협회장상을 수상하였습니다.`,
        },
        {
          type: 'imageWithCaption',
          src: news_2020_assembling_AI_robot_challenge_runner_up
        },
        {
          type: 'imageCaption',
          desc: `임선경 지능정보산업협회 국장(왼쪽)이 AI부문 준우승팀을 시상`
        },
        {
          type: 'link',
          desc: `https://zdnet.co.kr/view/?no=20210314095724`
        },
        {
          type: 'normal',
          desc: ''
        },
        {
          type: 'link',
          desc: `https://www.youtube.com/watch?v=tPClgvj45vk`
        },
        {
          type: 'normal',
          desc: ''
        },
        {
          type: 'link',
          desc: `https://www.youtube.com/watch?v=huKmLQEHb44`
        },
      ]
    },
    keywords: ['물품조립', 'AI', '로봇', '챌린지', '준우승'],
  },
  {
    id: 'ybm-net-surromind-ai-mou',
    url: '/surromindnews/article/ybm-net-surromind-ai-mou',
    type: 'NEWS',
    date: '2021.01.30',
    title: 'YBMNET MOU',
    image: news_ybm_net_surromind_ai_mou_main,
    imageS: news_ybm_net_surromind_ai_mou_list,
    contents: {
      title: `와이비엠넷과 인공지능 교육사업 MOU`,
      contentsList: [
        {
          type: 'normal',
          desc: `써로마인드가 국내 교육기업 YBMNET과 향후 발전되는 인공지능(AI) 적용 교육사업 부분에 협력사로 상호 제휴키로 MOU를 맺었습니다.`,
        },
        {
          type: 'normal',
          desc: `이번 업무 협약으로 양 사는 인공지능(AI) 인재양성 교육사업 및 자격증 사업부분의 시장개척 및 확대를 위해 단계별로 협력사업을 추진하고자 하고자 합니다.`,
        },
        {
          type: 'normal',
          desc: `교육 운영사업은 국내의 인공지능 교육을 활성화하고 전문인력을 키워 인공지능 생태계를 강화하기 위하여 추진될 예정이며, 기업체 현업 종사자 및 창업자나 예비창업자, 대학생 등 다양한 사람들이 인공지능 개발역량을 갖출 수 있도록 교육과정을 제공하려고 계획 중에 있습니다.`,
        },
        {
          type: 'normal',
          desc: `또한, 자사가 구축한 AI 플랫폼을 기반으로 기업의 AI Transformation을 위한 현장 적용 인공지능 실습 교육에 초점을 두고, 현업 담당자의 AI 업무 역량 강화 프로그램을 진행합니다. 써로마인드는 산업계 수요 맞춤형의 인공지능 교육 플랫폼 구축을 통해 국내 인공지능 연구개발의 효율성을 높이고 인공지능의 대중화를 꾀하고자 합니다.`,
        },
      ]
    },
    keywords: ['YBM', '인공지능교육사업', 'MOU'],
  },
  {
    id: 'AI-testbed-Korea-surromind-win',
    url: '/surromindnews/article/AI-testbed-Korea-surromind-win',
    type: 'NEWS',
    date: '2020.12.16',
    title: 'AI테스트베드 코리아 수상',
    image: news_AI_testbed_Korea_surromind_win_main,
    imageS: news_AI_testbed_Korea_surromind_win_list,
    contents: {
      title: `AI 테스트베드 코리아에서 최우수상 수상`,
      contentsList: [
        {
          type: 'normal',
          desc: `써로마인드가 광주전남지방중소벤처기업청이 개최한 'AI 테스트베드 코리아 산업지능화 경진대회'에서 최우수상을 수상하였습니다.`,
        },
        {
          type: 'normal',
          desc: `'AI 테스트베드 코리아 산업지능화 경진대회'는 지역 전략산업과 인공지능 기술을 접목하여 새로운 비즈니스 모델을 창출하고 사업화를 지원하기 위해 기획된 대회로, AI분야 창업기업, 연구소, 단체 등이 다수 참가하여 지난 2020년 8월 4일 시작으로, 12월 14일부터 16일까지 결선을 개최 총 5개월의 장정을 마쳤습니다.`,
        },
        {
          type: 'normal',
          desc: `전통산업에 인공지능 도입을 통해 더 큰 사회적, 경제적 가치를 생산하고자 하는 목적으로 치뤄진 금번 경진대회는 자동차, 에너지, 헬스케어, 문화, 금융 대표 5대 산업분야에 대해 인공지능 도입이 필요한 실질적인 수요과제를 발굴하여, 총 80개 팀이 수요과제 해결에 참여, 그 중 30개 팀이 본선에 진출하여 결선 IR 경연에 올랐으며, 써로마인드-쎄미시스코팀은 영상(카메라) 기반 AI 기술을 이용한 차량외관결함 인지 자동화 시스템을 이용한 비즈니스 모델을 제안하여 최종 결선에서 최우수상을 입상하였습니다.`,
        },
        {
          type: 'image',
          src: news_AI_testbed_Korea_surromind_win
        },
        {
          type: 'link',
          desc: `https://youtu.be/a-Ks1wlpbag`
        },
      ]
    },
    keywords: ['AI-Testbed-Korea', '최우수상'],
  },
  {
    id: 'AIvoucher-support-project-selected',
    url: '/surromindnews/article/AIvoucher-support-project-selected',
    type: 'NEWS',
    date: '2020.08.25',
    title: 'AI바우처 지원사업 선정',
    image: news_08_25_1_main,
    imageS: news_08_25_1_list,
    contents: {
      title: `써로마인드, "2020년 AI 바우처 지원 사업"에 최종 선정`,
      contentsList: [
        {
          type: 'normal',
          desc: `정보통신산업진흥원은 2020년 8월 25일 써로마인드를 “2020년 AI 바우처 지원(추경)” 신규과제 사업자로 최종 선정했습니다. AI 바우처의 수요기업(파트너사)과 써로마인드의 기술 역량을 인정받은 결과입니다.`,
        },
        {
          type: 'normal',
          desc: `써로마인드는 이번 사업을 통해 자체적으로 보유한 “차종인식 솔루션”과 “번호판인식 솔루션”을 파트너사의 사업에 최적화시켜 공급할 수 있게 되었습니다. 파트너사는 기존 사람이 관리하던 업무 프로세스를 써로마인드의 솔루션을 통해 자동화시키고 업무 효율을 증가시킬 수 있게 되었습니다.`,
        },
        {
          type: 'normal',
          desc: `써로마인드의 “차종인식 솔루션”과 “번호판 인식 솔루션”은 제한된 촬영조건이 아닌 일반적인 환경과 스마트폰에서 촬영된 이미지에서도 우수한 인식 성능을 보이고 있습니다. 여러 산업 분야에서 사용할 수 있도록 지속적으로 발전시켜 나갈 것입니다.`,
        },
        {
          type: 'normal',
          desc: `'인공지능(AI) 바우처지원 사업'이란 AI기술의 활용과 확산을 촉진하고자, AI솔루션 적용이 필요한 중소·벤처기업(수요기업)에게 바우처를 발급하고, 수요기업은 바우처를 활용하여 중소·벤처기업(공급기업)의 AI솔루션을 활용하도록 지원하는 사업입니다. 본 사업을 통해 수요기업과 공급기업 모두 산업 경쟁력을 높일 수 있습니다.`,
        },
        {
          type: 'image',
          src: news_08_25_1
        },
        {
          type: 'normal',
          desc: `인공지능을 사업에 활용하는 수요기업으로 참여를 원하시면, 공급기업인 써로마인드와 사업 참여를 협의하시면 됩니다. 매년 상/하반기 초에 공지가 있을 예정입니다. 하기는 2020년 추경으로 편성된 사업 공고 입니다.`,
        },
        {
          type: 'subTitle',
          desc: `2020년 AI 바우처 지원(추경) 사업 공고`
        },
        {
          type: 'link',
          desc: `https://www.nipa.kr/main/selectBbsNttView.do?key=122&bbsNo=2&nttNo=1667&bbsTy=biz&searchCtgry=&searchCnd=all&searchKrwd=&pageIndex=2`
        },
      ]
    },
    keywords: ['AI바우처지원사원', '써로마인드선정'],
  },
  {
    id: '2020-CVPR-Number1',
    url: '/surromindnews/article/2020-CVPR-Number1',
    type: 'NEWS',
    date: '2020.08.03',
    title: 'CVPR 대회 1위',
    image: news_08_03_1_main,
    imageS: news_08_03_1_list,
    contents: {
      title: `써로마인드, 'CVPR 2020 – ActivityNet Entities' 1위 달성`,
      contentsList: [
        {
          type: 'normal',
          desc: `써로마인드의 김주은, 허유정, 김병희 연구팀은 “CVPR – ActivityNet-Entities Object Localization Challenge 2020” 에서 1위를 하였습니다. 부상으로 $1500의 우승상금을 수상하였습니다. 이번 대회를 통해 써로마인스사의 Vision AI 기술에 대한 역량을 인증 받았습니다. 현재 급증하고 있는 동영상 처리에 대한 AI 솔루션의 기술 리더십을 확보해 나갈 것으로 기대됩니다.`,
        },
        {
          type: 'subTitle',
          desc: `대회 사이트`
        },
        {
          type: 'link',
          desc: `http://activity-net.org/challenges/2020/tasks/guest_anet_eol.html`
        },
        {
          type: 'subTitle',
          desc: `발표 동영상`
        },
        {
          type: 'link',
          desc: `https://www.youtube.com/watch?v=7AVCgn21noM&feature=youtu.be&t=706l`
        },
        {
          type: 'subTitle',
          desc: `써로마인드 팀이 우승자로 발표되는 순간`
        },
        {
          type: 'link',
          desc: `https://youtu.be/7AVCgn21noM?t=755`
        },
      ]
    },
    keywords: ['CVPR2020', '써로마인드우승'],
  },
  {
    id: 'AI-supply-selected',
    url: '/surromindnews/article/AI-supply-selected',
    type: 'NEWS',
    date: '2020.07.15',
    title: 'AI 공급업체 선정',
    image: news_07_15_1_main,
    imageS: news_07_15_1_list,
    contents: {
      title: `써로마인드, 'AI 바우처지원 사업'의 공급기업으로 선정`,
      contentsList: [
        {
          type: 'normal',
          desc: `써로마인드는 과학기술정보정보통신부에서 중소·벤처기업의 인공지능(AI) 기술도입을 지원하기 위한 '2020년 AI 바우처지원 사업'의 공급기업으로 선정되었습니다.`,
        },
        {
          type: 'normal',
          desc: `'인공지능(AI) 바우처지원 사업'이란 AI기술의 활용과 확산을 촉진하고자, AI솔루션 적용이 필요한 중소·벤처기업(수요기업)에게 바우처를 발급하고, 수요기업은 바우처를 활용하여 중소·벤처기업(공급기업)의 AI솔루션을 활용하도록 지원하는 사업입니다. 
          본 사업을 통해 수요기업과 공급기업 모두 산업 경쟁력을 높일 수 있습니다.`,
        },
        {
          type: 'normal',
          desc: `인공지능을 사업에 활용하는 수요기업으로 참여를 원하시면, 공급기업인 써로마인드와 사업 참여를 협의하시면 됩니다. 매년 상/하반기 초에 공지가 있을 예정입니다. 하기는 2020년 추경으로 편성된 사업 공고 입니다.`,
        },
        {
          type: 'subTitle',
          desc: `2020년 AI 바우처 지원(추경) 사업 공고`
        },
        {
          type: 'link',
          desc: `https://www.nipa.kr/main/selectBbsNttView.do?key=122&bbsNo=2&nttNo=1667&bbsTy=biz&searchCtgry=&searchCnd=all&searchKrwd=&pageIndex=2`
        },
      ]
    },
    keywords: ['인공지능', 'AI바우처지원사업', '과기부'],
  },
  {
    id: 'Surromind-AutoEver-MOU',
    url: '/surromindnews/article/Surromind-AutoEver-MOU',
    type: 'NEWS',
    date: '2020.07.10',
    title: '현대 오토에버 MOU',
    image: news_07_10_1_main,
    imageS: news_07_10_1_list,
    contents: {
      title: `현대오토에버, 써로마인드와 AI 개발 협력 MOU 체결`,
      contentsList: [
        {
          type: 'normal',
          desc: `현대오토에버가 써로마인드와 인공지능(AI) 기술 고도화 및 차세대 AI 플랫폼 개발 협력을 위한 양해각서(MOU)를 체결했다고 10일 밝혔다.`,
        },
        {
          type: 'image',
          src: news_07_10_1
        },
        {
          type: 'normal',
          desc: `이번 업무 협약으로 양 사는 국내외 시장에서 활용 가능한 차세대 AI 플랫폼 기술을 개발할 예정이다. 차세대 AI 플랫폼은 AI 기술 개발을 위한 데이터 전처리부터 AI 모델 설계, AI 학습 및 검증까지 전 과정의 파이프라인을 통합하고 자동화 환경을 지원하는 범용 플랫폼이다. 차세대 AI 플랫폼은 B2B 회사들의 AI 기술 현장 도입을 도와 해당 서비스 활성화에 도움을 줄 것으로 기대된다.`,
        },
        {
          type: 'normal',
          desc: `현대오토에버는 영상·음성·미래예측 AI 기술 기반으로 모빌리티, 제조, 보안 등 여러 영역에서 스마트 서비스를 제공하고 있다. 또 차세대 AI 플랫폼을 사물인터넷(IoT), 빅데이터 플랫폼과 연계해 더 다양한 스마트 서비스를 제공하기 위한 통합 기술 체계를 구축할 계획이다. `,
        },
        {
          type: 'normal',
          desc: `써로마인드는 영상·음성·센서·로봇 관련 다양한 AI 솔루션과 범용 AI 플랫폼 구현을 위한 핵심 기술을 보유하고 있다. 창업 후 누적 사업비 30억 규모의 인공지능 분야 연구 개발(R&D)을 진행해왔다. 이런 경험을 다양한 도메인에서 활용할 수 있도록 표준화한 워크플로우 템플릿을 제공하는 차세대 AI 플랫폼을 개발해 인공지능 연구 개발의 효율성을 높이고 대중화를 꾀하고 있다.`,
        },
        {
          type: 'normal',
          desc: ` 양 사는 차세대 AI 플랫폼 외에도 각 사가 보유한 AI 기술을 결합해 스마트 모빌리티, 스마트 시티, 스마트 팩토리 분야별 인공지능 기술 적용을 위한 차별화된 서비스와 신규 비즈니스 사업도 함께 발굴할 계획이다.`,
        },
        {
          type: 'link',
          desc: `http://autotimes.hankyung.com/apps/news.sub_view?nkey=202002040921041`
        },
      ]
    },
    keywords: ['현대오토에버', 'AI플래폼', 'MOU체결'],
  },
  {
    id: 'Surromind-headquarters-move',
    url: '/surromindnews/article/Surromind-headquarters-move',
    type: 'NEWS',
    date: '2020.07.01',
    title: '써로마인드 확대 이전',
    image: news_07_01_2_main,
    imageS: news_07_01_2_list,
    contents: {
      title: `써로마인드, 사무실 확대 이전 "제2의 도약 준비"`,
      contentsList: [
        {
          type: 'normal',
          desc: `2020년 7월 1일 써로마인드는 창립 기념일에 맞춰 제2의 창업을 하는 마음으로 새로운 사무실로 이전하였습니다. 새로운 사무실은 지하철 2호선 서울대 입구 역에서 도보로 약 10분 거리에 위치하고 있습니다. 창업 공간이었던 서울대학교 컴퓨터 연구소는 제2사무실로, 서울대 컴퓨터 공학과 연구실과 협력의 공간으로 활용할 계획입니다.`,
        },
        {
          type: 'normal',
          desc: `인공지능을 적용하여 경영의 혁신을 도모하려는 회사들의 증가하는 개발 수요에 대응하고 직원들에게 보다 좋은 업무 환경을 제공하기 위해 넓고 쾌적한 사무실로 이전하게 되었습니다. 사무실 이전과 함께 신규 과제를 발굴하고 사업을 추진하기 위한 기획, 마케팅, 개발 분야의 인재를 모집중에 있습니다. 아직은 작은 스타트업이지만 좋은 근무 환경에서 미래를 꿈꾸며 역량있는 동료들과 함께 인공지능이 가져올 새로운 혁신을 만들어갈 분들의 많은 지원을 기대하고 있습니다.`,
        },
        {
          type: 'imageWithCaption',
          src: news_07_01_1
        },
        {
          type: 'imageCaption',
          desc: `[써로마인드 사무실 입구]`
        },
        {
          type: 'imageWithCaption',
          src: news_07_01_2
        },
        {
          type: 'imageCaption',
          desc: `[써로마인드 회사 전경]`
        },
        {
          type: 'imageWithCaption',
          src: news_07_01_3
        },
        {
          type: 'imageCaption',
          desc: `[써로마인드 회사 약도]`
        },
      ]
    },
    keywords: ['써로마인드', '확대이전'],
  },
  {
    id: '2017-robotcup-Number1',
    url: '/surromindnews/article/2017-robotcup-Number1',
    type: 'NEWS',
    date: '2017.08.01',
    title: '로보컵대회 우승',
    image: news_17_08_01_1_main,
    imageS: news_17_08_01_1_list,
    contents: {
      title: `서울대 장병탁 교수팀, 2017 국제 로보컵 대회 우승`,
      contentsList: [
        {
          type: 'subTitle',
          desc: `인공지능 로봇 AUPAIR, 소셜 홈로봇 부문 최고점 통과 … 종합 1위`,
        },
        {
          type: 'imageWithCaption',
          src: news_17_08_01_1
        },
        {
          type: 'imageCaption',
          desc: `2017 국제 로보컵 대회 우승한 서울대 장병탁 교수팀`
        },
        {
          type: 'normal',
          desc: `서울대 공대(학장 이건우)는 컴퓨터공학부 장병탁 교수 연구팀이 7월 30일 일본 나고야시 국제전시장에서 개최된 2017 국제 로보컵 대회(RoboCup)에서 우승했다고 1일 밝혔다.`,
        },
        {
          type: 'normal',
          desc: `연구팀의 인공지능 로봇 AUPAIR는 가정과 같은 일상 환경에서 서비스 임무를 수행하는 소셜 홈로봇 부문(RoboCup@Home SSPL 리그)의 8개 시나리오 과제를 모두 최고의 점수로 통과하여 종합 1위를 차지했다.`,
        },
        {
          type: 'normal',
          desc: `소셜 홈로봇 부문의 경기는 로봇이 가정 환경에서 사람과 사물, 환경을 인식하고 언어를 이해하여 자율적으로 임무를 수행하는 능력을 겨루는 것으로, 일반 로봇이 가정용 로봇으로 발전해가는 중요한 이정표를 세우는 국제대회다.`,
        },
        {
          type: 'normal',
          desc: `예를 들어, 칵테일 파티 서비스 시나리오의 경우 파티장으로 꾸며진 환경에서 로봇은 손님이 테이블에서 말이나 손짓으로 호출하면 다가가 음료를 주문 받은 후, 바에 가서 음료를 주문하고 이를 손님에게 배달하는 임무를 수행한다. 만약 손님이 주문한 음료가 없으면 다른 음료로 주문 받는 등 예외 상황도 다룰 수 있어야 한다.`,
        },
        {
          type: 'normal',
          desc: `특히 AUPAIR는 투어 가이드 시나리오에서 박람회장의 오픈 환경에서 일반 청중을 상대로 대화를 나누며 흥미로운 설명으로 안내하여 박수를 받았다. 이를 보고 한 국제 심판관은 “로봇이 과연 이번 대회에 최초 도입된 여러 고난도 임무를 수행할 수 있을 지 의심스러웠는데, 서울대 팀이 성공함으로써 인공지능 홈로봇 리그 로보컵 대회의 새로운 국제 표준을 설정했다”고 극찬했다.`,
        },
        {
          type: 'normal',
          desc: `AUPAIR를 만든 서울대 컴퓨터공학부 장병탁 교수(㈜써로마인드 로보틱스 대표)팀은 장 교수와 9명의 대학원생(이범진(팀 리더), 최진영(테크니컬 리더), 박경화, 이충연, 백다솜, 패트릭 이마스, 한철호, 한동식, 최성준)으로 구성됐다.`,
        },
        {
          type: 'normal',
          desc: `이들은 경기 1일, 2일차에 사람 찾기, 칵테일 파티, 가정 환경 심부름 등의 부문에서 모두 1위로 4강에 진출했다. 이어 2일, 3일차에는 레스토랑 주문, 투어 가이드, 고난도 심부름 등의 시나리오에서도 모두 1위를 하여 결승전에 진출했다. 마지막 결승 과제는 장기자랑으로, AUPAIR 로봇은 딥러닝 기반 시각대화 능력을 데모하여 호주 시드니 공대(University of Technology Sydney)를 큰 점수차로 누르고 우승했다.`,
        },
        {
          type: 'normal',
          desc: `한편 국제 로보컵 대회(RoboCup)는 1997년 로봇 축구 대회(RoboCup Soccer)로 시작하여 전세계를 순회하며 매년 개최된다. 이 대회는 올해 20년째를 맞이하는 권위 있는 자율이동로봇 국제대회로, 올해는 일본 나고야시에서 7월 27일부터 30일까지 4일 동안 개최됐다.`,
        },
        {
          type: 'normal',
          desc: `올해는 처음으로 홈로봇 부문에서 휴머노이드 로봇 페퍼(소프트뱅크 사 제작)를 플랫폼으로 채택한 인공지능 소셜 홈로봇 경기가 주요 경기로 추가됐고, 예선을 통과한 전세계 7개국의 7개 팀이 본선 참가권을 획득했다.`,
        },
        {
          type: 'imageWithCaption',
          src: news_17_08_01_2
        },
        {
          type: 'imageCaption',
          desc: `2017 국제 로보컵 대회 우승한 서울대 장병탁 교수팀`
        },
        {
          type: 'link',
          desc: `https://eng.snu.ac.kr/node/14758`
        },
      ]
    },
    keywords: ['국제로보컵', 'RoboCup', '인공지능로봇'],
  },
]

export default mainNews;