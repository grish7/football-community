import React from 'react';
import styled from 'styled-components';




export const views = {
    todo:`
        background-color: #fff;
        width: 50px;        
        `,
    modal: `        
        margin:auto;  
        width:100%;       
        `,
    modalsmall:`
        width:100%;        
        margin:auto;         
    `,
    list:`
        width:150px;
        background-color: pink; 
    `,
    search:`
        width:95%;
        border-radius:15px;
        font-size:20px;   
        border:0px;
        background-color:rgba(166, 177, 176, 0.411);  
    ` ,
    login:`
        width:95%;
        height:50px;
        border-radius:15px;  
        border:0px;
        margin:5px auto;
        
    `     
}




export const Input = styled.input`
    & {
        border: 0.3px solid #122543;;
        border-radius: 8px;
        padding: 7px;
        outline: none;
        font-size: 15px;
        display: block;
        margin-bottom: 5px;        

        ${
            ({view = 'todo'}) => views[view]
        } 
    }
`

export const InputLabel = styled.p`
        width:60px;
        font-weight: 600;
        margin-bottom: 3px;
        font-size: 14px;
        margin-left:5px;
        margin-top: 5px;
`;
