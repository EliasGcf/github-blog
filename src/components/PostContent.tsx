import ReactMarkdown from 'react-markdown';

type PostContentProps = {
  content: string;
};

export function PostContent({ content }: PostContentProps) {
  return (
    <ReactMarkdown className="prose prose-invert max-w-none px-8 py-10">
      {content}
    </ReactMarkdown>
  );
}
