import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Wrapper = styled.div`
&{
  background-color: #8CC4DF;
  width:100%;
  height:100vh;  
}`



export const WrapBlock = styled.div`
&{
  box-shadow: 4px 4px 4px rgba(127, 164, 182, 0.384);
  background-color: #122543a6;  
  box-shadow: 4px 4px 4px  #122543a6;  
  width:350px;
  height:500px;
  padding:10px;
  margin: auto;  
  color:white;
}`


export const WrapText = styled.div`
&{
  color:#122543a6;
  font-size:22px;
  margin: 40px auto;
  max-width:250px;
}`


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
  }
  `
  

  export const NavLink = styled(Link)`  
    margin: 20px auto;         
    display:flex;  
    text-decoration: none; 
`
