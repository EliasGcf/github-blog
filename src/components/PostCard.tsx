/* eslint-disable import/no-duplicates */
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
/* eslint-enable import/no-duplicates */
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { Post } from '@utils/getPosts';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.number}`}>
      <div className="flex h-[16.25rem] flex-col rounded-[10px] border-2 border-transparent bg-base-post p-8 transition-colors hover:border-base-label">
        <div className="flex items-baseline justify-between gap-4 md:gap-3">
          <h3 className="break-words text-xl font-bold leading-[160%] text-base-title">
            {post.title}
          </h3>

          <span className="whitespace-nowrap text-sm text-base-span">
            {capitalizeFirstLetter(
              formatDistanceToNow(parseISO(post.createdAt), {
                locale: ptBR,
                addSuffix: true,
              }).replace('cerca de ', '')
            )}
          </span>
        </div>

        <ReactMarkdown className="prose prose-invert mt-5 max-w-none leading-relaxed text-base-text line-clamp-4">
          {post.content}
        </ReactMarkdown>
      </div>
    </Link>
  );
}
