import React from 'react';

interface ProjectItemProps {
  name: string;
  image: string;

  Content: () => JSX.Element;
}

export default function ProjectItem({
  name,
  image,
  Content
}: ProjectItemProps) {
  return (
    <div
      className="relative max-w-[1200px] p-6 mx-auto mt-16 
         box-content rounded-xl bg-white over480px:p-12"
    >
      <div>
        <h3 className="pb-5 text-center text-[28px] font-extrabold text-[#3c78d8] over1024px:text-[32px]">
          {name}
        </h3>
        <div className="over1024px:flex over1024px:items-center">
          <div className="w-full h-[500px] bg-slate-200 over1024px:min-w-[300px]">
            <img
              className="block w-full h-full m-auto over640px:w-1/2 over1024px:w-full"
              src={image}
              alt="kakao"
            />
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
}
