import React from 'react';
import Star from './Star';

export default function MainTop() {
  return (
    <section className="h-screen bg-black">
      <Star />
      <img
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 opacity-50"
        src="/assets/moon.png"
        alt="moon"
      />
      <div className="absolute top-1/3 left-1/3 text-white">
        <p className="text-6xl">Front-End Developer</p>
        <p>안녕하세요.</p>
      </div>
    </section>
  );
}
