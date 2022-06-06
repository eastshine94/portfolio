import React from 'react';
import Title from '../Title';
import Kakao from './Kakao';
import ProjectItem from './ProjectItem';

export default function Projects() {
  const projectList = [
    {
      name: 'KakaoTalk Clone',
      image: '/assets/kakao.png',
      Content: Kakao
    }
  ];
  return (
    <section className="p-5 bg-gradient-to-t to-yellow-900 from-amber-800 over640px:p-20">
      <Title title="Projects" />
      {projectList.map(value => (
        <ProjectItem {...value} key={value.name} />
      ))}
    </section>
  );
}
