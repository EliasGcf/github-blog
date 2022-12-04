import { getPost } from '@utils/getPost';

import { DefaultTags } from '@components/DefaultTags';

type HeadProps = {
  params: {
    number: string;
  };
};

export default async function Head({ params }: HeadProps) {
  const post = await getPost(params.number);

  return (
    <>
      <DefaultTags />
      <title>{post.title}</title>
    </>
  );
}
