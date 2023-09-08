import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapItem = styled.div`
  max-width:100%;
  height:250px; 
  background-color: grey;
  margin:20px;
  box-shadow: 4px 4px 4px rgba(127, 164, 182, 0.384);  

&: hover{
  box-shadow: 4px 4px  4px #E2FF65;  
}
`


export const WrapMainTodo = styled.div`
      width:95%;    
      margin: 10px auto;
      padding-bottom:1px;
      background-color: #8cc3df;
      box-shadow: 4px 4px 4px rgba(127, 164, 182, 0.384);
    `

    export const WrapForBtn = styled.div`
        width:100%;
        height:50px;
        background-color:rgba(127, 164, 182, 0.384);
        display:flex;
        justify-content: space-between;
        padding: 0 20px;
    `

    
    export const WrapFlexBtn = styled.div`
      background-color:rgba(127, 164, 182, 0.384);
      display:flex;
      padding:10px;
    `

    export const WrapFlexTodo = styled.div`
      background-color: #fff; 
      display:flex;
      margin:15px;
      border: 2px solid rgba(127, 164, 182, 0.384); 
      box-shadow: 4px 4px  4px #0B1629;     
      justify-content:space-between;
      padding:10px;
    `


export const WrapItemTodo = styled.div`
  width:100%;
  height:100%;
  background-color: red;
`

export const Info = styled(Link)`
  font-size:20px;
  color:red;
  text-decoration: none;   

&: hover{
    text-shadow: 4px 4px  4px #E2FF65;
    }
`

export const WrapDescription = styled.div`
  height:90px;
  overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
`

