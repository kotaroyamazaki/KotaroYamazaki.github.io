import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kotaro Yamazaki',
  lang: 'jp',
  description: 'Kotaro Yamazaki\'s portfilio page',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kotaro Yamazaki',
  subtitle: 'Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphs: [
    '2014年 4月 筑波大学 情報科学類入学',
    '2018年 3月 筑波大学 情報科学類卒業 ',
    '2018年 4月 筑波大学大学院 システム情報工学研究科 コンピュータサイエンス専攻 入学 (北川・天笠データ工学研究室（KDE）指導教員: 塩川 浩昭 助教) ',
    '2020年 3月 筑波大学大学院 システム情報工学研究科 コンピュータサイエンス専攻 卒業 （研究科長表彰 受賞）',
    '2020年 4月 株式会社ZOZOテクノロジーズ 入社',
    '2021年 5月 株式会社V Chuu 入社',
  ],
};

// PROJECTS DATA
export const researchData = [
  {
    id: nanoid(),
    title: '学術論文誌（Journal papers）',
    data: [
      {
        info: 'Kotaro Yamazaki, Shohei Matsugu, Hiroaki Shiokawa, Hiroyuki Kitagawa,"Fast and Parallel RankClus Algorithm based on Dynamic Rank Score Tracking," Journal of Information Processing , Vol.28, July 2020. (to appear)',
        url: 'https://www.jstage.jst.go.jp/article/ipsjjip/28/0/28_453/_article/-char/ja/',
      },
      {
        info: 'Kotaro Yamazaki, Tomoki Sato, Hiroaki Shiokawa, Hiroyuki Kitagawa, "Fast and Parallel Ranking-based Clustering for Heterogeneous Graphs", Journal of Data Intelligence, Vol. 1, No. 2, pp.137-158, June 2019.',
        url: 'https://kotaroyamazaki.github.io/#:~:text=158%2C%20June%202019.%5B-,journal,-%5D',
      },
    ],
  },
  {
    id: nanoid(),
    title: '国際会議・研究会等（International conferences/others）',
    data: [
      {
        info: 'Kotaro Yamazaki, Shohei Matsugu, Hiroaki Shiokawa, Hiroyuki Kitagawa,"Fast RankClus Algorithm via Dynamic Rank Score Tracking on Bi-type Information Networks," In Proceedings of the 21st International Conference on Information Integration and Web-based Applications and Services (iiWAS2019), pp.110-117, Munich, Germany, December 2019.(Full Paper)(Acceprance ratio 48%)',
        url: 'https://dl.acm.org/doi/10.1145/3366030.3366051',
        slide: 'https://www.slideshare.net/KotaroYamazaki2/iiwas19-yamazaki-slide',
      },
      {
        info: 'Kotaro Yamazaki, Tomoki Sato, Hiroaki Shiokawa, Hiroyuki Kitagawa, "Fast Algorithm for Integrating Clustering with Ranking on Heterogeneous Graphs", In Proceedings of the 20th International Conference on Information Integration and Web-based Applications and Services (iiWAS2018), pp.24-32, Yogyakarta, Indonesia, November 19-21, 2018.(Full paper)(Acceprance ratio 30.6%). ',
        url: 'https://dl.acm.org/citation.cfm?doid=3282373.3282376',
      },
    ],
  },
  {
    id: nanoid(),
    title: '国内会議・研究会等（Domestic conferences/others）',
    data: [
      {
        info: 'Kotaro Yamazaki, Shohei Matsugu, Hiroaki Shiokawa, Hiroyuki Kitagawa,"Fast and Parallel RankClus Algorithm based on Dynamic Rank Score Tracking", 第12回データ工学と情報マネジメントに関するフォーラム (DEIM2020), March 2020.',
        url: 'https://db-event.jpn.org/deim2020/post/proceedings/papers/D5-4.pdf',
      },
      {
        info: '山崎 耕太郎, 塩川 浩昭, 北川 博之,"大規模グラフに対するノードの枝刈りを用いたRankClus の高速化" 第11回データ工学と情報マネジメントに関するフォーラム (DEIM2019), March 2019.',
        url: 'https://db-event.jpn.org/deim2019/post/papers/84.pdf',
      },
      {
        info: '山崎 耕太郎, 佐藤 朋紀, 塩川 浩昭, 北川 博之, "大規模グラフに対する逐次的なノード枝刈りを用いたRankClusの高速化", 情報処理学会第80回全国大会 (IPSJ全国大会 2018), March 2018.',
        url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=repository_uri&item_id=187752&file_id=1&file_no=1',
      },
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sentoryoku53m@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/1414039742055592',
    },
    {
      id: nanoid(),
      name: 'slideshare',
      url: 'https://www.slideshare.net/KotaroYamazaki2',
    },
    {
      id: nanoid(),
      name: 'google',
      url: 'https://scholar.google.co.jp/citations?user=tdJwdbIAAAAJ&hl=ja',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kotaro-yamazaki-60a491169/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KotaroYamazaki',
    },
  ],
};
