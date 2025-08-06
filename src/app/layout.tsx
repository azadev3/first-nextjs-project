import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import Head from 'next/head';

const quickSand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'This My NextJS Project',
  description: 'OMMG !',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand?.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
