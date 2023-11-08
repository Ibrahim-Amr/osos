import Image from 'next/image';
import Logo from '@/public/logo.webp';
import Link from 'next/link';

const NavLogo = () => {
  return (
    <div className='w-fit'>
      <Link
        href={'/'}
        aria-label='home'
      >
        <Image
          src={Logo}
          height={50}
          width={0}
          alt='logo'
          title='ossos logo'
          aria-label='ossos logo'
          className='object-cover'
          priority
        />
      </Link>
    </div>
  );
};

export default NavLogo;
