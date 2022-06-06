import React from 'react';
import Star from './Star';

export default function MainTop() {
  return (
    <section className="w-full h-screen bg-black relative">
      <div className="w-full h-full">
        <div className="flex items-center w-full h-full text-white text-center z-10">
          <img
            className="absolute block inset-0 m-auto  w-[800px] opacity-50"
            src="/assets/moon.png"
            alt="moon"
          />

          <div className="m-auto z-10">
            <p className="text-4xl mb-10 font-bold over360px:text-5xl over480px:text-6xl">
              Front-End <br /> Developer
            </p>
            <p className="text-3xl mb-6 over480px:text-4xl"> 김 희 동 </p>
            <button className="px-4 py-2 bg-neutral-900 border border-stone-800 rounded-xl over360px:text-2xl">
              Who am I?
            </button>
          </div>
        </div>
      </div>
      <Star />
    </section>
  );
}
