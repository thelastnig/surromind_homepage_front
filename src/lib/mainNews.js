import ImgNews1 from '../images/news1.png';
import ImgNews2 from '../images/news2.png';
import ImgNews3 from '../images/news3.png';
import ImgNews4 from '../images/news4.png';


const mainNews = [
  {
    id: 1,
    type: 'NEWS',
    date: '2020.08.03',
    title: 'AI 공급업체 선정',
    image: ImgNews1,
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
    keywords: ['keyword', 'keyword', 'keyword'],
  },
  {
    id: 2,
    type: 'NEWS',
    date: '2020.08.03',
    title: 'CVPR 대회 1위',
    image: ImgNews2,
  },
  {
    id: 3,
    type: 'NEWS',
    date: '2020.08.03',
    title: '로보컵대회 우승',
    image: ImgNews3,
  },
  {
    id: 4,
    type: 'NEWS',
    date: '2020.08.03',
    title: '현대 오토에버 MOU',
    image: ImgNews4,
  },
]

export default mainNews;