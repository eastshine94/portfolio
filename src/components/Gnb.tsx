import React, { useEffect, useState, useRef } from 'react';
import navImg from 'assets/nav-btn.svg';

export default function Gnb() {
  const mediaMatch = window.matchMedia('(min-width: 800px)');
  const isStartPcRef = useRef<boolean>(mediaMatch.matches);

  const gnbList = [
    { title: 'About', id: '#about' },
    { title: 'Career', id: '#career' },
    { title: 'Projects', id: '#projects' }
  ];

  const [isPC, setIsPC] = useState(mediaMatch.matches);
  const [isShowNav, setIsShowNav] = useState(mediaMatch.matches);

  const handleGnbClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { id } = event.currentTarget.dataset;
    if (!isPC) {
      setIsShowNav(false);
    }
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    const findElement = document.querySelector(id) as HTMLDivElement;
    if (!findElement) {
      window.scrollTo(0, 0);
      return;
    }
    window.scrollTo(0, Number(findElement.offsetTop));
  };

  const handleNavListBtn = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsShowNav(value => !value);
  };

  useEffect(() => {
    const handleResizeWindow = (event: Event) => {
      const target = event.target as Window;
      if (target.innerWidth >= 800) {
        setIsShowNav(true);
        setIsPC(true);
        isStartPcRef.current = true;
      } else {
        if (isStartPcRef.current) {
          isStartPcRef.current = false;
          setIsShowNav(false);
        }
        setIsPC(false);
      }
    };
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <header
      className="fixed top-0 z-40 w-full py-4 px-20
      bg-white  border-b-2 border-stone-200"
    >
      <div className="relative mx-auto max-w-[1200px] over800px:flex over800px:justify-between">
        <div className="text-[24px] font-bold ">
          <span className="cursor-pointer" onClick={handleGnbClick}>
            HD Portfolio
          </span>
        </div>
        {isShowNav && (
          <nav className="over800px:flex">
            {gnbList.map(value => (
              <div
                className="py-2 first:pt-6 
              over800px:py-0 over800px:first:pt-0 
              over800px:pr-5 over800px:last:pr-0"
                key={value.title}
              >
                <div
                  className="inline-block text-neutral-500 font-bold text-lg cursor-pointer hover:text-indigo-600"
                  onClick={handleGnbClick}
                  data-id={value.id}
                >
                  {value.title}
                </div>
              </div>
            ))}
          </nav>
        )}
        <div
          className="absolute top-0 right-0 p-1 border border-stone-300 over800px:hidden"
          onClick={handleNavListBtn}
        >
          <img src={navImg} alt="nav" />
        </div>
      </div>
    </header>
  );
}
