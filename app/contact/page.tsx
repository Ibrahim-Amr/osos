import background from '@/public/contact.webp';
import Wrapper from '@/components/Wrapper';
import DetailsSection from '@/components/contact/DetailsSection';
import ContactForm from '@/components/contact/ContactForm';
import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader.tsx';

export const metadata: Metadata = {
  title: 'تواصل معنا',
  description: 'دار مكة للأستشارات الهندسية',
  keywords: 'دار مكة للأستشارات الهندسية',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://darmaaka.com/contact',
    title: 'دار مكة - تواصل معنا',
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
