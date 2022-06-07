import React from 'react';
import { ContentProps } from '.';

export default function Responsive({ readme, site }: ContentProps) {
  return (
    <div className="leading-loose over1024px:pl-20">
      <div className="my-2">
        이전 프로젝트에서 CSS 지식이 부족하여, 많은 어려움을 겪었습니다. 그래서
        CSS에 대한 지식도 쌓고자{' '}
        <a
          href="https://wtss.tistory.com/"
          target="_blank"
          rel="noreferrer"
          className="text-sky-900 underline"
        >
          https://wtss.tistory.com/
        </a>
        의 강의를 따라하며 반응형 웹 사이트를 제작해보았습니다. 해당 강의는
        HTML, CSS를 사용하지만, 저는 <b>React와 styled-components</b>로 해당
        페이지를 구현해봤습니다.
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
        <div className="text-[18px] font-bold">주요 내용</div>
        <div>
          <ul className="list-inside list-disc">
            <li>
              <b>React, styled component</b>를 사용하여 반응형 웹 제작
            </li>
            <li>
              CSS3에서 제공하는 <b>box-shadow, transform, transition, filter</b>{' '}
              등을 이용하여 다양한 마우스 오버 효과를 구현
            </li>
            <li>
              <b>react-slick</b>을 사용하여, slick slider 구현
            </li>
            <li>페이스북, 트위터 공유 기능</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
