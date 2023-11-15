import styled from "styled-components";

export const StyledButton = styled.button`
   border: 0;
    background: ${({theme})=> theme.colors.standard.white};
    color: rgba(0,0,0,0.7);
    width: auto;
    padding: 0 1.5em;
    margin-left: -1em;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    grid-gap: 0.8em;
    font-size: 100%;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 1;

    svg {
        font-size: 120%;
        color: rgba(0,0,0,0.7);
    }
`