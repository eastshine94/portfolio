import React from 'react';
import Title from './Title';

export default function About() {
  return (
    <section className="p-20 bg-gradient-to-t to-slate-900 from-blue-700">
      <Title title="About me" />
      <div className="p-12 mx-auto mt-16 min-h-[600px] rounded-xl bg-white"></div>
    </section>
  );
}
