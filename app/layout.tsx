import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Julia Ronzoni — Nutrição, Lifestyle & Conteúdo',
  description: 'Nutricionista, colunista e UGC creator. Conteúdo autêntico para marcas, saúde e lifestyle.',
  openGraph: {
    title: 'Julia Ronzoni — Nutrição, Lifestyle & Conteúdo',
    description: 'Nutricionista, colunista e UGC creator. Conteúdo autêntico para marcas, saúde e lifestyle.',
    images: [{ url: '/og.png', width: 1731, height: 907, alt: 'Julia Ronzoni — Nutrição, lifestyle e conteúdo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julia Ronzoni — Nutrição, Lifestyle & Conteúdo',
    description: 'Nutricionista, colunista e UGC creator. Conteúdo autêntico para marcas, saúde e lifestyle.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
