import styled from "styled-components";



export const LogoStyle= styled.div`
    background: url('${props => props.img}') no-repeat 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin:3px 0 0 20px;
    width:40px;
    height:40px;   
    box-shadow: 4px 4px  4px #0B1629;   
    cursor: pointer; 
  
  &: hover{    
    box-shadow: 4px 4px  4px #E2FF65;

  }
  `