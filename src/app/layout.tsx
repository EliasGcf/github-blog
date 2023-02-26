import type { Metadata } from 'next';
import { Fira_Code, Nunito } from 'next/font/google';
import { PropsWithChildren } from 'react';

import '@styles/global.css';

import { Cover } from '@components/Cover';

import { getPosts } from '@utils/getPosts';

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

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();

  const postsAmount = String(posts.length).padStart(2, '0');
  const amountSuffix = posts.length === 1 ? 'post' : 'posts';

  return {
    title: 'GitHub Blog',
    description: `This is a blog that uses GitHub as CMS - ${postsAmount} ${amountSuffix}`,
    authors: [{ name: 'Elias Gabriel', url: 'https://github.com/EliasGcf' }],
    viewport: 'width=device-width, initial-scale=1',
    icons: [{ url: '/favicon.png', type: 'image/png' }],
  };
}

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
