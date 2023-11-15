import React from "react"
import {StyledButton} from "./styles"
import {FiList} from "react-icons/fi"
import { Select } from "@chakra-ui/react"

interface SortByBottonProps {
    onChange: ()=> void
}
export const SortByBotton: React.FC<SortByBottonProps> = ({onChange})=> {
    return(
        <>
            <Select 
                width="140px" 
                bg="#fff" 
                borderRadius="15px" 
                boxShadow="4px 4px 8px rgba(116, 130, 238, 0.1)" 
                border="0"
                onChange={onChange}
            >
                <option value='ascendente'>Mais recentes</option>
                <option value='descentende'>Mais antigos</option>
            </Select>
        </>
    )
}