import React from "react";
import { Name } from "../name";
import { WrapItem, WrapMainTodo, WrapDescription ,Info, WrapForBtn} from "./index.styles";
import { Image } from "../image";

export const Article = ({id,title, description,image, onClickArticle}) => {

  
  return (
    <>

          <WrapMainTodo >
              <WrapForBtn></WrapForBtn> 
              <Name view='title'>{title} </Name>
              <WrapItem><Image img={image}></Image></WrapItem> 
              <WrapDescription>{description}</WrapDescription>
              <Info to="more-info"  
              onClick={()=> onClickArticle(id)}
              > читать подробнее...</Info>
          </WrapMainTodo>    
        
    </>    
  );
};





