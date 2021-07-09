import React from 'react';

import postStyles from './post-styles.module.css'

export default function PostBody({ content }):JSX.Element {
  return (
    <div
      className={`max-w-2xl mx-auto post ${postStyles.post}`}
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  )
}
