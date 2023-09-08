import { Link } from "react-router-dom";
import styled from "styled-components";



export const WrapText = styled.div`
    padding: 10px 10px;
    color: white;   
    position:absolute;   
    left:10%; 
`
export const MainLogo = styled.div`
    box-shadow: 4px 4px  4px #0B1629;     
    background-color:rgba(139, 153, 160, 0.863);
    width:100%;
    height:50px;
    position:relative;    
    z-index:1;
    display:flex;
    font-family: 'Monoton', cursive;
    padding-right:3%;

    `

    export const WrapLink = styled(Link)`
    text-decoration:none;
    `

    export const WrapNick = styled.div`
    color:red;
    color: #122543;
    height:30px;
    font-weight: bold;
    font-size: 20px;
    max-width:150px;
    display:block;
    marhin-top:8px;
    `

    export const WrapperRightBlock = styled.div`
    max-width:30%;  
    display:flex;
    justify-content: space-between; 
    `

    export const WrapLogo = styled.div`
    margin-right:10px;
    `