'use client';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

const SmoothScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      autoResize: true,
      smoothTouch: true,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
};

export default SmoothScroll;
