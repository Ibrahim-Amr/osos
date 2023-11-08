import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: '404',
  description: 'دار مكة للأستشارات الهندسية',
  keywords: 'دار مكة للأستشارات الهندسية',
  alternates: {
    canonical: '/404',
  },
  openGraph: {
    type: 'website',
    url: 'https://darmaaka.com/mowaamah',
    title: 'دار مكة - 404',
    description: 'دار مكة للأستشارات الهندسية',
    siteName: 'دار مكة',
    countryName: 'السعودية',
    phoneNumbers: '0120399237',
    locale: 'ar',
    alternateLocale: 'en',
    emails: 'ebrahimamra69@gmail.com',
    faxNumbers: '0120347029',
    images: [
      {
        url: '/openGraph.webp',
        width: 800,
        height: 800,
        alt: 'دار مكة',
      },
    ],
  },
};

const NotFound = () => {
  return (
    <div className='bg-white w-full'>
      <div className='h-screen flex flex-col justify-center items-center w-full'>
        <h1 className='text-fluid-2 font-bold text-neutral-800 -mt-52'>
          404
        </h1>
        <p className='font-medium text-6xl text-neutral-800'>
          الصفحة غير موجودة
        </p>
        <Link
          href='/'
          className='mt-4 text-xl text-custom_gold hover:underline underline-offset-8'
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
