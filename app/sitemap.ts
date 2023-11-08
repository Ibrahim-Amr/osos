import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://darmaaka.com',
      lastModified: new Date(),
    },
    {
      url: 'https://darmaaka.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://darmaaka.com/work',
      lastModified: new Date(),
    },
    {
      url: 'https://darmaaka.com/mowaamah',
      lastModified: new Date(),
    },
    {
      url: 'https://darmaaka.com/contact',
      lastModified: new Date(),
    },
  ];
}
