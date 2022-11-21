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

async function ProfileBannerBase() {
  const profile = await getGitHubProfile('eliasgcf');

  return (
    <div className="flex rounded-[0.625rem] bg-base-profile drop-shadow-lg">
      <Image
        src={profile.avatarUrl}
        width={148}
        height={148}
        alt={profile.name}
        className="my-8 ml-10 h-fit rounded-lg"
      />

      <section className="ml-8 mt-10 mb-8 flex w-full flex-col justify-between pr-8">
        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold  text-base-title">{profile.name}</h1>
            <a
              className="flex items-center gap-2 text-xs font-bold text-blue underline-offset-4 hover:underline"
              href={profile.url}
            >
              GITHUB
              <FontAwesomeIcon icon={faUpRightFromSquare} width={12} height={12} />
            </a>
          </div>

          <p className="mt-2 leading-[160%]">{profile.bio}</p>
        </div>

        <footer className="mt-4 flex gap-6">
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
