/* eslint-disable import/no-duplicates */
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
/* eslint-enable import/no-duplicates */

import { DefaultTags } from '@components/DefaultTags';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { getPost } from '@utils/getPost';

type HeadProps = {
  params: {
    number: string;
  };
};

export default async function Head({ params }: HeadProps) {
  const post = await getPost(params.number);

  const timeDistance = capitalizeFirstLetter(
    formatDistanceToNow(parseISO(post.createdAt), {
      locale: ptBR,
      addSuffix: true,
    }).replace('cerca de ', '')
  );

  return (
    <>
      <DefaultTags />
      <title>{post.title}</title>
      <meta name="description" content={timeDistance} />
    </>
  );
}
