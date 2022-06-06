import React from 'react';

export default function Star() {
  const getShadow = (count: number): string[] => {
    return Array.from(new Array(count), () => {
      const left = `${Math.floor(Math.random() * 2000)}px`;
      const top = `${Math.floor(Math.random() * 1000)}px`;
      return `${left} ${top} #fff`;
    });
  };

  const shadows = getShadow(800);
  const shadows1 = getShadow(1000);
  const shadows2 = getShadow(600);
  const shadows3 = getShadow(300);

  const stars = [
    {
      className:
        'absolute w-[1px] h-[1px] bg-white rounded-full animate-[star_30s_linear_infinite]',
      shadows: shadows
    },
    {
      className:
        'absolute w-[1px] h-[1px] bg-white rounded-full animate-[starReverse_30s_linear_infinite]',
      shadows: shadows
    },
    {
      className:
        'absolute w-[1.5px] h-[1.5px] bg-white rounded-full animate-[star_50s_linear_infinite]',
      shadows: shadows1
    },
    {
      className:
        'absolute w-[1.5px] h-[1.5px] bg-white rounded-full animate-[starReverse_50s_linear_infinite]',
      shadows: shadows1
    },
    {
      className:
        'absolute w-[2px] h-[2px] bg-white rounded-full animate-[star_80s_linear_infinite]',
      shadows: shadows2
    },
    {
      className:
        'absolute w-[2px] h-[2px] bg-white rounded-full animate-[starReverse_80s_linear_infinite]',
      shadows: shadows2
    },
    {
      className:
        'absolute w-[3px] h-[3px] bg-white rounded-full animate-[star_150s_linear_infinite]',
      shadows: shadows3
    },
    {
      className:
        'absolute w-[3px] h-[3px] bg-white rounded-full animate-[starReverse_200s_linear_infinite]',
      shadows: shadows3
    }
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {stars.map((star, idx) => (
        <div
          key={idx}
          className={star.className}
          style={{
            bottom: 0,
            boxShadow: star.shadows.join(',')
          }}
        />
      ))}
    </div>
  );
}
