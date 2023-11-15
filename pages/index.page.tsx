import type { NextPage } from 'next'
import {Loading, ProductsSection } from './style'
import { useProduct } from '../context/AppContext'
import { Menu } from '../Components/Menu'
import Product from "../Components/Product"
import { Container } from '../styles/Container'
import Cart from '../Components/Cart'
import { useCart } from '../context/CartContext'
import { useState } from 'react'


const Home: NextPage = () => { 
  const {products, isLoading, isError} = useProduct()
  const {isCartOpen} = useCart()

  if(isLoading) {
    return <Loading>Carregando...</Loading>;
  }

  if (isError) {
    return <div>Erro ao carregar produtos</div>;
  }

  return (
    <>
      <Menu/>
      {
        isCartOpen ?
          <Cart/>
        : false
      }
      <Container>
        <ProductsSection >
          {
            products.map((product: any, index: number) => (       
              <Product key={index} product={product}/>
            )) 
          }                             
        </ProductsSection >
      </Container>
    </>

  )
}


export default Home

