import React from 'react';

export default function Star() {
  const shadows1 = Array.from(new Array(2000), () => {
    const left = `${Math.floor(Math.random() * 2000)}px`;
    const top = `${Math.floor(Math.random() * 1000)}px`;
    return `${left} ${top} #fff`;
  });
  const shadows2 = Array.from(new Array(1000), () => {
    const left = `${Math.floor(Math.random() * 2000)}px`;
    const top = `${Math.floor(Math.random() * 1000)}px`;
    return `${left} ${top} #fff`;
  });
  const shadows3 = Array.from(new Array(1000), () => {
    const left = `${Math.floor(Math.random() * 2000)}px`;
    const top = `${Math.floor(Math.random() * 1000)}px`;
    return `${left} ${top} #fff`;
  });
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="absolute w-[1px] h-[1px] bg-white rounded-full animate-[star_30s_linear_infinite]"
        style={{
          bottom: 0,
          boxShadow: shadows1.join(',')
        }}
      />
      <div
        className="absolute w-[2px] h-[2px] bg-white rounded-full animate-[star_80s_linear_infinite]"
        style={{
          bottom: 10,
          boxShadow: shadows2.join(',')
        }}
      />
      <div
        className="absolute w-[3px] h-[3px] bg-white rounded-full animate-[star_150s_linear_infinite]"
        style={{
          boxShadow: shadows3.join(',')
        }}
      />
    </div>
  );
}
