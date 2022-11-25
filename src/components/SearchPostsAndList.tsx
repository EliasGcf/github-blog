'use client';

import { useState } from 'react';

import { PostCard } from '@components/PostCard';
import { TextInput } from '@components/TextInput';

import { Post } from '@utils/getPosts';

type SearchPostsAndListProps = {
  posts: Post[];
};

export function SearchPostsAndList({ posts }: SearchPostsAndListProps) {
  const [searchText, setSearchText] = useState('');

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <main className="mt-[4.5rem]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-base-subtitle">Publicações</h2>
        <span className="text-sm text-base-span">{filteredPosts.length} publicações</span>
      </div>

      <TextInput
        placeholder="Buscar conteúdo"
        className="mt-3"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="mt-12 grid grid-cols-1 gap-8 pb-8 md:grid-cols-2">
        {filteredPosts.map((post) => {
          return <PostCard key={post.number} post={post} />;
        })}
      </div>
    </main>
  );
}
