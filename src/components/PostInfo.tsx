import { Link } from '@components/Link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PostInfoProps = {
  number: string;
};

export function PostInfo({ number }: PostInfoProps) {
  console.log('PostInfo - issue number:', number);

  return (
    <div className="rounded-[10px] bg-base-profile p-8 drop-shadow-lg">
      <div className="flex justify-between">
        <Link href="/">
          <FontAwesomeIcon icon={faChevronLeft} width={12} height={12} />
          VOLTAR
        </Link>

        <Link href="/">
          VER NO GITHUB
          <FontAwesomeIcon icon={faUpRightFromSquare} width={12} height={12} />
        </Link>
      </div>

      <h1 className="mt-5 text-2xl font-bold leading-[130%]">
        JavaScript data types and data structures
      </h1>

      <footer className="mt-2 flex items-center gap-8">
        <span className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon
            icon={faGithub}
            width={18}
            height={18}
            className="text-base-label"
          />
          EliasGcf
        </span>

        <span className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon
            icon={faCalendarDay}
            width={18}
            height={18}
            className="text-base-label"
          />
          Há 1 dia
        </span>

        <span className="flex items-center gap-2 text-base-span">
          <FontAwesomeIcon
            icon={faComment}
            width={18}
            height={18}
            className="text-base-label"
          />
          5 comentários
        </span>
      </footer>
    </div>
  );
}
