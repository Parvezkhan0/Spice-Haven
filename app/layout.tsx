import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spice Haven - Authentic Indian Restaurant',
  description: 'Experience the rich taste of India with authentic Indian cuisine crafted with traditional recipes passed down through generations, using the finest spices and fresh ingredients.',
  keywords: 'Indian restaurant, authentic Indian food, butter chicken, biryani, paneer tikka, dal makhani, Indian cuisine',
  openGraph: {
    title: 'Spice Haven - Authentic Indian Restaurant',
    description: 'Experience authentic Indian cuisine with over 20 years of excellence',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}