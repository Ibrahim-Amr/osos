import { ArrowDownRight } from 'lucide-react';
import Link from 'next/link';

const menuLinks = [
  { ar_name: 'الرئيسية', href: '/' },
  {
    ar_name: 'نماذج من أعمال',
    href: '/work',
  },
  { ar_name: 'التواصل', href: '/contact' },
];

const MenuLinks = () => {
  return (
    <nav className='w-full'>
      <ul className='flex flex-col justify-center items-start'>
        {menuLinks.map((link, i) => (
          <li
            key={link.ar_name}
            className='w-full py-3 border-b border-white/20 relative before:absolute before:-bottom-[1px] before:w-0 before:h-[1px] before:bg-white hover:before:w-full before:transition-all before:duration-500 before:ease-linear hover:before:left-0'
            aria-label={link.ar_name}
          >
            <Link
              href={link.href}
              aria-label={link.ar_name}
              className='text-[#ece4e1] uppercase text-3xl font-medium w-full inline-block'
            >
              <div className='w-full'>
                <div className='flex justify-between items-center'>
                  <span className='inline-block'>{link.ar_name}</span>
                  <ArrowDownRight className='rotate-180' />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuLinks;
