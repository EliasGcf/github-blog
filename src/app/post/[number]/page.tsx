/* eslint-disable import/no-duplicates */
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
/* eslint-enable import/no-duplicates */
import { Metadata } from 'next';

import { PostContent } from '@components/PostContent';
import { PostInfo } from '@components/PostInfo';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { getPost } from '@utils/getPost';

type PostProps = {
  params: {
    number: string;
  };
};

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPost(params.number);

  const timeDistance = capitalizeFirstLetter(
    formatDistanceToNow(parseISO(post.createdAt), {
      locale: ptBR,
      addSuffix: true,
    }).replace('cerca de ', '')
  );

  return {
    title: post.title,
    description: timeDistance,
  };
}

export default async function Post({ params }: PostProps) {
  const post = await getPost(params.number);

  return (
    <div>
      <PostInfo post={post} />
      <PostContent content={post.content} />
    </div>
  );
}
