import React from "react"
import {StyledButton} from "./styles"

interface TabButtonProps {
    Text: string;
    onClick: ()=> void
    isTabButtonToggle: string
}
export const TabButton: React.FC<TabButtonProps> = ({Text, onClick, isTabButtonToggle})=> {
    return(
        <StyledButton onClick={onClick} isTabButtonToggle={isTabButtonToggle}>{Text}</StyledButton>
    )
}