import React from 'react';

import Image from 'next/image'

export default function Avatar({ name, picture , hideName = false}):JSX.Element {
  return (
    <div className="d-flex align-items-center">
      <div className="avatar-card position-relative mr-4">
        <Image
          src={picture}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
        {
            !hideName && <div className="text-xl">{name}</div>
        }
    </div>
  )
}
