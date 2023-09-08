import React, {useState} from "react";
import { WrapMain,WrapSvg, WrapTitle, WrapImage,WrapBlockInfo, WrapText,WrapContent } from "./index.styles";
import Close from '../../assets/close.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image } from "../image";


export const HugeArticle =() => {


  const artic = useSelector(state => state.article.article)




  return(
    <>
    { artic.length && artic.map(item =>( 
    <WrapMain  key ={item.id}>
      <Link to='/'>
        <WrapSvg src={Close} />
      </Link>
      <WrapBlockInfo>
        <WrapTitle> {item.title}</WrapTitle>
        <WrapContent>         
          <WrapText>
          <WrapImage><Image img={item.image}/></WrapImage> 
            {item.description}
          </WrapText>
        </WrapContent>
      </WrapBlockInfo>  
    </WrapMain>
    ))} 
    </>
  )
}