/* eslint-disable react/no-unstable-nested-components */
import { Code as AsyncCode } from 'bright';
import { ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';

import { asyncComponent } from '@utils/asyncComponent';

type PostContentProps = {
  content: string;
};

const Code = asyncComponent(AsyncCode);
type CodeProps = ComponentProps<typeof Code>;

export function PostContent({ content }: PostContentProps) {
  return (
    <ReactMarkdown
      components={{
        code: ({ node, inline, className, children, ...props }) => {
          if (inline || !className) {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }

          const language = className.replace(/language-/, '') as CodeProps['lang'];

          return (
            <Code theme="nord" className="font-mono" lang={language}>
              {children.join('')}
            </Code>
          );
        },
      }}
      className="prose prose-invert max-w-none px-8 py-10"
    >
      {content}
    </ReactMarkdown>
  );
}
