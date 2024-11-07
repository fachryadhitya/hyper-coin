export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import './globals.css';
import 'material-symbols';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Text from './components/Atoms/text';
import TopNavHero from './components/Templates/tophero.template';
import { IFuncLangParams } from './interface/interface';
import { locales } from '@/constants/locals';

export const metadata: Metadata = {
  title: 'hyperhire - coin siren',
  description: 'SIΞRRACOIN is a cryptocurrency that was designed to accelerate the use and creation of solar energy.',
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '900'],
});

export async function generateStaticParams() {
  return locales;
}

export default async function RootLayout({
  params,
  children,
}: IFuncLangParams &
  Readonly<{
    children: React.ReactNode;
  }>) {
  const { lang } = params;

  return (
    <html lang={lang || 'ko-KR'} className={poppins.className}>
      <body>
        <main className="bg-slight_light">
          <header>
            <TopNavHero lang={lang || 'ko-KR'} />
          </header>
          {children}
          <footer className="pt-9 pb-[60px] md:pt-12 md:pb-20 px-4 max-w-[1201.5px] mx-auto">
            <Text variant={'lightest_dark'} className="text-[13px] font-black">
              &copy; 2024 Hyperhire
            </Text>
          </footer>
        </main>
      </body>
    </html>
  );
}
