import Image, { StaticImageData } from 'next/image';
import Wrapper from './Wrapper';

interface headerProps {
  image: StaticImageData;
  title: string;
  subtitle?: string;
  position?: string;
}

const SectionHeader = ({ title, subtitle, image }: headerProps) => {
  return (
    <div className='min-h-[50svh] max-h-[50vh] flex justify-center items-center relative before:absolute before:inset-0 before:bg-[#0d0d0d80] before:z-10 overflow-hidden'>
      <Image
        className='object-cover object-center animate-scale-up'
        src={image}
        alt={title}
        priority
        placeholder='blur'
        fill
      />
      <Wrapper className='z-20'>
        <h1 className='text-2xl sm:text-fluid-2 font-bold text-white leading-none mb-5'>
          {title}
        </h1>
        {subtitle ? (
          <h2 className='text-white/90 max-w-[90ch] text-sm sm:text-fluid-xs p-0 leading-tight font-medium whitespace-break-spaces'>
            {subtitle}
          </h2>
        ) : null}
      </Wrapper>
    </div>
  );
};

export default SectionHeader;
