import styled from "styled-components";

export const StyledButton = styled.button`
    border: 0;
    background: ${({theme})=> theme.colors.standard.white};
    width: 78px;
    height: 135px;
    display: none;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    border-radius: 5px;
    font-size: 150%;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 4;
    clip-path: polygon(100% 0, 100% 0, 100% 30%, 100% 70%, 100% 100%, 98% 100%, 65% 87%, 65% 11%);
    position: fixed;
    right: 0;
    top: 43%;

    &:hover {
        transform: translateY(2px);
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
        display: flex;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 38px;
        font-size: 110%;
        height: 85px;
    }
`