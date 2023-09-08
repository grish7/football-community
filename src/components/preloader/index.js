import React from "react";
import prelImg from '../../assets/preloader.gif';
import { Image } from "../image";
import { MainWrap ,ContentWrap} from "./index.styles"; 

export const Preloader = () => {
    return (
      <MainWrap>
        <ContentWrap>
          <Image img={prelImg}/>
        </ContentWrap>
      </MainWrap>
    ) 
};