'use client';

import { cn } from '@/lib/utils';
import useNavbarVisibility from '@/hooks/useNavbarVisibility';

const NavWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isNavbarVisible, currentScrollPos } = useNavbarVisibility();
  return (
    <header
      className={cn(
        'sticky top-0 w-full z-50 transition-all duration-300 ease-out text-black bg-white max-h-[58px]',
        isNavbarVisible ? 'top-0' : 'top-[-85px]',
        currentScrollPos > 50 ? 'shadow-md' : 'shadow-none'
      )}
    >
      {children}
    </header>
  );
};

export default NavWrapper;
