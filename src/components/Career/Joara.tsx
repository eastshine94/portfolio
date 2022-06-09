import React from 'react';

export default function Joara() {
  return (
    <div>
      <ul className="leading-10 list-inside list-disc">
        <li>
          <strong>100만 명 이상의 회원</strong>을 보유하고 있는 대한민국{' '}
          <strong>1세대 웹소설 플랫폼</strong>
        </li>
        <li>
          <strong>React</strong>를 기반으로 한 웹사이트의{' '}
          <strong>프론트엔드 개발 및 운영</strong> 업무를 담당
        </li>
        <li>
          <strong>Jira</strong>를 사용하여 프로젝트 관리
        </li>

        <li>
          <a
            href="https://www.joara.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-900 underline"
          >
            웹 사이트
          </a>
          에 <strong>PC형 디자인</strong>을 추가하여, <strong>반응형 웹</strong>
          으로 동작하도록 페이지 제작
        </li>
        <ul>
          <li className="pl-[21px]">
            ⚬ <strong>React Hooks, Context API</strong>를 사용하여 components
            리팩토링
          </li>
          <li className="pl-[21px]">
            ⚬{' '}
            <a
              href="https://writer.joara.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-900 underline"
            >
              작품 관리 사이트
            </a>
            는 <strong>Redux</strong>를 사용하여 상태 관리
          </li>
          <li className="pl-[21px]">
            ⚬ <strong>react-responsive</strong>를 사용하여 미디어 사이즈를
            변화를 감지하고, 사이즈 별 페이지 제공
          </li>
          <li className="pl-[21px]">
            ⚬ <strong>offset 기반 버튼형 페이지네이션</strong> 기능 구현
          </li>
        </ul>
        <li>
          최근 검색어 추가, 상세 검색 기능 개선 등을 통해{' '}
          <strong>검색 페이지 개선</strong>
        </li>
        <li>
          조아라 내에서 제작한 콘텐츠를 등록 할 수 있는{' '}
          <strong>전용 게시판 제작</strong>
        </li>
        <li>
          조아라에서 계약하고 있는 작품을 만화 형식으로 소개하는{' '}
          <strong>비주얼 스토리텔링 콘텐츠</strong> 추가
        </li>
        <ul>
          <li className="pl-[21px]">
            ⚬ <strong>react-slick</strong>를 사용하여 <strong>Carousel</strong>{' '}
            제작
          </li>
          <li className="pl-[21px]">
            ⚬ 스토리를 <strong>Facebook, Twitter, KakaoTalk</strong>으로{' '}
            <strong>공유</strong> 기능 추가
          </li>
        </ul>
        <li>
          <strong>회차 구매 로직</strong> 개선
        </li>
        <li>
          SEO 이슈 해결을 위해 <strong>Next.js</strong>로 전환 시도
        </li>
        <ul>
          <li className="pl-[21px]">
            ⚬ 페이지 별 <strong>meta tag</strong> 설정
          </li>
          <li className="pl-[21px]">
            ⚬ 페이지 rendering은 <strong>CSR(Client Side Rendering)</strong>로
            되도록 진행
          </li>
          <li className="pl-[21px]">
            ⚬ <strong>AWS Amplify, Serverless, EC2 nginx</strong> 등을 통한{' '}
            <strong>배포 고려</strong>
          </li>
          <li className="pl-[21px]">
            ⚬ 모든 페이지를 pre-Rendering되도록 요구 조건이 변경
            <p className="pl-[16px]">
              ➢ 그럴 경우, 많은 시간이 소요되고, 서비스 상에 이슈가 발생할 수
              있어서 <strong>1달 반 만에 프로젝트 종료</strong>
            </p>
          </li>
        </ul>
        <li>
          <a
            href="https://webtoon.joara.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-900 underline"
          >
            웹툰 사이트
          </a>{' '}
          개발 환경 개선
        </li>
        <ul>
          <li className="pl-[21px]">
            ⚬ <strong>Firebase Hosting, Bitbucket Pipeline</strong>을 사용하여{' '}
            <strong>CD</strong> 구축
          </li>
          <li className="pl-[21px]">
            ⚬ <strong>SEO 문제 해결</strong>을 위해,{' '}
            <strong>Firebase Function + express + ejs</strong>을 사용하여 bot을
            위한 <strong>크롤링 페이지</strong> 제작
          </li>
          <li className="pl-[21px]">
            ⚬ <strong>react-query</strong>를 사용하여 Server State를
            관리함으로써, 기존 react hooks를 사용한 방식보다{' '}
            <strong>코드 복잡도를 줄임</strong>
          </li>
        </ul>
      </ul>
    </div>
  );
}
