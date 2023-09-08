import styled from "styled-components";


export const WrapMain = styled.div`
  width:50%;
  padding:4px;
  background-color:grey;
  background-color:rgba(127, 164, 182, 0.863);
  box-shadow: 4px 4px 4px rgba(127, 164, 182, 0.384); 
  position:absolute;
  top:10%;
  left:15%;
`

export const WrapBlockInfo = styled.div`
background-color: rgba(255, 255, 255, 0.651); 
box-shadow: 4px 4px 4px rgba(127, 164, 182, 0.384); 
`

export const WrapTitle = styled.div`
  width:100%;
  margin:20px 0;
  font-weight: bold;
  font-size:25px;
  text-align:center;
`

export const WrapContent = styled.div`
  width:100%;
  display:flex;
  padding:2px;
`

export const WrapImage = styled.div`
  background-color:grey;
  width:350px;
  height:250px;
  margin:5px 15px;
  float:left;

  @media(max-width: 790px){
    width:250px;
    height:150px;
  }
`

export const WrapText = styled.div`
  width:100%;
  margin:auto 2px;
  font-size:20px;
`

export const WrapSvg=styled.img`
  width:30px;
  height:30px;
  margin:0 5px;
  cursor:pointer;
  position:relative;
  left:90%;
  transform:translate(-90%)    
  
  &:hover{
    opacity:0.6;
  }`