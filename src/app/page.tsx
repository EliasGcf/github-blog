import { SearchPostsAndList } from '@components/SearchPostsAndList';
import { ProfileBanner } from '@components/ProfileBanner';

import { getPosts } from '@utils/getPosts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <ProfileBanner />
      <SearchPostsAndList posts={posts} />
    </div>
  );
}
