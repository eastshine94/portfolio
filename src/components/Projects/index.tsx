import React from 'react';
import Title from '../Base/Title';
import ProjectItem, { ProjectItemProps } from './ProjectItem';
import Kakao from './Kakao';
import Pokemon from './Pokemon';
import Responsive from './Responsive';
import kakaoImg from 'assets/kakao.png';
import responsiveImg from 'assets/responsive.png';
import pokemonImg from 'assets/pokemon.png';

export interface ContentProps {
  readme?: string;
  site?: string;
}

export default function Projects() {
  const projectList: ProjectItemProps[] = [
    {
      name: 'KakaoTalk Clone',
      image: kakaoImg,
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
      image: responsiveImg,
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
      image: pokemonImg,
      period: ['2020.03', '2020.05'],
      isAlwaysFullImage: true,
      Content: () => (
        <Pokemon readme="https://github.com/eastshine94/Pokemon_Web_Project" />
      )
    }
  ];
  return (
    <section
      id="projects"
      className="px-5 pb-5 pt-24 bg-stone-500
    over800px:p-20 over800px:pt-24"
    >
      <Title title="Projects" />
      {projectList.map(value => (
        <ProjectItem {...value} key={value.name} />
      ))}
    </section>
  );
}
