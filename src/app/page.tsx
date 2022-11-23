import { PostCard } from '@components/PostCard';
import { ProfileBanner } from '@components/ProfileBanner';
import { TextInput } from '@components/TextInput';

import { getPinnedPosts } from '@utils/getPinnedPosts';

export default async function Home() {
  const posts = await getPinnedPosts();

  console.log('Loading pinned posts from GitHub API');

  return (
    <div>
      <ProfileBanner />

      <main className="mt-[4.5rem]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-base-subtitle">Publicações</h2>
          <span className="text-sm text-base-span">6 publicações</span>
        </div>

        <TextInput placeholder="Buscar conteúdo" className="mt-3" />

        <div className="mt-12 grid grid-cols-1 gap-8 pb-8 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
