import React from 'react';
import Wrapper from '../Wrapper';

const services = [
  {
    service: 'Site Preparation',
    ar_service: 'تجهيز الموقع',
    description:
      'The core function of construction companies is to carry out the actual building work. This includes activities such as framing, roofing, electrical, plumbing, and HVAC installation, as well as interior and exterior finishing',
    ar_description:
      'يتضمن ذلك تطهير موقع البناء وتصنيفه ، وضمان ملاءمته للبناء ، ووضع الأساس للمشروع',
  },

  {
    service: 'Site Preparation',
    ar_service: 'تجهيز الموقع',
    description:
      'The core function of construction companies is to carry out the actual building work. This includes activities such as framing, roofing, electrical, plumbing, and HVAC installation, as well as interior and exterior finishing',
    ar_description:
      'يتضمن ذلك تطهير موقع البناء وتصنيفه ، وضمان ملاءمته للبناء ، ووضع الأساس للمشروع',
  },
  {
    service: 'Site Preparation',
    ar_service: 'تجهيز الموقع',
    description:
      'The core function of construction companies is to carry out the actual building work. This includes activities such as framing, roofing, electrical, plumbing, and HVAC installation, as well as interior and exterior finishing',
    ar_description:
      'يتضمن ذلك تطهير موقع البناء وتصنيفه ، وضمان ملاءمته للبناء ، ووضع الأساس للمشروع',
  },
];
const CompanyServices = () => {
  return (
    <section className='py-6 md:py-12'>
      <Wrapper>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start text-center gap-10 flex-grow'>
          {services.map((service) => (
            <div
              key={service.service}
              className='flex flex-col items-center gap-5 py-2'
            >
              <h1 className='text-heading-3 font-bold leading-tight text-primary-2'>
                {service.ar_service}
              </h1>
              <p className='font-medium sm:text-fluid-sm max-w-[40ch] mx-auto leading-tight text-[#4D5053] md:w-full'>
                {service.ar_description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CompanyServices;
