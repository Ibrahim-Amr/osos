import SectionHeader from '@/components/SectionHeader.tsx';
import { Metadata } from 'next';
import background from '@/public/contact.webp';

export const metadata: Metadata = {
  title: 'أعمالنا',
  description: 'أسس و تخطيط للمقاولات العامة',
  keywords: 'أسس و تخطيط للمقاولات العامة',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    type: 'website',
    url: '/work',
    title: 'أسس و تخطيط - أعمالنا',
    description: 'أسس و تخطيط للمقاولات العامة',
    siteName: 'أسس و تخطيط',
    countryName: 'السعودية',
    phoneNumbers: '966555911872',
    locale: 'ar',
    alternateLocale: 'en',
    emails: 'ebrahimamra69@gmail.com',
    images: [
      {
        url: '/openGraph.webp',
        width: 800,
        height: 800,
        alt: 'أسس و تخطيط',
      },
    ],
  },
};

const page = () => {
  return (
    <section className='min-h-[100dvh]'>
      <SectionHeader
        title='نبذة من اعمالنا'
        image={background}
      />
    </section>
  );
};

export default page;
