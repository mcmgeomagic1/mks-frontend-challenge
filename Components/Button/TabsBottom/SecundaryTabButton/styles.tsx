import styled from "styled-components";

type StyledButtonProps= {
    isTabButtonToggle: string
}

export const StyledButton = styled.button<StyledButtonProps>`
    border: 0;
    background: ${props=> props.isTabButtonToggle === "Directorio" ? "#7482FF" : "#ffffff"};
    color: ${props=> props.isTabButtonToggle === "Directorio" ? "#ffffff" : "#000000"};
    width: 138px;
    padding: 0 1.5em;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 15px 15px 0px;
    font-weight: ${props=> props.isTabButtonToggle === "Directorio" ? "bold" : "400"};
    box-shadow: ${props=> props.isTabButtonToggle === "Directorio" ? "0" : "4px 4px 8px rgba(116,130,238,0.1)"};
    grid-gap: 0.8em;
    font-size: 100%;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 1;
`