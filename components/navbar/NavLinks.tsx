'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { ar_name: 'الرئيسية', href: '/', export: '/' },
  {
    ar_name: 'نماذج من أعمال',
    href: '/work',
    export: '/work/',
  },
  { ar_name: 'التواصل', href: '/contact', export: '/contact/' },
];

const NavLinks = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className='md:block hidden'>
      <ul className='flex justify-between items-center gap-5 text-xl font-semibold text-primary-2'>
        {links.map((link, index) => (
          <li
            key={index}
            className={cn(
              'py-2',
              pathname === link.export && 'text-primary-1',
              pathname !== link.export &&
                'relative before:absolute before:bottom-0 before:bg-primary-1 before:h-0.5 before:w-full before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:transform before:scale-x-0 before:origin-left before:translate-x-1/2 before:translate-y-1/2 before:z-10 hover:before:scale-x-100 hover:before:opacity-100 hover:before:translate-x-0'
            )}
          >
            <Link
              href={link.href}
              aria-label={link.ar_name}
            >
              {link.ar_name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
