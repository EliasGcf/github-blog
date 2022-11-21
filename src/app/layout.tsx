import { PropsWithChildren } from 'react';
import { Nunito } from '@next/font/google';

import '@styles/global.css';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <head />
      <body>{children}</body>
    </html>
  );
}
