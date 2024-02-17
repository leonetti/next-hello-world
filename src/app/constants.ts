enum Type {
  type = 'website',
}

enum Referrer {
  referrer = 'same-origin',
}

export const strings = {
  site: {
    title: 'Hello World',
    name: 'HelloWorld',
    url: 'localhost:3000',
    description: 'A template built using NextJS, NextUI, Tailwind, and Vercel',
    keywords: 'nextjs, nextui, tailwind, vercel',
    type: Type.type,
    generator: 'Next.js',
    publisher: 'Vercel',
    category: 'Website Template',
    referrer: Referrer.referrer,
    author: {
      name: 'Alexander Leonetti',
      url: '',
    },
  },
  twitter: {
    creator: '@alex__leonetti',
  },
  manifestUrl: '/manifest.webmanifest',
};
