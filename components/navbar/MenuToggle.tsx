'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import MenuContent from './MenuContent';
import { Button } from '../ui/button';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  }, [pathname]);

  return (
    <div>
      <div className='flex rtl:flex-row-reverse justify-center items-center gap-3'>
        <Button
          variant={'ghost'}
          className='p-0 h-auto w-auto md:hidden'
          onClick={() => {
            setIsOpen(!isOpen);
            document.body.classList.add('overflow-hidden');
          }}
          aria-expanded={isOpen}
          aria-pressed={isOpen}
          aria-label='menu toggle'
          title='menu toggle'
        >
          <Menu
            size={35}
            className='cursor-pointer'
          />
        </Button>
      </div>
      <AnimatePresence mode='wait'>
        {isOpen && (
          <MenuContent
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuToggle;
