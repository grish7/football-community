import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Wrapper = styled.div`
  background-color: #8CC4DF;
  width:100%;
  height:100vh;  
  `



export const WrapBlock = styled.div`
  background-color: #122543a6;  
  box-shadow: 4px 4px 4px  #122543a6;  
  width:350px;
  height:500px;
  padding:10px;
  margin: auto;  
  font-size:40px;
  color:white;
`


export const WrapText = styled.div`
  color:#122543a6;  
  font-size:22px;
  margin: 40px auto;
  max-width:250px;
`


export const WrapInput= styled.div`
background-color: white;
margin:20px auto;
width:300px;
height:60px;
display:flex;
`

export const WrapImage = styled.img`
width: 30px;
height:30px;
margin:auto;
`

export const WrapSvg=styled.img`
  width:30px;
  height:30px;
  margin:auto;
  cursor:pointer;
  
  &:hover{
    opacity:0.6;
  }`
  

  export const NavLink = styled(Link)` 
    display:block; 
    width:80px;
    margin:20px auto;          
    display:flex;  
    text-decoration: none; 
    color:white;

    // margin: 20px auto;         
    // display:flex;  
    // text-decoration: none; 
`

export const WrapBtn = styled.div`
// display:flex;
// flex-ditection:collumn;
// margin:auto;
// width:250px;
`

export const WrapTextLink = styled.div`
  font-size:20px;
  `



  export const NavLinkSign = styled(Link)`
  display:block; 
    width:220px;
    margin: auto;          
    display:flex;  
    text-decoration: none; 
  `