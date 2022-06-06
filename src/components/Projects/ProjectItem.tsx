import React from 'react';

export interface ProjectItemProps {
  name: string;
  image: string;
  period: string[];
  isAlwaysFullImage?: boolean;
  Content: () => JSX.Element;
}

export default function ProjectItem({
  name,
  image,
  period,
  isAlwaysFullImage = false,
  Content
}: ProjectItemProps) {
  return (
    <div
      className="relative max-w-[1200px] p-6 mx-auto mt-16 
         box-content rounded-xl bg-white over480px:p-12"
    >
      <div>
        <h3 className="text-center text-[28px] font-extrabold text-[#3c78d8] over1024px:text-[32px]">
          {name}
        </h3>
        <div className="pb-7 text-center text-[20px] font-extrabold text-stone-400 over1024px:text-[24px]">
          {`${period[0] || ''} ~ ${period[1] || ''}`}
        </div>
        <div className="over1024px:flex over1024px:items-center">
          <div className="w-full h-[500px] bg-slate-200 over1024px:max-w-[350px] over1024px:min-w-[350px]">
            <img
              className="block w-full h-full m-auto over640px:w-1/2 over1024px:w-full"
              src={image}
              style={isAlwaysFullImage ? { width: '100%' } : {}}
              alt="project"
            />
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
}
