import { useCart } from '../../context/CartContext'
import {CartBox, Title, Header, ClosingButton, StyledImage, TotalPriceBar ,  FooterButton , Footer, CartsBox, CartProductBox, ProductCartImage, Remove, CartProductTitle, CartProductPrice, Controls, AddedNumber} from './style'
import { FaTimes, FaAngleLeft , FaAngleRight } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';


const Cart=() => {
    const {handleCartOpenClose} = useCart()
    const {cartProduts, updateQuantity, removeFromCart, totalPrice} = useCart()

	return (
		<CartBox>
            <Header>
                <Title>Carrinho<br/>de Compraas</Title>
                <ClosingButton onClick={()=> handleCartOpenClose()}>
                    <FaTimes></FaTimes>
                </ClosingButton>
            </Header>
            <CartsBox>
                {
                    cartProduts.map((product: any)=> (
                        <CartProductBox key={product.id}>
                            <Remove onClick={()=> removeFromCart(product.id)}>
                                <FaTimes></FaTimes>
                            </Remove>
                            <ProductCartImage>
                                <StyledImage src={product.photo} alt="product cart image"/>
                            </ProductCartImage>
                            <CartProductTitle>{product.name}</CartProductTitle>
                            <Controls>
                                <FaAngleLeft onClick={()=> updateQuantity(product.id, product.quantity === 1 ? 1 : product.quantity - 1)}></FaAngleLeft>
                                    <AddedNumber>{product.quantity}</AddedNumber>
                                <FaAngleRight onClick={()=> updateQuantity(product.id, product.quantity + 1)}></FaAngleRight>
                            </Controls>
                            <CartProductPrice>R${product.price}</CartProductPrice>
                        </CartProductBox>
                    ))
                }
            </CartsBox>
            <Footer>
                <TotalPriceBar>
                    <span>Total</span>
                    <span>R${totalPrice}</span>
                </TotalPriceBar>
                <FooterButton>Finalizar Compra</FooterButton>
            </Footer>
        </CartBox>
	)
} 

export default Cart