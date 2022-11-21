import { InputHTMLAttributes } from 'react';

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export function TextInput({ ...rest }: TextInputProps) {
  return (
    <input
      type="text"
      className="h-[3.125rem] w-full rounded-md border border-base-border bg-base-input px-4 text-base text-base-text outline-none placeholder:text-base-label focus:border-blue"
      {...rest}
    />
  );
}
