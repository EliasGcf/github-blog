import { DefaultTags } from '@components/DefaultTags';

import { getPosts } from '@utils/getPosts';

export default async function Head() {
  const posts = await getPosts();

  return (
    <>
      <title>GitHub Blog</title>
      <meta
        name="description"
        content={`This is a blog that uses GitHub as CMS - ${String(
          posts.length
        ).padStart(2, '0')} ${posts.length === 1 ? 'post' : 'posts'}`}
      />

      <DefaultTags />
    </>
  );
}
