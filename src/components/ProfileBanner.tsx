import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { Link } from '@components/Link';

import { asyncComponent } from '@utils/asyncComponent';
import { getGitHubProfile } from '@utils/getGithubProfile';

async function ProfileBannerBase() {
  const profile = await getGitHubProfile();

  return (
    <div className="flex flex-col items-center rounded-[10px] bg-base-profile px-10 py-8 drop-shadow-lg sm:flex-row sm:items-stretch sm:gap-8">
      <Image
        src={profile.avatarUrl}
        width={148}
        height={148}
        alt={profile.name}
        className="rounded-lg"
      />

      <div className="w-full sm:flex sm:flex-col">
        <div className="mt-8 flex w-full items-center justify-between sm:m-0">
          <strong className="text-2xl">{profile.name}</strong>

          <Link href={profile.url}>
            GITHUB
            <FontAwesomeIcon icon={faUpRightFromSquare} height={12} width={12} />
          </Link>
        </div>

        <p className="mt-2 w-full">{profile.bio}</p>

        <div className="mt-6 grid w-full grid-cols-2 gap-2 sm:mt-auto sm:flex sm:gap-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faGithub}
              height={18}
              width={18}
              className="text-base-label"
            />
            <span className="whitespace-nowrap text-base text-base-subtitle">
              {profile.login}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faBuilding}
              height={18}
              width={18}
              className="text-base-label"
            />
            <span className="whitespace-nowrap text-base text-base-subtitle">
              {profile.company.replace('@', '')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faUserGroup}
              height={18}
              width={18}
              className="text-base-label"
            />
            <span className="whitespace-nowrap text-base text-base-subtitle">
              {profile.followers} seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ProfileBanner = asyncComponent(ProfileBannerBase);
