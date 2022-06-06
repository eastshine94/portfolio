import React from 'react';
import dayjs, { ConfigType } from 'dayjs';

interface CareerItemProps {
  company: string;
  job: string;
  period: ConfigType[];
  link: string;
  logo: string;
  Content: () => JSX.Element;
}

export default function CareerItem({
  company,
  job,
  period,
  link,
  logo,
  Content
}: CareerItemProps) {
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
    <div
      className="relative max-w-[1200px] p-6 mx-auto mt-16 
         box-content rounded-xl bg-white over480px:p-12
         over1024px:flex
         "
    >
      <div
        className="mb-3 pb-3 border-b-2 border-slate-200 over640px:flex 
                  over1024px:block over1024px:border-b-0 over1024px:border-r over1024px:pr-5 over1024px:mr-5"
      >
        <div className="m-auto w-[150px] over640px:pr-6 over640px:flex-grow-0 over1024px:w-[220px]">
          <a href={link} target="_blank" rel="noreferrer">
            <img className="w-full h-full" src={logo} alt="logo" />
          </a>
        </div>

        <div className="over640px:flex-grow-[2]">
          <a href={link} target="_blank" rel="noreferrer">
            <div className="mt-8 text-[20px] font-bold over640px:text-[24px] over1024px:text-[28px]">
              {company}
            </div>
          </a>
          <div className="text-stone-700 over640px:text-[20px]">
            {dayjs(period[0]).format('YYYY.MM')} ~{' '}
            {period[1] ? dayjs(period[1]).format('YYYY.MM') : '현재'}
          </div>
          <div className="my-2">
            {!period[1] && (
              <span className="px-2 py-1 mr-2 text-sm bg-blue-800 text-white rounded-xl">
                재직 중
              </span>
            )}
            <span className="px-2 py-1 text-sm bg-emerald-600 text-white rounded-xl">
              {getPeriod(period[0], period[1])}
            </span>
          </div>
          <div className="text-stone-700 italic">{job}</div>
        </div>
      </div>
      <Content />
    </div>
  );
}
