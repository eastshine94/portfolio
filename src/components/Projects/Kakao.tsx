import React from 'react';
import { ContentProps } from '.';

export default function Kakao({ readme, site }: ContentProps) {
  return (
    <div className="leading-loose over1024px:pl-20">
      <div className="my-2">
        <b>Socket.io</b>를 활용하여 카카오톡의 <b>실시간 채팅 기능</b>을
        구현하기 위한 프로젝트입니다. <b>실시간 양방향 통신</b>이 가능한 어떤
        기능을 만들어보고 싶었습니다. 가장 먼저 생각난 것은 채팅이었고, 그래서
        가장 일상적으로 사용하고 있는 카카오톡 채팅 기능을 구현해보자는 마음으로
        이 프로젝트를 진행하였습니다.
      </div>
      <div className="mb-4">
        {readme && (
          <a
            href={readme}
            target="_blank"
            rel="noreferrer"
            className="inline-block mr-3 py-1 px-2 bg-black text-white font-bold rounded-md"
          >
            README
          </a>
        )}
        {site && (
          <a
            href={site}
            target="_blank"
            rel="noreferrer"
            className="inline-block py-1 px-2 bg-pink-800 text-white font-bold rounded-md"
          >
            TEST
          </a>
        )}
      </div>

      <div>
        <div className="text-[18px] font-bold">주요 기술</div>
        <div className="pb-5">
          <div className="text-[16px] font-bold">FE</div>
          <ul className="list-inside list-disc">
            <li>
              <b>Socket.io</b>를 활용하여 채팅, 채팅 알림 등 실시간 양방향
              통신이 가능하도록 구현
            </li>
            <li>
              <b>Webpack</b>를 이용하여 babel, ts-loader 등으로 트랜스파일링
              하도록 직접 개발 환경을 구성하여, customize하게 개발 환경을 구축
            </li>
            <li>
              <b>redux, redux-saga</b>를 사용하여 상태 관리
            </li>
            <li>
              <b>styled-components</b>를 이용하여 UI 제작
            </li>
            <li>
              채팅 내역을 <b>Infinite-scroll + 커서 기반 페이징</b>을 이용하여
              구현함으로써, 초기 페이지 부하를 막고, 더 나은 사용자 경험 제공
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[16px] font-bold">BE</div>
          <ul className="list-inside list-disc">
            <li>
              회원가입 시 <b>bcrypt</b>를 사용하여 비밀번호 암호화
            </li>
            <li>
              로그인 시 <b>JWT</b>를 사용하여 인증
            </li>
            <li>
              <b>Sequelize ORM</b>을 통해 RDB를 조작
            </li>
            <li>
              {' '}
              <b> Restful API</b>로 제작
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
