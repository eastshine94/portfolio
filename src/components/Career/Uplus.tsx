import React from "react";

export default function Uplus() {
  return (
    <div>
      <ul className="leading-10 list-inside list-disc">
        <li>
          <strong>Better App</strong> 출시(
          <a
            href="https://play.google.com/store/apps/details?id=com.lifeplatform.better&hl=ko"
            target="_blank"
            rel="noreferrer"
            className="text-sky-900 underline"
          >
            Android
          </a>
          ,{" "}
          <a
            href="https://apps.apple.com/app/id1670847681"
            target="_blank"
            rel="noreferrer"
            className="text-sky-900 underline"
          >
            IOS
          </a>
          )
        </li>

        <ul>
          <li className="pl-[21px]">⚬ 0 to 1으로 서비스 초반 기획 단계 참여</li>
          <li className="pl-[21px]">
            ⚬ <strong>Next.js</strong>를 사용하여 웹뷰 형태로 서비스 페이지 구현
          </li>
          <li className="pl-[21px]">
            ⚬ <strong>react-query</strong>, <strong>zustand</strong>를 사용하여
            state 관리
          </li>
          <li className="pl-[21px]">
            ⚬ <strong>mixpanel</strong>을 통해 데이터 트랙킹을 할 수 있도록
            이벤트 로깅 작업
          </li>
        </ul>
      </ul>
    </div>
  );
}
