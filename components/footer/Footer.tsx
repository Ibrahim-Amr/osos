import UpperFooter from './UpperFooter';
import LowerFooter from './LowerFooter';
import Wrapper from '../Wrapper';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='text-white overflow-hidden'>
      <UpperFooter />
      <LowerFooter />
      <div className='bg-black text-center sx:font-bold py-2'>
        <Wrapper>
          <span> Powered by - </span>
          <Link
            href={'https://planing-solutions.com/'}
            target='_blank'
            aria-label='Planning Solutions'
            className='hover:text-custom_gold hover:underline underline-offset-8'
          >
            Planning Solutions{' '}
          </Link>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;
