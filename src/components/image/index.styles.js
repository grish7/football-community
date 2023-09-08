import styled from "styled-components";


export const ImageStyle = styled.div`
    width:100%;
    height:100%;
    background: url('${props => props.img}')  no-repeat 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    `