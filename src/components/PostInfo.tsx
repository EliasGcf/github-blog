import { faCalendarDay, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable import/no-duplicates */
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
/* eslint-enable import/no-duplicates */

import { Link } from '@components/Link';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { Post } from '@utils/getPosts';

type PostInfoProps = {
  post: Post;
};

export function PostInfo({ post }: PostInfoProps) {
  return (
    <div className="rounded-[10px] bg-base-profile p-8 drop-shadow-lg">
      <Link href="/">
        <FontAwesomeIcon icon={faChevronLeft} width={12} height={12} />
        VOLTAR
      </Link>

      <h1 className="mt-5 text-2xl font-bold leading-[130%]">{post.title}</h1>

      <span className="mt-2 flex items-center gap-2 whitespace-nowrap text-base-span">
        <FontAwesomeIcon
          icon={faCalendarDay}
          width={18}
          height={18}
          className="text-base-label"
        />
        {capitalizeFirstLetter(
          formatDistanceToNow(parseISO(post.createdAt), {
            locale: ptBR,
            addSuffix: true,
          }).replace('cerca de ', '')
        )}
      </span>
    </div>
  );
}
