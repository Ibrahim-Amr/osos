import background from '@/public/contact.webp';
import Wrapper from '@/components/Wrapper';
import DetailsSection from '@/components/contact/DetailsSection';
import ContactForm from '@/components/contact/ContactForm';
import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader.tsx';

export const metadata: Metadata = {
  title: 'تواصل معنا',
  description: 'أسس و تخطيط للمقاولات العامة',
  keywords: 'أسس و تخطيط للمقاولات العامة',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: '/contact',
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
        alt: 'دار مكة',
      },
    ],
  },
};

const page = () => {
  return (
    <section className='min-h-[100svh]'>
      <SectionHeader
        title='تواصل معنا'
        image={background}
      />
      <Wrapper className='lg:py-20 py-10 flex lg:flex-row flex-col justify-between items-start w-full gap-10'>
        <DetailsSection />
        <ContactForm />
      </Wrapper>
    </section>
  );
};

export default page;
