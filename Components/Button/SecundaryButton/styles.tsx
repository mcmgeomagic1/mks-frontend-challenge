import styled from "styled-components";

interface StyledSecundaryButton {
    size?: string | any
}
export const StyledSecundaryButton = styled.button<StyledSecundaryButton>`
    border: 0;
    background: ${({theme})=> theme.colors.background};
    color: ${({theme})=> theme.colors.primary};
    width: ${props => props.size};
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 15px;
    grid-gap: 0.8em;
    font-size: 100%;
    cursor: pointer;
    transition: all 0.2s;

    svg {
        font-size: 120%;
    }

    &:hover {
        transform: translateY(2px);
    }
`