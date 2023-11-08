import CompanyCustomers from '@/components/home/CompanyCustomers';
// import { useQuery } from 'react-query';
// import aboutImage from '@/public/about_company.webp';
// import { Skeleton } from '../ui/skeleton';
import CompanyServices from './CompanyServices';
import AboutCompany from './AboutCompany';
import HomeProjects from './HomeProjects';

const HomeContainer = () => {
  // const {
  //   isLoading,
  //   error,
  //   data: response,
  // } = useQuery('home', async () => {
  //   const response = await fetch('https://darmaaka.com/dr/api/index');
  //   const data = await response.json();
  //   return data;
  // });

  // if (isLoading || error) {
  //   return (
  //     <section className='pb-20'>
  //       <Skeleton
  //         aria-label='slider'
  //         className='h-[50svh] w-full rounded-r-none mb-16'
  //       />
  //       <Wrapper className='flex flex-col md:flex-row-reverse justify-between items-center gap-20 w-full'>
  //         <div className='flex-1 w-full'>
  //           <Skeleton
  //             aria-label='نبذة عن شركتنا'
  //             className='h-[2.7rem] max-w-[350px] mb-5'
  //           />
  //           <Skeleton
  //             aria-label='نحن فريق من المهندسين والفنين المحترفين'
  //             className='h-[1.5rem] max-w-[500px] mb-5'
  //           />
  //           <Skeleton
  //             aria-label='من أصحاب التأهيل العالي فنيا واداريا المبني على خبرات طويلة في المجال الهندسي بالسعودية نعمل على قيادة المكتب نحو نجاح مستدام ومتنامي. يتكون هذا الفريق من خبراء في مجالات الهندسة والعمارة يتولون مسؤولية نجاح أقسام المكتب المختلفة في القيام بمهامها لإنتاج مخرجات متميزة تساهم في انجاز مهمة المكتب وتحقيق اهدافه'
  //             className='h-[1rem] mb-5'
  //           />
  //           <Skeleton
  //             aria-label='من أصحاب التأهيل العالي فنيا واداريا المبني على خبرات طويلة في المجال الهندسي بالسعودية نعمل على قيادة المكتب نحو نجاح مستدام ومتنامي. يتكون هذا الفريق من خبراء في مجالات الهندسة والعمارة يتولون مسؤولية نجاح أقسام المكتب المختلفة في القيام بمهامها لإنتاج مخرجات متميزة تساهم في انجاز مهمة المكتب وتحقيق اهدافه'
  //             className='h-[1rem] mb-5'
  //           />
  //           <Skeleton
  //             aria-label='من أصحاب التأهيل العالي فنيا واداريا المبني على خبرات طويلة في المجال الهندسي بالسعودية نعمل على قيادة المكتب نحو نجاح مستدام ومتنامي. يتكون هذا الفريق من خبراء في مجالات الهندسة والعمارة يتولون مسؤولية نجاح أقسام المكتب المختلفة في القيام بمهامها لإنتاج مخرجات متميزة تساهم في انجاز مهمة المكتب وتحقيق اهدافه'
  //             className='h-[1rem] mb-5'
  //           />
  //           <Skeleton
  //             aria-label='من أصحاب التأهيل العالي فنيا واداريا المبني على خبرات طويلة في المجال الهندسي بالسعودية نعمل على قيادة المكتب نحو نجاح مستدام ومتنامي. يتكون هذا الفريق من خبراء في مجالات الهندسة والعمارة يتولون مسؤولية نجاح أقسام المكتب المختلفة في القيام بمهامها لإنتاج مخرجات متميزة تساهم في انجاز مهمة المكتب وتحقيق اهدافه'
  //             className='h-[1rem] mb-5'
  //           />
  //           <Skeleton
  //             aria-label='من أصحاب التأهيل العالي فنيا واداريا المبني على خبرات طويلة في المجال الهندسي بالسعودية نعمل على قيادة المكتب نحو نجاح مستدام ومتنامي. يتكون هذا الفريق من خبراء في مجالات الهندسة والعمارة يتولون مسؤولية نجاح أقسام المكتب المختلفة في القيام بمهامها لإنتاج مخرجات متميزة تساهم في انجاز مهمة المكتب وتحقيق اهدافه'
  //             className='h-[1rem] mb-5'
  //           />
  //           <Skeleton
  //             aria-label='اقرا المزيد'
  //             className='h-[2.5rem] max-w-[180px] block mr-auto'
  //           />
  //         </div>
  //         <div className='flex-1 flex rtl:flex-row-reverse justify-center md:justify-end items-center gap-8'>
  //           <Skeleton
  //             aria-label='صور الشركة'
  //             className='h-[30rem] w-[45%]'
  //           />
  //           <Skeleton
  //             aria-label='صور الشركة'
  //             className='h-[30rem] w-[45%]'
  //           />
  //         </div>
  //       </Wrapper>
  //     </section>
  //   );
  // }
  return (
    <>
      <CompanyServices />
      <AboutCompany />
      <CompanyCustomers />
      <HomeProjects />
    </>
  );
};

export default HomeContainer;
