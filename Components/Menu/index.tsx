import React, { useState } from "react"
import {MenuBox,Flex1, Flex2, Logo, CartButton, CartNumber} from "./styles"
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export const Menu = ()=> {
    const {cartProduts, handleCartOpenClose} = useCart()
    return(
            <MenuBox>
                <Flex1>
                    <Logo>
                        MKS
                        <span>Sistemas</span>
                    </Logo>
                </Flex1>
                <Flex2> 
                    <CartButton onClick={()=> handleCartOpenClose()}>
                        <FaCartPlus ></FaCartPlus >
                        <CartNumber>{cartProduts.length}</CartNumber>
                    </CartButton>
                </Flex2>
            </MenuBox>
    )
}