import React from "react"
import {StyledButton} from "./styles"

interface SecundaryTabButtonProps {
    Text: string;
    onClick: ()=> void
    isTabButtonToggle: string
}
export const SecundaryTabButton: React.FC<SecundaryTabButtonProps> = ({Text, onClick, isTabButtonToggle})=> {
    
    return(
        <StyledButton onClick={onClick} isTabButtonToggle={isTabButtonToggle}>{Text}</StyledButton>
    )
}