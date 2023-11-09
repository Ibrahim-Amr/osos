import { cn } from '@/lib/utils';
import { MoveRight, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/logo.webp';
import MenuLinks from './MenuLinks';
import Link from 'next/link';

type MenuContentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuContent = ({ isOpen, setIsOpen }: MenuContentProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className={cn(
        'fixed top-0 inset-0 bg-black/80 z-50 h-[100dvh] md:hidden p-3 py-5 backdrop-blur-sm',
        isOpen
          ? 'inline-flex flex-col justify-center items-start flex-grow'
          : 'hidden'
      )}
    >
      <div className='flex rtl:flex-row-reverse justify-between items-center w-full mb-10 pb-5'>
        <Button
          variant={'ghost'}
          className='p-0'
          onClick={() => {
            setIsOpen((prevState) => !prevState);
            document.body.classList.remove('overflow-hidden');
          }}
          aria-label='close menu'
        >
          <X
            size={30}
            color='white'
          />
        </Button>
        <Link
          href={'/'}
          aria-label='go back home'
        >
          <Image
            src={logo}
            height={50}
            width={0}
            alt='logo'
          />
        </Link>
      </div>
      <MenuLinks />
      <Link
        href={'/contact'}
        className='text-white mt-auto border-b relative border-white/20 duration-500 py-3 inline-block before:absolute before:-bottom-[1px] before:w-0 before:h-[1px] before:bg-white hover:before:w-full before:transition-all before:duration-500 before:ease-linear rtl:hover:before:left-0 before:hover:left-0'
      >
        <p className='flex justify-start items-center gap-14 uppercase'>
          <span>تواصل معنا</span>
          <span>
            <MoveRight className='rtl:rotate-180' />
          </span>
        </p>
      </Link>
    </motion.section>
  );
};

export default MenuContent;
