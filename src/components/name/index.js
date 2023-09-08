import React from "react";
import { NameStyle } from "./index.styles";

export const Name = ({children, ...props}) => {
  return(
    <NameStyle {...props}>
      <h1>{children} </h1>      
    </NameStyle>
  )
}