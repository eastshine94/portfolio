import React from 'react';

export default function Intro() {
  const myInfoList = [
    {
      title: 'βοΈ Email',
      content: 'eastshine94@naver.com',
      link: 'mailto:eastshine94@naver.com'
    },
    {
      title: 'π Github',
      content: 'https://github.com/eastshine94',
      link: 'https://github.com/eastshine94'
    },
    {
      title: 'π Blog',
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
          βΏ Front-End Developer
        </div>
        <div className="tracking-wide leading-relaxed">
          <div className="pb-4 text-lg">
            μλνμΈμ.{' '}
            <span className="font-bold">νλ‘ νΈμλ κ°λ°μ κΉν¬λ</span>
            μλλ€.
          </div>
          <div className="pb-4">
            <span className="font-bold">React</span>λ₯Ό μ£Όλ‘ μ¬μ©νμ¬ κ°λ°νκ³ 
            μμ΅λλ€.
          </div>
          <div className="pb-4">
            <span className="font-bold">
              Firebase, AWS(S3, CloudFront), Bitbucket pipeline
            </span>
            μ μ¬μ©νμ¬ <span className="font-bold">μ§μμ  λ°°ν¬ νκ²½</span>μ
            κ΅¬μΆν΄λ³Έ κ²½νμ΄ μμ΅λλ€.
          </div>

          <div className="pb-4">
            μλ‘μ΄ <span className="font-bold">κΈ°μ μ νμ΅</span>νκ³ ,{' '}
            <span className="font-bold">μ¬μ©</span>νλ λ°{' '}
            <span className="font-bold">κ±°λΆκ°μ΄ μμ΅λλ€.</span>
            <p className="pt-2 pl-4">
              β¬ κ°μΈ νλ‘μ νΈλ₯Ό μ§ννλ©΄, ν κ°μ§μ© μλ‘μ΄ κΈ°μ μ μ¬μ©ν΄λ³΄λ €κ³ 
              ν©λλ€.
            </p>
          </div>

          <div>
            <span className="font-bold">μ¬μ©μ κ΄μ </span>μΌλ‘ κ°λ°ν©λλ€.
            <p className="pt-2 pl-4">
              β¬ λλ μ¬μ©μμ΄κ³ , λ΄κ° λΆνΈνλ©΄ μ€μ¬μ©μλ λΆνΈνλ€λ μκ°μΌλ‘
              κ°λ°μ ν©λλ€.
              <br />
              κ·Έλμ κ°λ° μ€μ λΆνΈν μ , κ°μ ν΄μΌν  μ μ΄ λ³΄μΈλ€λ©΄ κΈ°νμμκ² μ 
              μκ²¬μ κ°κ° μμ΄ μκΈ°νκ³ , μ‘°μ¨ν©λλ€.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
