import Image from 'next/image'
import { useCart } from '../../context/CartContext'
import {StyledProductCard, StyledImage, ProductCardImage, ProductCardBody, ProductTitle, ProductPrice, ProductButtonSection, ProductButton, CardDescription, CardDescriptionBox} from './style'

interface productProps {
 product: any
}

const Product: React.FC<productProps> =({product}) => {
    const {addToCart} = useCart()

	return (
		<StyledProductCard>
            <ProductCardImage>
                <StyledImage src={product.photo} alt="product image"/>
            </ProductCardImage>
            <ProductCardBody>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice color={'#3B74F2'}>R${product.price}</ProductPrice>
            </ProductCardBody>
            <ProductButtonSection>
                <CardDescriptionBox>
                    <CardDescription>{product.description.length > 60 ? product.description.slice(0, 43) + "..." : product.description}</CardDescription>
                </CardDescriptionBox>
            </ProductButtonSection>
            <ProductButton onClick={()=>  addToCart(product.id)}>COMPRAR</ProductButton>
        </StyledProductCard>
	)
} 

export default Product