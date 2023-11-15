import styled from "styled-components";

export const StyledButton = styled.button`
    border: 0;
    background: ${({theme})=> theme.colors.primary};
    color: ${({theme})=> theme.colors.standard.white};
    width: auto;
    padding: 0 1.5em;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 15px;
    grid-gap: 0.8em;
    font-size: 100%;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 1;

    svg {
        font-size: 120%;
    }

    &:hover {
        transform: translateY(2px);
    }
`