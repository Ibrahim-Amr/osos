import Wrapper from '../Wrapper';
import { Mail, MapPin, Phone } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';

const UpperFooter = () => {
  return (
    <div className='bg-[#0d0d0f] py-5 sm:py-16'>
      <Wrapper>
        <div>
          <h2 className='text-2xl sx:text-3xl md:text-fluid-md font-bold text-primary-1 mb-5 sm:mb-10 leading-none pb-2.5'>
            للتواصل معنا
          </h2>
        </div>
        <div className='flex lg:flex-row flex-col flex-grow justify-center lg:justify-start items-start gap-4 flex-wrap'>
          <div className='flex-1 w-full'>
            <div className='flex justify-start items-start gap-3'>
              <MapPin />
              <div>
                <p className='text-sm md:text-fluid-xs leading-snug mb-4'>
                  - السعودية,المركز الرئيسي ( مكة المكرمة )
                </p>
              </div>
            </div>
          </div>
          <div className='flex-1 lg:flex-row flex-col gap-4 flex justify-between items-start lg:items-center w-full'>
            <div>
              <div className='flex justify-start items-start gap-3'>
                <Phone />
                {' - '}
                <Link
                  href='tel:966555911872'
                  className='text-sm md:text-fluid-xs leading-snug mb-4 hover:underline underline-offset-8 transition-all duration-300 ease-linear'
                >
                  966555911872
                </Link>
              </div>
              <div className='flex justify-start items-start gap-3'>
                <Mail />
                {' - '}
                <Link
                  href='mailto:ali@osos-const.com'
                  className='text-sm md:text-fluid-xs leading-snug hover:underline underline-offset-8 transition-all duration-300 ease-linear'
                >
                  ali@osos-const.com
                </Link>
              </div>
            </div>
            <Link
              href={'/contact'}
              aria-label='تواصل معنا'
              className={buttonVariants({
                variant: 'outline',
                className:
                  'block hover:bg-white/10 !text-white !text-sm md:!text-fluid-xs leading-tight !font-bold px-8 w-full lg:w-fit',
              })}
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default UpperFooter;
