import styled from 'styled-components';



export const WrapperTodoList = styled.div` 
    max-width: 25%;    
    height: 90%;       
    background-color: rgba(127, 164, 182, 0.384);  // !!!   
    border-radius: 8px;
    box-shadow: 4px 4px 4px rgba(127, 164, 182, 0.384);
    padding:5px;
    margin-top:60px;
    margin-left: 20px;
    position:absolute;
    top:0;
    left:70%;   
    
    // @media(max-width: 900px){
    //     max-width:60%;
    //     position:absolute;
    //     top:0;
    //     left:50%; 
    //     transform:translate(-50%)    


    //     // :disabled
    // }
    `

    export const MainTitle = styled.div`    
        max-width: 100%;   
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        background-color:rgba(78, 96, 105, 0.384);
        color: #122543;
`

    export const WrapTitle = styled.div`      
        text-align: center;      
        color: #122543;
        font-size:40px;
        font-weight:bold;
        display:flex;
        margin:auto 5px;
    `

    


    export const WrapFilterTodoList = styled.div`
        width:100%;
        background-color:rgba(127, 164, 182, 0.384);
        display:flex;
        height:50px;
        position: sticky;
        top:2px;
    `

    export const WrapTodo = styled.div`      
        height:94%;
        overflow:auto;        

    ::-webkit-scrollbar {
        height: 12px;
        width: 6px;
        background: lightgray;
        border-radius: 10px;
    }
    
    
    ::-webkit-scrollbar-thumb {
        background: darkgray;
        -webkit-border-radius: 1ex; 
    }
    
    ::-webkit-scrollbar-corner {
        background: #2d2d2d;
        border-radius: 10px;
    }
    `





export const WrapperTodos = styled.ul`
  & {
    width: 90%;
    height: 90%;    
    margin: 10px auto;
    overflow-y: auto;
    box-shadow: 4px 4px 4px rgba(127, 164, 182, 0.384);
    background-color: rgba(127, 164, 182, 0.384);

    ::-webkit-scrollbar {
    eight: 12px;
    width: 6px;
    background: lightgray;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
    background: darkgray;
    -webkit-border-radius: 1ex;
    }

    ::-webkit-scrollbar-corner {
    background: #2d2d2d;
    border-radius: 10px;
    }
  }
`;


export const WrapInput = styled.div`
&{
    width:100%;
    background-color:white;
}`


export const InputWrapper = styled.div`
    width: 400px;
    margin:auto;     
    `;


    export const RightBlock = styled.div`    
    display: flex;    
    margin:auto;  
    `;


