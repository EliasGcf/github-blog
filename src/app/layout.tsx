import { Fira_Code, Nunito } from '@next/font/google';
import { PropsWithChildren } from 'react';

import '@styles/global.css';

import { Cover } from '@components/Cover';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
});

const firaCode = Fira_Code({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className={`${firaCode.variable} ${nunito.variable}`}>
      <head />
      <body className="bg-base-background">
        <Cover />
        <div className="mx-auto -mt-[88px] max-w-[54rem] px-4">{children}</div>
      </body>
    </html>
  );
}
