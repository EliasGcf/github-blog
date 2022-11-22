import Link from 'next/link';

export function PostCard() {
  return (
    <Link href="/post/1">
      <div className="flex flex-col rounded-[10px] border-2 border-transparent bg-base-post p-8 transition-colors hover:border-base-label">
        <div className="flex items-baseline justify-between gap-4 md:gap-3">
          <h3 className="break-words text-xl font-bold leading-[160%] text-base-title">
            JavaScript data types and data structures
          </h3>

          <span className="whitespace-nowrap text-sm text-base-span">Há 1 dia</span>
        </div>

        <p className="mt-5 leading-relaxed text-base-text line-clamp-4">
          Programming languages all have built-in data structures, but these often differ
          from one language to another. This article attempts to list the built-in data
          structures available in JavaScript and what properties they have. These can be
          used to build other data structures. Wherever possible, comparisons with other
          languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and re-assigned) values
          of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a
          string foo = true; // foo is now a boolean
        </p>
      </div>
    </Link>
  );
}
