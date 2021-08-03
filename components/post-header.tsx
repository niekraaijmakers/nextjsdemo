import React from 'react';

import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }):JSX.Element {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div >
        <CoverImage title={title} url={coverImage.url} />
      </div>
    </>
  )
}
