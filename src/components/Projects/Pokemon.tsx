import React from 'react';
import { ContentProps } from '.';

export default function Pokemon({ readme, site }: ContentProps) {
  return (
    <div className="leading-loose over1024px:pl-20">
      <div className="my-2">
        <strong>Open API</strong>를 활용하여 프로젝트를 진행해보려 했습니다.
        그러다 발견한 것이{' '}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noreferrer"
          className="text-sky-900 underline"
        >
          pokeapi
        </a>
        라는 포켓몬에 대한 정보를 내려주는 Open API였습니다. 하지만 해당 API에서
        내려주는 데이터는 사용하기 애매한 것들이 있어서{' '}
        <strong>필요한 데이터만 추출하여 DB에 저장</strong>하고 사용하였습니다.
        <br /> 해당 프로젝트를 통해 처음으로 동적 웹 페이지를 만들어보았고, 그
        과정에서 많은 것을 배울 수 있었습니다. <strong>Typescript</strong>를
        사용할 때, 어떻게 타입을 정의해야 하는 지부터,{' '}
        <strong>React Lifecycle, state, props</strong>에 대한 이해,{' '}
        <strong>MobX</strong> 통한 상태 관리 방법 등을 배울 수 있었습니다. 또한,
        직접 Restful API를 구현해봄으로써 API가 어떻게 구성되는지 이해할 수
        있었고, 해당 API를 프론트엔드에서 어떻게 호출하며, 이를 활용하여
        서비스는 어떻게 만들 수 있는지 알 수 있었습니다.
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
            DEMO
          </a>
        )}
      </div>
      <div className="mb-5">
        <div className="text-[18px] font-bold">주요 기술</div>
        <div className="pb-5">
          <div className="text-[16px] font-bold">FE</div>
          <ul className="list-inside list-disc">
            <li>
              <strong>React V16, Typescript</strong>를 사용하여 작업
            </li>
            <li>
              <strong>MobX</strong>를 사용하여 상태 관리
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[16px] font-bold">BE</div>
          <ul className="list-inside list-disc">
            <li>
              <strong>express</strong>를 사용하여 구축
            </li>
            <li>
              open API인 pokeapi에서 데이터를 추출하여 <strong>RDB 구축</strong>
            </li>
            <li>
              <strong>sequelize</strong>를 사용하여 RDB 조작
            </li>
            <li>
              회원가입 시 <strong>bcrypt</strong>를 사용하여 비밀번호 암호화
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-[18px] font-bold">구현 기능</div>
        <ul className="list-inside list-disc">
          <li> 게시글 CRUD 가능하도록 제작</li>
          <li>offset 기반의 페이지네이션을 사용하여 포켓몬 도감 구현</li>
          <li>cursor 기반의 페이지네이션으로 게시판 구현</li>
          <li>포켓몬 검색 기능 구현</li>
          <li>포켓몬 분류 및 정렬 기능</li>
        </ul>
      </div>
    </div>
  );
}
