import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

export function ProfileBanner() {
  return (
    <div className="flex rounded-[0.625rem] bg-base-profile drop-shadow-lg">
      <Image
        src="https://github.com/eliasgcf.png"
        width={148}
        height={148}
        alt="Elias Gabriel"
        className="my-8 ml-10 h-fit rounded-lg"
      />

      <section className="ml-8 mt-10 mb-8 flex w-full flex-col justify-between pr-8">
        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold  text-base-title">Elias Gabriel</h1>
            <a
              className="flex gap-2 text-xs font-bold text-blue underline-offset-4 hover:underline"
              href="https://github.com/eliasgcf"
            >
              GITHUB
              <FontAwesomeIcon icon={faUpRightFromSquare} width={12} height={12} />
            </a>
          </div>

          <p className="mt-2 leading-[160%]">
            Developer Instructor @Rocketseat・JS/TS Full Stack
          </p>
        </div>

        <footer className="mt-4 flex gap-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon
              icon={faGithub}
              width={18}
              height={18}
              className="text-base-label"
            />
            EliasGcf
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon
              width={18}
              height={18}
              icon={faBuilding}
              className="text-base-label"
            />
            Rocketseat
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon
              width={18}
              height={18}
              icon={faUserGroup}
              className="text-base-label"
            />
            32 seguidores
          </span>
        </footer>
      </section>
    </div>
  );
}
