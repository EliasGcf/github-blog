import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { asyncComponent } from '@utils/asyncComponent';
import { getGitHubProfile } from '@utils/getGithubProfile';
import { Link } from '@components/Link';

async function ProfileBannerBase() {
  const profile = await getGitHubProfile();

  return (
    <div className="flex rounded-[10px] bg-base-profile drop-shadow-lg">
      <Image
        src={profile.avatarUrl}
        width={148}
        height={148}
        alt={profile.name}
        className="my-8 ml-10 h-fit rounded-lg"
      />

      <section className="ml-8 mt-10 mb-8 mr-8 flex w-full flex-col justify-between">
        <div className="flex w-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl font-bold text-base-title">{profile.name}</h1>

            <Link href={profile.url}>
              GITHUB
              <FontAwesomeIcon icon={faUpRightFromSquare} width={12} height={12} />
            </Link>
          </div>

          <p className="mt-2 break-words leading-[160%]">{profile.bio}</p>
        </div>

        <footer className="mt-4 flex flex-col gap-2 sm:grid sm:grid-cols-2 md:flex md:flex-row md:gap-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon
              icon={faGithub}
              width={18}
              height={18}
              className="text-base-label"
            />
            {profile.login}
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon
              width={18}
              height={18}
              icon={faBuilding}
              className="text-base-label"
            />
            {profile.company}
          </span>

          <span className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon
              width={18}
              height={18}
              icon={faUserGroup}
              className="text-base-label"
            />
            {profile.followers} seguidores
          </span>
        </footer>
      </section>
    </div>
  );
}

export const ProfileBanner = asyncComponent(ProfileBannerBase);
