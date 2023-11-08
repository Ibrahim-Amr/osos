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
    applicationName: 'أسس و تخطيط للمقاولات العامة',
    keywords: 'أسس و تخطيط للمقاولات العامة',
    metadataBase: new URL('https://www.google.com/'),
    alternates: {
      canonical: '/',
    },
    publisher: 'planing-solutions',
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
      url: '/',
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
    twitter: {
      title: 'أسس و تخطيط للمقاولات العامة',
      description: 'أسس و تخطيط للمقاولات العامة',
      card: 'summary_large_image',
      site: '@ebrahim_omar4',
      creator: '@ebrahim_omar4',
      images: {
        url: '/openGraph.webp',
        alt: 'أسس',
      },
      creatorId: '@ebrahim_omar4',
      siteId: '@ebrahim_omar4',
    },
    authors: [
      {
        name: 'الحلول للتخطيط',
        url: 'https://planing-solutions.com',
      },
    ],
    referrer: 'origin',
    generator: 'Next.js',
    // viewport: {
    //   width: 'device-width',
    //   height: 'device-height',
    //   initialScale: 1,
    //   minimumScale: 1,
    //   maximumScale: 5,
    //   userScalable: true,
    //   viewportFit: 'cover',
    // },
    // other: {
    //   google: 'notranslate',
    // },

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
