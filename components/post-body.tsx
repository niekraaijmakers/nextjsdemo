import React from 'react';


export default function PostBody({ content }):JSX.Element {
  return (
    <div
      className={`max-w-2xl mx-auto post`}
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  )
}
