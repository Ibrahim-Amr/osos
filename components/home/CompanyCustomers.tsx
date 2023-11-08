import Image from 'next/image';
import Wrapper from '../Wrapper';
import Marquee from 'react-fast-marquee';

import alshowaier from '@/public/clients/alshowaier.webp';
import baker from '@/public/clients/baker.webp';
import burder from '@/public/clients/burder.webp';
import chic from '@/public/clients/chic.webp';
import decor from '@/public/clients/decor.webp';
import dkhoon from '@/public/clients/dkhoon.webp';
import efco from '@/public/clients/efco.webp';
import forsan from '@/public/clients/forsan.webp';
import gulf_catering from '@/public/clients/gulf_catering.webp';
import Jai from '@/public/clients/Jai.webp';
import lailia from '@/public/clients/lailia.webp';
import masic from '@/public/clients/masic.webp';
import rasees from '@/public/clients/rasees.webp';
import roon from '@/public/clients/roon.webp';

const clients = [
  {
    img: alshowaier,
    alt: 'Al Showaier',
  },
  {
    img: baker,
    alt: 'Baker & Spice',
  },
  {
    img: burder,
    alt: 'Burger',
  },
  {
    img: chic,
    alt: 'Chic King',
  },
  {
    img: decor,
    alt: 'Decor',
  },
  {
    img: dkhoon,
    alt: 'Dkhoon',
  },
  {
    img: efco,
    alt: 'Efco',
  },
  {
    img: forsan,
    alt: 'Forsan',
  },
  {
    img: gulf_catering,
    alt: 'Gulf Catering',
  },
  {
    img: Jai,
    alt: 'Jai',
  },
  {
    img: lailia,
    alt: 'Lailia',
  },
  {
    img: masic,
    alt: 'Masic',
  },
  {
    img: rasees,
    alt: 'Rasees',
  },
  {
    img: roon,
    alt: 'Roon',
  },
];

const CompanyCustomers = () => {
  return (
    <section
      dir='ltr'
      className='relative'
    >
      <Wrapper>
        <Marquee
          autoFill
          pauseOnHover
          className='gap-0'
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.img}
              alt={client.alt}
              height={180}
              priority
              className='px-4'
            />
          ))}
        </Marquee>
      </Wrapper>
    </section>
  );
};

export default CompanyCustomers;
