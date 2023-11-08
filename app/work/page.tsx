import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أعمالنا',
  description: 'دار مكة للأستشارات الهندسية',
  keywords: 'دار مكة للأستشارات الهندسية',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    type: 'website',
    url: 'https://darmaaka.com/portfolio',
    title: 'دار مكة - أعمالنا',
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

const page = () => {
  return <section className='min-h-[100svh]'></section>;
};

export default page;
