import styled from 'styled-components';


export const WrapperMainPage = styled.div`
    height: 100vh;
    background: url('./Playing-Football.jpg') 
    no-repeat 50% 50%;    
    background-repeat: no-repeat;
    background-size:cover;  
    background-position: center;    
    display:flex;
`


export const ContentWrapper = styled.div`
    width:100%;
    height:100vh;
    display: flex;    
    overflow: hidden;    
`




export const NavbarWrapper = styled.ul`
    width:300px;
    height:100%;
    background-color:grey;    
`


export const LiElement = styled.li`
    width:90%;
    margin: 40px auto;
    color:grey;
    display:flex;     
`


export const MainLogo = styled.div`
    box-shadow: 4px 4px  4px #0B1629;     
    background-color:rgba(139, 153, 160, 0.863);
    width:100%;
    height:50px;
    position:relative;
    z-index:1;
    `

    export const BlockImage = styled.div`
    width:100px;
    height:80px;
    `