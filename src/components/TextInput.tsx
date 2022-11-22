import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export function TextInput({ className, ...rest }: TextInputProps) {
  return (
    <input
      type="text"
      className={twMerge(
        'h-[3.125rem] w-full rounded-md border-2 border-base-border bg-base-input px-4 text-base text-base-text outline-none transition-colors placeholder:text-base-label focus:border-blue',
        className
      )}
      {...rest}
    />
  );
}
