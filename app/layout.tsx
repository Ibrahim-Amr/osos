import './globals.css';
import 'swiper/css/bundle';
import { Tajawal } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';
import ReactQueryProvider from '@/Providers/ReactQueryProvider';

const font = Tajawal({
  subsets: ['arabic'],
  weight: ['400'],
  display: 'swap',
  style: 'normal',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: 'أسس | %s',
      default: 'أسس و تخطيط للمقاولات العامة',
    },
    description: 'أسس و تخطيط للمقاولات العامة',
    applicationName: 'دار مكة',
    keywords: 'أسس و تخطيط للمقاولات العامة',
    metadataBase: new URL('https://darmaaka.com'),
    alternates: {
      canonical: '/',
    },
    publisher: 'أسس',
    icons: '/logo.webp',
    creator: 'Ibrahim Omar',
    appleWebApp: {
      capable: true,
      title: 'أسس',
      statusBarStyle: 'black-translucent',
      startupImage: '/logo.webp',
    },
    openGraph: {
      type: 'website',
      url: 'https://darmaaka.com',
      title: 'أسس و تخطيط للمقاولات العامة',
      description: 'أسس و تخطيط للمقاولات العامة',
      siteName: 'أسس',
      countryName: 'السعودية',
      phoneNumbers: '966555911872',
      locale: 'ar',
      emails: 'ebrahimamra69@gmail.com',
      faxNumbers: '966555911872',
      images: [
        {
          url: '/openGraph.webp',
          width: 800,
          height: 800,
          alt: 'أسس',
        },
      ],
    },
    authors: [
      {
        name: 'الحلول للتخطيط',
        url: 'https://planing-solutions.com/',
      },
    ],
    // themeColor: '#ffffff',
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='ar'
      dir='rtl'
    >
      <body className={cn('overflow-x-hidden', font.className)}>
        <main>
          <ReactQueryProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster
              richColors
              position={'top-center'}
            />
          </ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
