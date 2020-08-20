import ImgNews1 from '../images/news1.png';
import ImgNews2 from '../images/news2.png';
import ImgNews3 from '../images/news3.png';
import ImgNews4 from '../images/news4.png';

import ImgNewsSum1 from '../images/new1_sum.png';
import ImgNewsSum2 from '../images/new2_sum.png';
import ImgNewsSum3 from '../images/new3_sum.png';
import ImgNewsSum4 from '../images/new4_sum.png';


const mainNews = [
  {
    id: 'AI-supply-selected',
    url: '/surromindnews/article/AI-supply-selected',
    type: 'NEWS',
    date: '2020.08.03',
    title: 'AI 공급업체 선정',
    image: ImgNews1,
    imageS: ImgNewsSum1,
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
    id: '2020-CVPR-Number1',
    url: '/surromindnews/article/2020-CVPR-Number1',
    type: 'NEWS',
    date: '2020.08.03',
    title: 'CVPR 대회 1위',
    image: ImgNews2,
    imageS: ImgNewsSum2,
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
    id: '2017-robotcup-Number1',
    url: '/surromindnews/article/2017-robotcup-Number1',
    type: 'NEWS',
    date: '2017.08.01',
    title: '로보컵대회 우승',
    image: ImgNews3,
    imageS: ImgNewsSum3,
    contents: {
      title: `서울대 장병탁 교수팀, 2017 국제 로보컵 대회 우승`,
      contentsList: [
        {
          type: 'subTitle',
          desc: `인공지능 로봇 AUPAIR, 소셜 홈로봇 부문 최고점 통과 … 종합 1위`,
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
          type: 'link',
          desc: `https://eng.snu.ac.kr/node/14758`
        },
      ]
    },
    keywords: ['국제로보컵', 'RoboCup', '인공지능로봇'],
  },
  {
    id: 'Surromind-AutoEver-MOU',
    url: '/surromindnews/article/Surromind-AutoEver-MOU',
    type: 'NEWS',
    date: '2020.07.10',
    title: '현대 오토에버 MOU',
    image: ImgNews4,
    imageS: ImgNewsSum4,
    contents: {
      title: `현대오토에버, 써로마인드와 AI 개발 협력 MOU 체결`,
      contentsList: [
        {
          type: 'subTitle',
          desc: `인공지능 로봇 AUPAIR, 소셜 홈로봇 부문 최고점 통과 … 종합 1위`,
        },
        {
          type: 'normal',
          desc: `현대오토에버가 써로마인드와 인공지능(AI) 기술 고도화 및 차세대 AI 플랫폼 개발 협력을 위한 양해각서(MOU)를 체결했다고 10일 밝혔다.`,
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
]

export default mainNews;