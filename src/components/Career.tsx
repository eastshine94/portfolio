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
          <ul>
            <li>
              조아라는 <span className="font-bold">100만 명 이상의 회원</span>을
              보유하고 있는 대한민국{' '}
              <span className="font-bold">1세대 웹소설 플랫폼</span>
              입니다.
            </li>
            <li>
              React를 기반으로 한 웹사이트의 프론트엔드 개발 및 운영 업무를
              담당하였습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
