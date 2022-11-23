import { PostInfo } from '@components/PostInfo';

type PostProps = {
  params: {
    number: string;
  };
};

export default function Post({ params }: PostProps) {
  return (
    <div>
      <PostInfo number={params.number} />
    </div>
  );
}
