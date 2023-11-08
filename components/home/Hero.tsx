import Image from 'next/image';
import hero from '@/public/hero.webp';
import Wrapper from '../Wrapper';

const Hero = () => {
  return (
    <section className='h-[calc(100vh-58px)] w-full relative overflow-hidden'>
      <div className='overflow-hidden '>
        <Image
          src={hero}
          alt='ossos hero image'
          fill
          priority
          className='object-cover object-bottom animate-scale-up'
        />
      </div>
      <Wrapper className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 text-center text-primary-2 w-full'>
        <h1 className='text-heading-2 sm:text-heading-1 lg:text-display font-bold mb-3 sm:mb-5 leading-tight'>
          أسس و تخطيط للمقاولات العامة
        </h1>
        <p className='font-medium sm:text-fluid-sm max-w-[60ch] mx-auto leading-tight text-[#4D5053]'>
          نقدم كافة ما يتعلق باعمال الانشاء و البناء و تتمثل هذه
          الاعمال التي نقدمها في تنفيذ أعمال التصليح و البناء لمختلف
          المباني والمنشات من البادية
        </p>
      </Wrapper>
    </section>
  );
};

export default Hero;
