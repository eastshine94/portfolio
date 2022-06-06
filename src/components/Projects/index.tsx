import React from 'react';
import Title from '../Title';
import Kakao from './Kakao';
import ProjectItem, { ProjectItemProps } from './ProjectItem';
import Responsive from './Responsive';

export default function Projects() {
  const projectList: ProjectItemProps[] = [
    {
      name: 'KakaoTalk Clone',
      image: '/assets/kakao.png',
      Content: Kakao
    },
    {
      name: 'Responsive Web',
      image: '/assets/responsive.png',
      isAlwaysFullImage: true,
      Content: Responsive
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
