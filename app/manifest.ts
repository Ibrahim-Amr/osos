import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'دار مكة',
    short_name: 'دار مكة',
    description: 'دار مكة للأستشارات الهندسية',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#fff',
    theme_color: '#fff',
    id: '1',
    screenshots: [
      {
        src: '/logo.webp',

        sizes: 'any',
      },
      {
        src: '/app/icon.png',
        sizes: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'دار مكة',
        short_name: 'دار مكة',
        description: 'دار مكة للأستشارات الهندسية',
        url: '/',
        icons: [
          {
            src: '/logo.webp',
            sizes: 'any',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/app/icon.png',
            sizes: 'any',
            purpose: 'any',
          },
        ],
      },
    ],
    icons: [
      {
        src: '/logo.webp',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'any',
      },
      {
        src: '/app/icon.png',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
    dir: 'rtl',
    lang: 'ar',
  };
}
