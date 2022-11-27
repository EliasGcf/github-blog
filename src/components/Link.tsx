import NextLink, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function Link({
  className,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <NextLink
      prefetch={false}
      className={twMerge(
        'flex items-center gap-2 text-xs font-bold text-blue underline-offset-4 hover:underline',
        className
      )}
      {...rest}
    />
  );
}
