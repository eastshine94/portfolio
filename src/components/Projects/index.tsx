import React from 'react';
import Title from '../Base/Title';
import ProjectItem, { ProjectItemProps } from './ProjectItem';
import Kakao from './Kakao';
import Pokemon from './Pokemon';
import Responsive from './Responsive';

export interface ContentProps {
  readme?: string;
  site?: string;
}

export default function Projects() {
  const projectList: ProjectItemProps[] = [
    {
      name: 'KakaoTalk Clone',
      image: 'assets/kakao.png',
      period: ['2020.07', '2020.10'],
      Content: () => (
        <Kakao
          readme="https://github.com/eastshine94/KakaoTalk"
          site="http://kakaoclonechat.cafe24app.com/"
        />
      )
    },
    {
      name: 'Responsive Web',
      image: 'assets/responsive.png',
      period: ['2020.05', '2020.05'],
      isAlwaysFullImage: true,
      Content: () => (
        <Responsive
          readme="https://github.com/eastshine94/Responsive_Web"
          site="https://eastshine94.github.io/Responsive_Web/"
        />
      )
    },
    {
      name: 'Pokemon Web Page',
      image: 'assets/pokemon.png',
      period: ['2020.03', '2020.05'],
      isAlwaysFullImage: true,
      Content: () => (
        <Pokemon readme="https://github.com/eastshine94/Pokemon_Web_Project" />
      )
    }
  ];
  return (
    <section className="p-5 bg-stone-500 over640px:p-20">
      <Title title="Projects" />
      {projectList.map(value => (
        <ProjectItem {...value} key={value.name} />
      ))}
    </section>
  );
}
