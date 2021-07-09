import React, {ReactNode} from 'react';
import {ContainerProps} from "../model/types";


export default function Container(props:ContainerProps): JSX.Element{
  return <div className="container mx-auto px-5">{props.children}</div>
}
