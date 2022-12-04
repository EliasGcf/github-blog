import { PostContent } from '@components/PostContent';
import { PostInfo } from '@components/PostInfo';

import { getPost } from '@utils/getPost';

type PostProps = {
  params: {
    number: string;
  };
};

export default async function Post({ params }: PostProps) {
  const post = await getPost(params.number);

  return (
    <div>
      <PostInfo post={post} />
      <PostContent content={post.content} />
    </div>
  );
}
