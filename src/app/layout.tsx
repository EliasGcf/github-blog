import { PropsWithChildren } from 'react';
import { Nunito } from '@next/font/google';

import '@styles/global.css';

import { Cover } from '@components/Cover';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <head />
      <body className="bg-base-background">
        <Cover />
        <div className="mx-auto -mt-[88px] max-w-[54rem] px-4">{children}</div>
      </body>
    </html>
  );
}
