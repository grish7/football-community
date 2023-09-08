import styled from "styled-components";

const views = {
  create:`    
    width: 90px;
    height:35px;  
    color:#0B1629;     
  `,
  filter:` 
  width:30%;
  overflow:hidden;

  &.active{
    color:white;
    background-color:rgba(127, 164, 182, 0.384);
    background-color:#122543a2;
    box-shadow: 4px 4px  4px #E2FF65;
  }
  
  `,
  delete:`
    width:50px;
    height:30px;   
  `,
  add:`
    width:50px;
    height:30px;  
  `,
  close:`
    max-width:100%;
    height:70%;      
  ` ,
  login:`
  width: 240px;
  height:35px;
  margin: 20px auto;    
  color:#fff; 
  text-shadow: 2px 2px 2px #122543;
  font-size:20px;
  // background-color:blue;

  `,
  logout:`
  width: 120px;
  height:35px;   
  color:#fff; 
  text-shadow: 2px 2px 2px #122543;
  font-size:20px;
  `
}

export const WrapBtn = styled.div`
&{       
  box-shadow: 4px 4px  4px #0B1629;
  margin:8px;
  text-align: center;
  font-size:20px;
  font-weight:bold; 
  // cursor:pointer;    
  
  ${
    ({view = 'create'}) => views[view]
  } 
}
${(props)=> !props.disabled &&
  `: hover{
  box-shadow: 4px 4px  4px #E2FF65;
  cursor:pointer;  
}`}


`

export const StyleButton = styled.button`
  width: 100%;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent; 
  cursor:pointer;



  &:disabled{
    color:grey;
    cursor:default;   
    
  }
  `


  
  
