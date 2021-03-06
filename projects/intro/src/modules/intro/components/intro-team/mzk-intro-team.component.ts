import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '../../../../models/lang';
import { BaseComponent } from '../../../../models/base.component';

export interface MuzikaMember {
  image: string;
  i18nName: {
    [key: string]: string;
  };
  i18nPosition: {
    [key: string]: string;
  };
  github?: string;
  linkedin?: string;
  sentences?: {
    [key: string]: string[];
  };
}

@Component({
  selector: 'intro-team',
  templateUrl: './mzk-intro-team.component.html',
  styleUrls: [
    '../../scss/helper.scss',
    './mzk-intro-team.component.scss'
  ]
})
export class MzkIntroTeamComponent extends BaseComponent {
  currentLang: string = Lang.ENG;
  leadBlockchain: MuzikaMember[] = [
    {
      image: '강승원.jpg',
      i18nName: {
        [Lang.ENG]: 'Seungwon Kang',
        [Lang.KOR]: '강승원',
        [Lang.CHN]: 'Seungwon Kang'
      },
      i18nPosition: {
        [Lang.ENG]: 'Blockchain Core Engineer',
        [Lang.KOR]: '블록체인 코어 엔지니어',
        [Lang.CHN]: '区块链核心开发工程师'
      },
      linkedin: '',
      github: 'https://github.com/seungwon-kang',
      sentences: {
        [Lang.ENG]: [
          'Computer Science, Hanyang University',
          'ROK Military Network and IT Security Specialist'
        ],
        [Lang.KOR]: [
          '컴퓨터공학과, 한양대학교',
          '대한민국 육군 네트워크/정보보안 전문 부사관'
        ],
        [Lang.CHN]: [
          '韩国 汉阳大学 计算机工学',
          '韩国军事网络与IT安全专家'
        ]
      }
    },
    {
      image: '정채홍.jpg',
      i18nName: {
        [Lang.ENG]: 'Chaehong Jeong',
        [Lang.KOR]: '정채홍',
        [Lang.CHN]: 'Chaehong Jeong'
      },
      i18nPosition: {
        [Lang.ENG]: 'Blockchain Platform Engineer',
        [Lang.KOR]: '블록체인 플랫폼 엔지니어',
        [Lang.CHN]: '区块链平台开发工程师'
      },
      github: 'https://github.com/brcps12',
      sentences: {
        [Lang.ENG]: [
          'Computer Science, Hanyang University',
          'Multiple Awards in Algorithm PS Competitions'
        ],
        [Lang.KOR]: [
          '컴퓨터공학과, 한양대학교',
          '다수의 알고리즘 PS 대회 수상경력 보유'
        ],
        [Lang.CHN]: [
          '韩国 汉阳大学 计算机工学',
          '多次在算法编程竞赛中夺冠'
        ]
      }
    },
    {
      image: '이정우.jpg',
      i18nName: {
        [Lang.ENG]: 'Jungwoo Lee',
        [Lang.KOR]: '이정우',
        [Lang.CHN]: 'Jungwoo Lee'
      },
      i18nPosition: {
        [Lang.ENG]: 'Head of Business Development',
        [Lang.KOR]: 'Head of Business Development',
        [Lang.CHN]: '商业发展主管'
      },
      linkedin: 'https://www.linkedin.com/in/jungwoo-lee-644506169/',
      sentences: {
        [Lang.ENG]: [
          'Certified Public Accountant, Korea (KICPA)',
          'Business Administration, Seoul National University'
        ],
        [Lang.KOR]: [
          '경영학과, 서울대학교',
          '한국공인회계사 합격 (KICPA)'
        ],
        [Lang.CHN]: [
          '韩国注册会计师',
          '韩国 首尔国立大学 工商管理'
        ]
      }
    },
    {
      image: '윌리엄.jpg',
      i18nName: {
        [Lang.ENG]: 'William Wu',
        [Lang.KOR]: '윌리엄',
        [Lang.CHN]: 'William Wu'
      },
      i18nPosition: {
        [Lang.ENG]: 'Head of Global PR',
        [Lang.KOR]: '글로벌 PR 총괄',
        [Lang.CHN]: '国际PR主管'
      },
      linkedin: 'https://www.linkedin.com/in/william-wu-66377398/',
      sentences: {
        [Lang.ENG]: [
          'Professional in China & Cross-cultural Business Operations'
        ],
        [Lang.KOR]: [
          '중국 및 아시아권 국가간 비즈니스 전문가'
        ],
        [Lang.CHN]: [
          '跨国与跨文化商业运营业内精英'
        ]
      }
    },
    {
      image: '이민경.jpg',
      i18nName: {
        [Lang.ENG]: 'Minkyung Lee',
        [Lang.KOR]: '이민경',
        [Lang.CHN]: 'Minkyung Lee'
      },
      i18nPosition: {
        [Lang.ENG]: 'Brand & UX Designer',
        [Lang.KOR]: '브랜드 & UX 디자이너',
        [Lang.CHN]: '品牌与用户体验设计师'
      },
      linkedin: 'https://www.linkedin.com/in/minkyung-lee-609506169/',
      sentences: {
        [Lang.ENG]: [
          'Visual Communication, AAA School of Advertising'
        ],
        [Lang.KOR]: [
          '그래픽 디자인 전공, AAA School of Advertising'
        ],
        [Lang.CHN]: [
          'AAA School of Advertising 视觉传达设计'
        ]
      }
    },
  ];

  members: MuzikaMember[] = [
    {
      image: '김지현.jpg',
      i18nName: {
        [Lang.ENG]: 'Jihyun Kim',
        [Lang.KOR]: '김지현',
        [Lang.CHN]: 'Jihyun Kim'
      },
      i18nPosition: {
        [Lang.ENG]: 'DevOps/Server Engineer',
        [Lang.KOR]: 'Devops 엔지니어',
        [Lang.CHN]: 'DevOps / 服务器运营工程师'
      },
      github: 'https://github.com/simnalamburt'
    },
    {
      image: '황현주.jpg',
      i18nName: {
        [Lang.ENG]: 'Hyunju Hwang',
        [Lang.KOR]: '황현주',
        [Lang.CHN]: 'Hyunju Hwang'
      },
      i18nPosition: {
        [Lang.ENG]: 'Frontend Developer',
        [Lang.KOR]: '프론트엔드 개발자',
        [Lang.CHN]: '前端开发工程师'
      },
      github: 'https://github.com/hyunjuhw'
    },
    {
      image: '장경희.jpg',
      i18nName: {
        [Lang.ENG]: 'Kyunghee Chang',
        [Lang.KOR]: '장경희',
        [Lang.CHN]: 'Kyunghee Chang'
      },
      i18nPosition: {
        [Lang.ENG]: 'Frontend Developer',
        [Lang.KOR]: '프론트엔드 개발자',
        [Lang.CHN]: '前端开发工程师'
      },
      github: 'https://github.com/heeheehi'
    },
    {
      image: '안재찬.jpg',
      i18nName: {
        [Lang.ENG]: 'Jaechan Ahn',
        [Lang.KOR]: '안재찬',
        [Lang.CHN]: 'Jaechan Ahn'
      },
      i18nPosition: {
        [Lang.ENG]: 'AI/ML Researcher & Server Developer',
        [Lang.KOR]: 'AI/머신러닝 연구 및 서버 개발',
        [Lang.CHN]: 'AI/ML 研究员 &服务器开发工程师'
      },
      github: 'https://github.com/AhnJaeChan'
    },
    {
      image: '나수경2.jpg',
      i18nName: {
        [Lang.ENG]: 'Sukyung Na',
        [Lang.KOR]: '나수경',
        [Lang.CHN]: 'Sukyung Na'
      },
      i18nPosition: {
        [Lang.ENG]: 'Head of Global Business',
        [Lang.KOR]: '글로벌 비즈니스 총괄',
        [Lang.CHN]: '国际商务主管'
      },
      linkedin: 'https://www.linkedin.com/in/sukyung-na-097750164'
    },
    {
      image: '정예지.jpg',
      i18nName: {
        [Lang.ENG]: 'Yeji Chung',
        [Lang.KOR]: '정예지',
        [Lang.CHN]: 'Yeji Chung'
      },
      i18nPosition: {
        [Lang.ENG]: 'Head of Music Management',
        [Lang.KOR]: '커뮤니티 매니지먼트 및 음악 사업 담당',
        [Lang.CHN]: '音乐项目管理主管'
      },
      linkedin: 'https://www.linkedin.com/in/%EC%98%88%EC%A7%80-%EC%A0%95-698507169/'
    },
    {
      image: '조성헌.jpg',
      i18nName: {
        [Lang.ENG]: 'Seongheon Cho',
        [Lang.KOR]: '조성헌',
        [Lang.CHN]: 'Seongheon Cho'
      },
      i18nPosition: {
        [Lang.ENG]: 'Head of Compliance',
        [Lang.KOR]: '법률 회계 담당',
        [Lang.CHN]: '合规管理主管'
      },
      linkedin: 'https://www.linkedin.com/in/성헌-조-b84505169'
    }
  ];

  constructor(private translateService: TranslateService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this._sub.push(
      this.translateService.onLangChange.subscribe(lang => {
        this.currentLang = this.translateService.currentLang || Lang.ENG;
      })
    );
  }
}
