import React from "react";
import {ImageStyle} from './index.styles';

export const Image = ({children, ...props}) => {

  return(
    <ImageStyle {...props}>
      {children}
    </ImageStyle>
  )
}
