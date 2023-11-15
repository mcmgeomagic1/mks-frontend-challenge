import styled from "styled-components";

type StyledButtonProps  ={
    isTabButtonToggle: string
}
export const StyledButton = styled.button<StyledButtonProps>`
    background: ${props=> props.isTabButtonToggle === "Tabela" ? "#7482FF" : "#ffffff"};
    color: ${props=> props.isTabButtonToggle === "Tabela" ? "#ffffff" : "#000000"};
    width: 138px;
    padding: 0 1.5em;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${props=> props.isTabButtonToggle === "Tabela" ? "bold" : "400"};
    box-shadow: ${props=> props.isTabButtonToggle === "Tabela" ? "0" : "4px 4px 8px rgba(116,130,238,0.1)"};
    border-radius: 15px 0 0 15px;
    grid-gap: 0.8em;
    font-size: 100%;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 1;
`