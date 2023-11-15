import type { NextPage } from 'next'
import {Loading, ProductsSection } from './style'
import { useProduct } from '../context/AppContext'
import { Menu } from '../Components/Menu'
import Product from "../Components/Product"
import { Container } from '../styles/Container'
import Cart from '../Components/Cart'
import { useCart } from '../context/CartContext'
import  Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const Home: NextPage = () => { 
  const {products, isLoading, isError} = useProduct()
  const {isCartOpen} = useCart()

  if(isLoading) {
    return (
      <>
        <Menu/>
        <Container>
          <Loading>
          <SkeletonTheme height="50px" duration={1} >
            <Skeleton count={12}  />  
          </SkeletonTheme> 
          </Loading>
        </Container>
      </>
    )
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

