import React from 'react';

export default function Intro() {
  const myInfoList = [
    {
      title: '✉️ Email',
      content: 'eastshine94@naver.com',
      link: 'mailto:eastshine94@naver.com'
    },
    {
      title: '📂 Github',
      content: 'https://github.com/eastshine94',
      link: 'https://github.com/eastshine94'
    },
    {
      title: '🖋 Blog',
      content: 'https://velog.io/@eastshine94',
      link: 'https://velog.io/@eastshine94'
    }
  ];
  return (
    <div className="mb-8">
      <div className="mb-8 over800px:pl-[140px] over1024px:p-0">
        <table className="border-collapse border border-slate-400">
          <tbody>
            {myInfoList.map((info, idx) => (
              <tr key={idx}>
                <td className="min-w-[110px] py-2 px-2 border border-slate-400 bg-amber-200 font-bold over480px:px-4">
                  {info.title}
                </td>

                <td className="p-2 break-all border border-slate-400  text-sky-900 text-sm underline over480px:text-base">
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noreferrer">
                      {info.content}
                    </a>
                  ) : (
                    info.content
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="mb-5 text-[20px] font-bold over480px:text-[32px]">
          ✿ Front-End Developer
        </div>
        <div className="tracking-wide leading-relaxed">
          <div className="pb-4 text-lg">
            안녕하세요.{' '}
            <span className="font-bold">프론트엔드 개발자 김희동</span>
            입니다.
          </div>
          <div className="pb-4">
            <span className="font-bold">React</span>를 주로 사용하여 개발하고
            있습니다.
          </div>
          <div className="pb-4">
            <span className="font-bold">
              Firebase, AWS(S3, CloudFront), Bitbucket pipeline
            </span>
            을 사용하여 <span className="font-bold">지속적 배포 환경</span>을
            구축해본 경험이 있습니다.
          </div>

          <div className="pb-4">
            새로운 <span className="font-bold">기술을 학습</span>하고,{' '}
            <span className="font-bold">사용</span>하는 데{' '}
            <span className="font-bold">거부감이 없습니다.</span>
            <p className="pt-2 pl-4">
              ⚬ 개인 프로젝트를 진행하면, 한 가지씩 새로운 기술을 사용해보려고
              합니다.
            </p>
          </div>

          <div>
            <span className="font-bold">사용자 관점</span>으로 개발합니다.
            <p className="pt-2 pl-4">
              ⚬ 나도 사용자이고, 내가 불편하면 실사용자도 불편하다는 생각으로
              개발을 합니다.
              <br />
              그래서 개발 중에 불편한 점, 개선해야할 점이 보인다면 기획자에게 제
              의견을 가감 없이 얘기하고, 조율합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
