import Wrapper from '../Wrapper';
import { Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const LowerFooter = () => {
  return (
    <div className='bg-black py-3 text-white'>
      <Wrapper className='flex rtl:flex-row-reverse justify-between items-center flex-grow flex-wrap gap-5'>
        <div>
          <Link
            href='mailto:info@darmaaka.com'
            target='_blank'
            className='font-medium hover:underline underline-offset-8 transition-all duration-200 ease-in-out'
          >
            info@darmaaka.com
          </Link>
        </div>
        <div className='flex justify-start items-center gap-5'>
          <Link
            href='https://twitter.com/zaid_contract?lang=ar-x-fm'
            target='_blank'
            aria-label='Twitter account'
            className='font-medium hover:underline underline-offset-8 transition-all duration-200 ease-in-out'
          >
            <Twitter />
          </Link>
          <Link
            href='https://www.instagram.com/dmcstudio.sa/'
            target='_blank'
            aria-label='Instagram account'
            className='font-medium hover:underline underline-offset-8 transition-all duration-200 ease-in-out'
          >
            <Instagram />
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default LowerFooter;
