import React from "react";
import { LogoStyle } from './index.styles';





export const Logo = ({children,...props}) => {

  

  return(
    <LogoStyle {...props}>
      {children}
    </LogoStyle>
  )
}