import React from 'react';
import Title from '../Title';
import CareerItem from './CareerItem';
import Joara from './Joara';

export default function Career() {
  const careerList = [
    {
      company: '(주) 조아라',
      period: ['20201216', undefined],
      job: '서비스개발팀 프론트엔드 개발자',
      logo: '/assets/joara.png',
      link: 'https://www.joara.com/',
      Content: Joara
    }
  ];

  return (
    <section className="p-5 bg-gradient-to-t to-green-800 from-emerald-400 over640px:p-20">
      <Title title="Career" />
      {careerList.map(value => (
        <CareerItem {...value} key={value.company} />
      ))}
    </section>
  );
}
