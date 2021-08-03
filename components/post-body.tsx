import React from 'react';
import Avatar from "./avatar";
import Date from "./date";


export default function PostBody({ content, author, date }):JSX.Element {
  return (
      <>
        <div
            dangerouslySetInnerHTML={{ __html: content?.html }}
        />
        <div>
          <div>
            <Avatar name={author.name} picture={author.picture.url} />
          </div>
          <div>
            <Date dateString={date} />
          </div>
        </div>
      </>


  )
}
