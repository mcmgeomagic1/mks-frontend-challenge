import React from "react"
import { useButton } from "../../context/ButtonContext";
import {StyledButton} from "./styles"

interface ButtonProps {
    Text: string;
    icon?: any;
    onClick?: ()=> void
}
export const Button: React.FC<ButtonProps> = ({Text, icon, onClick})=> {
    return(
        <StyledButton onClick={onClick}>{Text} {icon}</StyledButton>
    )
}