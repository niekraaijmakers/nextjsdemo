import React from 'react';

import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }):JSX.Element {
  return (
    <section>
      <h2>
        More Stories
      </h2>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
