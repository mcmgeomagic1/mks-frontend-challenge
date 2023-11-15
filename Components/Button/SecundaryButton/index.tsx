import React from "react"
import {StyledSecundaryButton} from "./styles"

interface SecundaryButton {
    Text: string;
    icon?: any;
    size?: string
    onClick?: any
}
export const SecundaryButton: React.FC<SecundaryButton> = ({Text, icon, size, onClick})=> {
    return(
        <StyledSecundaryButton size={size} onClick={onClick}>{Text} {icon}</StyledSecundaryButton>
    )
}