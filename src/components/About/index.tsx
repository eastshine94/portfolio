import React from 'react';
import Title from '../Title';
import Intro from './Intro';
import Skills from './Skills';

export default function About() {
  return (
    <section
      id="about"
      className="p-5 bg-gradient-to-t to-neutral-900 from-sky-900 over640px:p-20"
    >
      <Title title="About me" />

      <div
        className="relative max-w-[1200px] p-6 mx-auto mt-16 
         box-content rounded-xl bg-white over480px:p-12"
      >
        <div className="w-full mb-5 text-[24px] font-bold over480px:text-[40px]">
          김희동 (HD Kim){' '}
        </div>
        <div className="flex flex-wrap gap-4 justify-start items-center over1024px:flex-nowrap">
          <div
            className="hidden absolute top-32 left-10 w-[125px] h-[125px] 
            mr-10 bg-hdkimLogo bg-no-repeat bg-contain
            over800px:block over1024px:static over1024px:min-w-[300px] over1024px:h-[300px]"
          />

          <Intro />
        </div>
        <Skills />
      </div>
    </section>
  );
}
