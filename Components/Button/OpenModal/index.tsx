import React from "react"
import { useUsefull } from "../../../context/UsefullContext"
import {StyledButton} from "./styles"

interface OpenModalProps {
    children: any
}
export const OpenModal: React.FC<OpenModalProps> = ({children})=> {
    const {openModalHandler} = useUsefull()

    return(
        <StyledButton onClick={openModalHandler}>{children}</StyledButton>
    )
}