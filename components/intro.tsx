import React from 'react';

import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro():JSX.Element {
  return (
    <section>
      <h1>
        Blog.
      </h1>
      <h4>
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
        >
          {CMS_NAME}
        </a>
        .
      </h4>
    </section>
  )
}
