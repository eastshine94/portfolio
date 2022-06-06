import React from 'react';

interface TitleProps {
  title: string;
  isUpper?: boolean;
}

export default function Title({ title, isUpper = true }: TitleProps) {
  return (
    <h2 className="text-white  text-center text-2xl over360px:text-3xl over480px:text-5xl">
      ∙
      <span className="pb-2 font-bold border-b-4 border-white">
        {isUpper ? title.toUpperCase() : title}
      </span>
      ∙
    </h2>
  );
}
