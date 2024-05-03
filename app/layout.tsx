import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://maodaaa.engineer'),
  alternates: {
    canonical: 'https://maodaaa.engineer',
  },
  title: 'Maorid Manarul Hidayat',
  description: 'Maorid Manarul Hidayat is a Android Software Engineer.',
  keywords:
    'Maorid Manarul Hidayat, Software Engineer, Android Developer, Flutter Developer, Mobile Developer',
  openGraph: {
    locale: 'en_US',
    siteName: 'Maorid Manarul Hidayat',
    type: 'website',
    title: 'Maorid Manarul Hidayat',
    description: 'Maorid Manarul Hidayat is a Android Software Engineer.',
    url: 'https://maodaaa.engineer',
    images: [
      {
        url: './og-maorid.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maorid Manarul Hidayat',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
