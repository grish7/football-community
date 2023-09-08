import React from "react";
import {MainWrap} from './index.styles';



export const Alert = ({children, ...props}) => {


  return(
    <>
      <MainWrap  {...props}>
        {children}
      </MainWrap>
    </>
  )
}