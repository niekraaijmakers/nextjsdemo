import React from 'react';

import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

export interface CoverImageProps {
    title: string;
    url: string;
    slug?: string;
}

export default function CoverImage(props:CoverImageProps):JSX.Element {
  const { title, url, slug } = props;
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
    />
  )

  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
