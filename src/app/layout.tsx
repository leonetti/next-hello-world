import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import siteConfig from '@/config/site';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: new URL(siteConfig.links.url),
    type: siteConfig.metadata.type,
  },
  twitter: {
    creator: siteConfig.metadata.twitter.creator,
  },
  keywords: siteConfig.metadata.keywords,
  authors: siteConfig.metadata.author,
  manifest: siteConfig.metadata.manifestUrl,
  metadataBase: new URL(siteConfig.links.url),
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nocache: true,
  },
  referrer: siteConfig.metadata.referrer,
  generator: siteConfig.metadata.generator,
  creator: siteConfig.metadata.author.name,
  publisher: siteConfig.metadata.publisher,
  category: siteConfig.metadata.category,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        {/* used for light/dark theme toggle */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  const theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                })();
              `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
