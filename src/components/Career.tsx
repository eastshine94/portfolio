import React from 'react';
import dayjs, { ConfigType } from 'dayjs';
import Title from './Title';

export default function Career() {
  const getPeriod = (
    startDate: ConfigType,
    endDate?: ConfigType | undefined
  ) => {
    const diffDate = dayjs(endDate).diff(dayjs(startDate), 'month');
    const year = Math.floor(diffDate / 12);
    const month = diffDate - year * 12;
    return `${year}년 ${month}개월`;
  };

  return (
    <section className="p-5 bg-gradient-to-t to-green-800 from-emerald-400 over640px:p-20">
      <Title title="Career" />
      <div
        className="relative max-w-[1200px] p-6 mx-auto mt-16 
         box-content rounded-xl bg-white over480Px:p-12
         over1024px:flex
         "
      >
        <div
          className="mb-3 pb-3 border-b-2 border-slate-200 over640px:flex 
                  over1024px:block over1024px:border-b-0 over1024px:border-r over1024px:pr-5 over1024px:mr-5"
        >
          <div className="m-auto w-[150px] over640px:pr-6 over640px:flex-grow-0 over1024px:w-[220px]">
            <a href="https://www.joara.com/" target="_blank" rel="noreferrer">
              <img
                className="w-full h-full"
                src="/assets/joara.png"
                alt="joara"
              />
            </a>
          </div>

          <div className="over640px:flex-grow-[2]">
            <a href="https://www.joara.com/" target="_blank" rel="noreferrer">
              <div className="mt-8 text-[20px] font-bold over640px:text-[24px] over1024px:text-[28px]">
                (주) 조아라
              </div>
            </a>
            <div className="text-stone-700 over640px:text-[20px]">
              {' '}
              2020.12 ~ 현재
            </div>
            <div className="my-2">
              <span className="px-2 py-1 mr-2 text-sm bg-blue-800 text-white rounded-xl">
                재직 중
              </span>
              <span className="px-2 py-1 text-sm bg-emerald-600 text-white rounded-xl">
                {getPeriod('20201216')}
              </span>
            </div>
            <div className="text-stone-700 italic">
              서비스개발팀 프론트엔드 개발자
            </div>
          </div>
        </div>

        <div>
          <ul className="leading-10 list-inside list-disc">
            <li>
              <b>100만 명 이상의 회원</b>을 보유하고 있는 대한민국{' '}
              <b>1세대 웹소설 플랫폼</b>
            </li>
            <li>
              <b>React</b>를 기반으로 한 웹사이트의{' '}
              <b>프론트엔드 개발 및 운영</b> 업무를 담당
            </li>
            <li>
              <b>애자일 방법론</b>에 따라 팀원들과 프로젝트 진행
            </li>
            <ul>
              <li className="pl-[21px]">
                ⚬ <b>Jira</b>를 사용하여 프로젝트 관리
              </li>
            </ul>
            <li>
              웹 사이트({' '}
              <a
                href="https://www.joara.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-900 underline"
              >
                https://www.joara.com/
              </a>{' '}
              )에 <b>PC형 디자인</b>을 추가하여, <b>반응형 웹</b>으로 동작하도록
              페이지 제작
            </li>
            <ul>
              <li className="pl-[21px]">
                ⚬ <b>React Hooks, Context API</b>를 사용하여 components 리팩토링
              </li>
              <li className="pl-[21px]">
                ⚬ 작품 관리 사이트({' '}
                <a
                  href="https://writer.joara.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-900 underline"
                >
                  https://writer.joara.com/
                </a>{' '}
                )는 <b>Redux</b>를 사용하여 상태 관리
              </li>
              <li className="pl-[21px]">
                ⚬ <b>react-responsive</b>를 사용하여 미디어 사이즈를 변화를
                감지하고, 사이즈 별 페이지 제공
              </li>
              <li className="pl-[21px]">
                ⚬ <b>offset 기반 버튼형 페이지네이션</b> 기능 구현
              </li>
            </ul>
            <li>
              최근 검색어 추가, 상세 검색 기능 개선 등을 통해{' '}
              <b>검색 페이지 개선</b>
            </li>
            <li>
              조아라 내에서 제작한 콘텐츠를 등록 할 수 있는{' '}
              <b>전용 게시판 제작</b>
            </li>
            <li>
              조아라에서 계약하고 있는 작품을 만화 형식으로 소개하는{' '}
              <b>비주얼 스토리텔링 콘텐츠</b> 추가
            </li>
            <ul>
              <li className="pl-[21px]">
                ⚬ <b>react-slick</b>를 사용하여 <b>Carousel</b> 제작
              </li>
              <li className="pl-[21px]">
                ⚬ 스토리를 <b>Facebook, Twitter, KakaoTalk</b>으로 <b>공유</b>{' '}
                기능 추가
              </li>
            </ul>
            <li>
              <b>회차 구매 로직</b> 개선
            </li>
            <li>
              SEO 이슈 해결을 위해 <b>Next.js</b>로 전환 시도
            </li>
            <ul>
              <li className="pl-[21px]">
                ⚬ 페이지 별 <b>meta tag</b> 설정
              </li>
              <li className="pl-[21px]">
                ⚬ 페이지 rendering은 <b>CSR(Client Side Rendering)</b>로 되도록
                진행
              </li>
              <li className="pl-[21px]">
                ⚬ <b>AWS Amplify, Serverless, EC2 nginx</b> 등을 통한{' '}
                <b>배포 고려</b>
              </li>
              <li className="pl-[21px]">
                ⚬ 모든 페이지를 pre-Rendering되도록 요구 조건이 변경
                <p className="pl-[16px]">
                  ➢ 그럴 경우, 많은 시간이 소요되고, 서비스 상에 이슈가 발생할
                  수 있어서 <b>1달 반 만에 프로젝트 종료</b>
                </p>
              </li>
            </ul>
            <li>웹툰 페이지 개발 환경 개선</li>
            <ul>
              <li className="pl-[21px]">
                ⚬ <b>Firebase Hosting, Bitbucket Pipeline</b>을 사용하여{' '}
                <b>CD</b> 구축
              </li>
              <li className="pl-[21px]">
                ⚬ <b>SEO 문제 해결</b>을 위해,{' '}
                <b>Firebase Function + express + ejs</b>을 사용하여 bot을 위한{' '}
                <b>크롤링 페이지</b> 제작
              </li>
              <li className="pl-[21px]">
                ⚬ <b>react-query</b>를 사용하여 Server State를 관리함으로써,
                기존 react hooks를 사용한 방식보다 <b>코드 복잡도를 줄임</b>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
}
