import styled from "styled-components";

const views = {
  logo: {
    regular: `
      width: 80%;
      text-shadow: 2px 2px 2px #e2ff65;
    `,    
  },
  navbar: {
    regular: `
      margin: auto;                
      cursor: pointer;
    `,
    hover:`
      text-shadow: 2px 2px 2px #e2ff65;
      visibility:visible;
    `,
  },
  title: {
    regular:`
      cursor: pointer;
      margin-bottom: 20px; 
      font-size: 12px;
    `,
    hover:`
      text-shadow: 2px 2px 2px #fff;
    `,
  },
};


export const NameStyle = styled.div`
    text-align: center;
    color: #122543;     


    ${({ view = "logo" }) => views[view].regular}
    
  &:hover {
    ${({ view = "logo" }) => views[view].hover}
  }
`;
