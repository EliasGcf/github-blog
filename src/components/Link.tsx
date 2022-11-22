import NextLink, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export function Link({ ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <NextLink
      className="flex items-center gap-2 text-xs font-bold text-blue underline-offset-4 hover:underline"
      {...rest}
    />
  );
}
