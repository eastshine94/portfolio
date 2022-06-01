import React from 'react';
import Star from './Star';

export default function MainTop() {
  return (
    <section className="h-screen bg-black">
      <Star />
      <div className="absolute top-0 text-white">
        <p className="text-6xl">김희동</p>
        <p>Front-End Developer</p>
        <p>안녕하세요.</p>
      </div>
    </section>
  );
}
