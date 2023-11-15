import styled from "styled-components"

export const StyledProductCard = styled.div`
	box-shadow: 3px 3px 12px rgba(0,0,0,0.1);
	width: 100%;
    height: 320px;
    background: #fff;
    border-radius: 15px;

	@media(max-width: ${({theme}) => theme.desktop}) {
		height: 320px;
		margin-bottom: 2em;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		margin-bottom: 2em;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
         height: 370px;
    }

`

export const ProductCardImage = styled.div`
	height: 50%;
	padding: 1em 0em;
	display: flex;
	justify-content: center;

	@media(max-width: ${({theme}) => theme.mobile}) {
         height: 40%;
    }

	img{
		object-fit: cover;
		height: 83%;
		@media(max-width: ${({theme}) => theme.mobile}) {
         height: 160%;
    	}
	}

`

export const ProductCardBody = styled.div`
	padding: 0em 1em;
	margin-top: -2.9em;
	height: 105px;
	display: flex;
	align-items: center;

	@media(max-width: ${({theme}) => theme.mobile}) {
		margin-top: 2.5em;
    }
`

export const ProductTitle = styled.h1`
	font-size: 120%;
	width: 70%;
	line-height: 30px;

	@media(max-width: ${({theme}) => theme.desktop}) {
		font-size: 110%;
		width: 100%;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		font-size: 140%;
		width: 70%;
	}

`

export const ProductPrice = styled.span`
	font-size: 90%;
	color: #fff;
	font-weight: bold;
	background: #000;
	padding: 1em .5em;
	border-radius: 15px;
	margin-top: -.4em;

	@media(max-width: ${({theme}) => theme.desktop}) {
		padding: 1em .5em;
		font-size: 78%;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		padding: 1em .5em;
		font-size: 100%;
	}
`

export const ProductButtonSection = styled.div`
	padding:0em 1em;

	@media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }

`
export const CardDescriptionBox = styled.div`
	margin-top: -1em;
	margin-bottom: 1em;
`

export const CardDescription = styled.p`
	p {
		font-size: 90%;
		opacity: 1;
		font-weight: bold;
	}

`
export const ProductButton = styled.div`
 	background: ${({theme})=> theme.colors.primary};
	font-weight: bold;
	border: 0;
	border-bottom-right-radius: 15px;
	border-bottom-left-radius: 15px;
	text-align: center;
	color: ${({theme})=> theme.colors.standard.white};
	grid-gap: 1em;
	padding:1em 1em;
	cursor: pointer;

	@media(max-width: ${({theme}) => theme.mobile}) {
       
    }

`
