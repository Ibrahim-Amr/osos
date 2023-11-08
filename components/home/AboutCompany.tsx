import Image from 'next/image';
import about_image from '@/public/about_image.webp';
import Wrapper from '../Wrapper';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

const AboutCompany = () => {
  return (
    <section className='py-6 md:py-12'>
      <Wrapper className='flex flex-col-reverse xl:flex-row justify-between items-center xl:items-start gap-16 flex-grow flex-wrap xl:text-start text-center'>
        <div className='flex-1 xl:pt-10'>
          <div>
            <h2 className='text-primary-2 text-heading-1 font-bold mb-8 '>
              عن الشركة
            </h2>
            <p className='text-primary-4 text-2xl mb-16 max-w-[72ch] xl:w-full '>
              أعوام من العمل الدؤوب في رحاب المم في مجال اعمال البناء
              و التشييد حيث قامت المؤسسة بإنشاء العديد من المباني
              السكنية والفلل عظم وتسليم مفتاح وكذلك الكثير من مشاريع
              تسليم المحلات التاجرية لأفخم الماركات كما ان قسم
              الكهرباء المختص لدينا انجزنا خلالها العديد من مشاريع
              الفنادق خصوصا من مكة المكرمة حيث يقع مقر المؤسسة الاصلي
            </p>
            <div className='flex justify-start items-center gap-4 mb-12'>
              <div className='h-20 w-20 flex justify-center items-center bg-primary-3 rounded-full'>
                <Phone
                  className='rtl:-rotate-90 text-primary-1'
                  size={32}
                />
              </div>
              <div className='text-primary-4'>
                <Link
                  href='tel:966555911872'
                  className='font-bold text-heading-3 hover:underline underline-offset-8 transition-all duration-300 ease-linear'
                >
                  966555911872
                </Link>
                <p className='text-heading-4'>اتصل بنا</p>
              </div>
            </div>
            <div>
              <Link
                href={'/contact'}
                aria-label='تواصل معنا'
                className={buttonVariants({
                  className:
                    'font-semibold text-heading-5 py-4 !px-20 rounded-md shadow-lg w-full sm:w-auto !bg-primary-2',
                })}
              >
                <span>تواصل معنا</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='[border-radius:20.40625rem_0rem_7.6875rem_0rem] overflow-hidden mx-auto xl:flex-1  w-fit'>
          <Image
            src={about_image}
            alt='about_company'
            height={600}
            width={0}
            loading='lazy'
            placeholder='blur'
            className='w-full object-cover'
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutCompany;
