import React from "react";
import {StyleButton, WrapBtn} from './index.styles';


export const Button = ({children, ...props}) =>{
  
  return(
    <WrapBtn {...props}>
      <StyleButton {...props}>
        {children}
      </StyleButton>      
    </WrapBtn>
  )
}