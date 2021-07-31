import React from 'react';
import {ContainerProps} from "../model/types";

export default function PostTitle(props:ContainerProps):JSX.Element{
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {props.children}
    </h1>
  )
}
