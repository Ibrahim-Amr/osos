import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const DetailsSection = () => {
  return (
    <div className='flex-1'>
      <div className='relative before:absolute before:bottom-0 before:w-full before:h-[1px] before:bg-neutral-600 pb-6 mb-6 w-fit'>
        {/* <h2 className='text-4xl md:text-fluid-md font-bold text-custom_gold mb-3 leading-none'>
          {lang === 'en' ? 'Contact Us' : 'للتواصل معنا'}
        </h2> */}
        <p className='text-base sm:text-xl lg:max-w-[50ch] leading-tight text-neutral-600'>
          يسعدنا تلقي استفساراتك واقتراحاتك. لمزيد من المعلومات، يمكن
          للعميل ملأ الاستمارة التالية وسيتم الاتصال بكم في أقرب وقت
        </p>
      </div>
      <div>
        <h2 className='text-custom_gold text-xl font-bold mb-3'>
          أسس و تخطيط
        </h2>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-start items-center gap-2'>
            <MapPin
              size={20}
              className='text-neutral-600'
            />
            <Link
              href={'https://maps.app.goo.gl/6yQnmmjb5mfhx6Mk6'}
              target='_blank'
              className='font-medium text-neutral-600 hover:underline underline-offset-8 transition-all duration-200 ease-in-out'
            >
              السعودية,المركز الرئيسي ( مكة المكرمة )
            </Link>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <Mail
              size={20}
              className='text-neutral-600'
            />
            <Link
              href='mailto:ali@osos-const.com'
              target='_blank'
              className='font-medium text-neutral-600 hover:underline underline-offset-8 transition-all duration-200 ease-in-out'
            >
              ali@osos-const.com
            </Link>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <Phone
              size={20}
              className='rtl:-rotate-90 text-neutral-600'
            />
            <Link
              href={'tel:966555911872'}
              target='_blank'
              className='font-medium text-neutral-600 hover:underline underline-offset-8 transition-all duration-200 ease-in-out'
            >
              966555911872
            </Link>
          </div>
          {/* <div className='flex justify-start items-center gap-2'>
            <Phone
              size={20}
              className='rtl:-rotate-90 text-neutral-600'
            />
            <Link
              href={'tel:0125369237'}
              target='_blank'
              className='font-medium text-neutral-600 hover:underline underline-offset-8 transition-all duration-200 ease-in-out'
            >
              0125369237
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
