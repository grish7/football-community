import React from "react";

import { Menu } from "../../components/menu"; 
import {Wrapper, WrapText} from './index.styles';

export const ErrorPage = () =>{
  return(  
    <Wrapper>
      <Menu/> 
      <WrapText>
        <h1>Страница не найдена </h1>
      </WrapText>
    </Wrapper>
  )
}