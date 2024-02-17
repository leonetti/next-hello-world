import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { strings } from './constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: strings.site.title,
  description: strings.site.description,
  openGraph: {
    title: strings.site.title,
    description: strings.site.description,
    siteName: strings.site.name,
    url: new URL(strings.site.url),
    type: strings.site.type,
  },
  twitter: {
    creator: strings.twitter.creator,
  },
  keywords: strings.site.keywords,
  authors: strings.site.author,
  manifest: strings.manifestUrl,
  metadataBase: new URL(strings.site.url),
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nocache: true,
  },
  referrer: strings.site.referrer,
  generator: strings.site.generator,
  creator: strings.site.author.name,
  publisher: strings.site.publisher,
  category: strings.site.category,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
