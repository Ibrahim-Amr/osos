import { cn } from '@/lib/utils';
import React from 'react';

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'container mx-auto px-3 sm:px-5 lg:px-10',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
