import React from 'react';

import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}):JSX.Element {
  return (
    <div>
      <div>
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div>
        <Date dateString={date} />
      </div>
      <p>{excerpt}</p>
    </div>
  )
}
